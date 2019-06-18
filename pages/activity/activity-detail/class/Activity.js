var util = require('../../../../utils/util.js')
class Activity {
	constructor(url, req_data) {
		this.url = url;
		this.req_data = req_data;
	}

	getActivityData(cb) {
		this.cb = cb;
		util.doGet(this.url, this.req_data, this.processActivityData.bind(this));
	}

	processActivityData(data) {
		if (!data.data) {
			return;
		}
		var activity = {
			activityId: data.data.activityId,
			activityCode: data.data.activityCode,
			activityPeopleNum: data.data.activityPeopleNum,
			activityLeader: data.data.activityLeader,
			activityTitle: data.data.activityTitle,
			activityContent: data.data.activityContent,
			activityEndTime: data.data.activityEndTime,
			activitySignEndTime: data.data.activitySignEndTime,
			activitySignStartTime: data.data.activitySignStartTime,
			activityStartTime: data.data.activityStartTime,
			codePath: data.data.codePath ? "/images/activity/QRCode/" +data.data.activityId+".jpg" : "",
		}
		this.cb(activity);
	}
}

export { Activity }