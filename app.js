//app.js
App({
	// 定义全局变量
	globalData: {
		userInfo: null,
		projectPath: "http://localhost:8080/young_volunteers_web_war",
	},

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }

	  //如果用户初次进来点击登录拒绝了授权，应在 wx.getUserInfo 的失败回调函数中兼容此场景
	//   fail: () => {
	// 		//隐藏loading框
	// 		wx.hideLoading();
	// 		//提示用户授权
	// 		wx.showToast({
	// 			title: '你已拒绝授权，请授权再使用',
	// 			icon: 'none'
	// 		});
	// 	}
    })
  },
})