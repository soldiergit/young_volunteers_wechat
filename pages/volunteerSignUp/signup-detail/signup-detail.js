import { VolunteerSignUp } from 'class/volunteerSignUp.js';
var app = getApp();

Page({

	data: {
		signUp: {}
	},

	onLoad: function (options) {
		// 接收参数
		var signUpId = options.signUpId;
		var req_data = { signUpId: signUpId};
		var url = "/biz/volunteersignup_findOneVolunteerSignUp.action";

		var signUp = new VolunteerSignUp(url, req_data);
		signUp.getSignUpData((signUp) => {
			this.setData({
				signUp: signUp
			})
		})
		wx.hideNavigationBarLoading();//关闭加载动画
	},
})