var util = require('../../utils/util.js')
var app = getApp(); //获取全局app对象
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		req_data: { page: 1, limit: 20},
		url: "/biz/activity_findAllVolunteerActivity.action",
		activityData: '',
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		util.doGet(this.data.url, this.data.req_data, this.processData);
	},


	processData: function (data) {
		console.log(data),
		this.setData({
			activityData: data.data,
		});
		wx.hideNavigationBarLoading(); //在当前页面隐藏导航条加载动画
	},

	// 轮播图点击事件(这是放在img上的)
	onSwiperItemTap: function (event) {
		//注意data-之后到第二个‘-’之前算一个单词，要这样全小写
		var activityId = event.currentTarget.dataset.activityid;
		// 跳转到子页面：可返回的跳转(记得去app.json全局配置这个子页面)
		wx.navigateTo({
			url: 'activity-detail/activity-detail?activityId=' + activityId,
		})
	},

	// 轮播图点击事件
	onSwiperTap: function (event) {
        /**
         * target 和 currentTarget的区别：
         * 		target指的是当前点击的组件
         * 		currentTarget指的是事件捕获的组件
         * 	target这里指的是image，而currentTarget指的是swiper
         */
		//注意data-之后到第二个‘-’之前算一个单词，要这样全小写
		var activityId = event.currentTarget.dataset.activityid;
		// 跳转到子页面：可返回的跳转(记得去app.json全局配置这个子页面)
		wx.navigateTo({
			url: 'activity-detail/activity-detail?activityId=' + activityId,
		})
	},

	activityDetail: function (event) {
		// event：是框架给我们的事件对象
		// currentTarget：是鼠标的单击事件
		// dataset：是我们自定义数据（data-xxx）的集合
		//注意data-之后到第二个‘-’之前算一个单词，要这样全小写
		var activityId = event.currentTarget.dataset.activityid;
		// console.log("打开活动详情！"+ activityId);
		// 跳转到子页面：可返回的跳转(记得去app.json全局配置这个子页面)
		wx.navigateTo({
			url: 'activity-detail/activity-detail?activityId=' + activityId,
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})