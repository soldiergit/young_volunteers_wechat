const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

const formatTimeNew = date => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

var app = getApp(); //获取全局app对象
var projectPath = app.globalData.projectPath;
function doGet(url, data, callBack) {
    // 在当前页面显示导航条加载动画
	wx.showNavigationBarLoading();
    wx.request({
		url: projectPath +url,
		data: data,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
            "Content-Type": "json"
        },
        success: function(res) {
            // 执行传递过来的方法并给参数赋值
            callBack(res.data);
        },
        fail: function(error) {
            console.log(error)
        }
    })
}

function doPost(url, data, callBack) {
    // 在当前页面显示导航条加载动画
    wx.showNavigationBarLoading();
    wx.request({
		url: projectPath+url,
		method: 'POST', 
		data: data,
        header: {
			'content-type': 'application/x-www-form-urlencoded' 
        },
        success: function(res) {
            // 执行传递过来的方法并给参数赋值
            callBack(res.data);
        },
        fail: function(error) {
            console.log(error)
        }
    })
}

module.exports = {
	formatTime: formatTime,
	formatTimeNew: formatTimeNew,
    doPost: doPost,
    doGet: doGet,
}