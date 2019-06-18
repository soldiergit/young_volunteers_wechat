import { Activity } from 'class/Activity.js';
var app = getApp();

Page({

	data: {
		activity: {}
	},

	onLoad: function (options) {
		// 接收参数
		var activityId = options.activityId;
		var req_data = { activityId: activityId};
		var url = "/biz/activity_findOneVolunteer.action";

		var activity = new Activity(url, req_data);
		activity.getActivityData((activity) => {
			this.setData({
				activity: activity
			})
		})
		wx.hideNavigationBarLoading();//关闭加载动画
	},

	/*
		查看图片：
			小程序本身只有2M大小的限制，所有无法预览本独图片
	*/
	viewActivityCode: function (e) {
		var src = e.currentTarget.dataset.src;
		console.log(src)
		wx.previewImage({
			urls: [src] ,// 需要预览的图片http链接列表
			current: src, // 当前显示图片的http链接
		})
	},
})