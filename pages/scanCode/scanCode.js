let app = getApp();
var util = require("../../utils/util.js")
Page({
    data: {
        url: "/biz/volunteersignup_volunteerSignIn.action",
        req_data: {},
		result: ''
    },

    onLoad() {

        //页面加载完成直接打开扫一扫
        // wx.scanCode({
        //     success: (res) => {
        //         console.log(res);
        //         this.setData({
        //             req_data: {
        // 				activityId: res.result,
        // 				userId: wx.getStorageSync("userId")
        //             }
        // 		});
        // 		util.doGet(this.data.url, this.data.req_data, this.volunteerSignIn);
        //     },
        //     fail: (res) => {
        //         console.log(res);
        //     }
        // })
    },

    scan() {
		wx.scanCode({
            success: (res) => {
				// console.log(res);
				wx.showLoading({
					title: '签到中',
				}),
                this.setData({
					req_data: {
						result: res.result,
                        activityId: res.result,
                        userId: wx.getStorageSync("userId")
                    }
                });
                util.doGet(this.data.url, this.data.req_data, this.volunteerSignIn);
            },
            fail: (res) => {
                console.log(res);
            }
        })
	},

    /**
     * 签到
     */
    volunteerSignIn: function (data) {
		console.log(data);
		if (data.code === 0) {
			wx.showToast({
				title: '签到成功',
				icon: 'success',
				duration: 2000
			})
		} else {
			wx.showToast("签到失败");
		}
		wx.hideLoading();//隐藏 loading 提示框
		wx.hideNavigationBarLoading(); //在当前页面隐藏导航条加载动画
	}
})