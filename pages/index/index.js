var util = require('../../utils/util.js')
var app = getApp(); //获取全局app对象
Page({
	formSubmit: function (e) {
		//开启loading框
		wx.showLoading({
			title: '正在登录...',
			mask: true
		});
		// 调用登录api
		var req_data = {
			loginAccount: e.detail.value.loginAccount,
			loginPassword: e.detail.value.loginPassword};
		var url =  '/login_userLogin.action';
		// 请求本地API：processData方法作为一个参数传到util.http方法里
		util.doPost(url, req_data, this.processData);
	},

	// 回调获取异步方法的值 并 处理返回数据--》data在util.http被赋值
	processData: function(data) {
		// console.log(data);
		if (data.code === 0) {
			//1.存用户信息到本地存储
			wx.setStorageSync("userId", data.data.userId),
				wx.setStorageSync("userName", data.data.userName),
				//2.存用户信息到全局变量
				app.globalData.userInfo = data
			//跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
			wx.switchTab({
				url: '/pages/main/main',
			})
		} else {
			//显示消息提示框
			wx.showToast({
				title: data.msg,
				icon: 'loading',
				duration: 2000
			})
		}
		//隐藏loading框
		wx.hideLoading();
		wx.hideNavigationBarLoading(); //在当前页面隐藏导航条加载动画
	}
})