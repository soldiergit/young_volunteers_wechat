// pages/login/login.js
var app = getApp(); //获取全局app对象
Page({
	formSubmit: function (e) {
		// console.log("222");
		wx.request({
			url: app.globalData.projectPath + '/login_userLogin.action',
			method: "POST",
			data: {
				loginAccount: e.detail.value.loginAccount,
				loginPassword: e.detail.value.loginPassword
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded' // 默认值
			},

			success: function (data) {
				console.log(data);
				if (data.data.code === 0) {
					//保存用户信息到session中
					wx.switchTab({
						url: '/pages/main/main',
					})
				} else {
					wx.showToast({
						title: data.data.msg,
						icon: 'loading',
						duration: 2000
					})
				}
			}
		})
	}
})