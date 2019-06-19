var util = require("../../utils/util.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: "/biz/volunteersignup_findAllVolunteerSignUp.action",
		req_data: { page: 1, limit: 20},
        volunteerSignUpData: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        util.doGet(this.data.url, this.data.req_data, this.processVolunteerSignUpData)
    },

	processVolunteerSignUpData: function(data) {
		console.log(data);
        this.setData({
            volunteerSignUpData: data.data,
        });
		wx.hideNavigationBarLoading();
	},

	activityDetail: function (event) {
		// event：是框架给我们的事件对象
		// currentTarget：是鼠标的单击事件
		// dataset：是我们自定义数据（data-xxx）的集合
		//注意data-之后到第二个‘-’之前算一个单词，要这样全小写
		var signUpId = event.currentTarget.dataset.signupid;
		console.log("打开活动报名详情！"+ signUpId);
		wx.navigateTo({
			url: 'signup-detail/signup-detail?signUpId=' + signUpId,
		})
	},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})