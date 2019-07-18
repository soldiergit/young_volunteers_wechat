var util = require('../../../../utils/util.js')
class VolunteerSignUp {
	constructor(url, req_data) {
		this.url = url;
		this.req_data = req_data;
	}

	getSignUpData(cb) {
		this.cb = cb;
		util.doPost(this.url, this.req_data, this.processSignUpData.bind(this));
	}

	processSignUpData(data) {
		if (!data.data) {
			return;
		}
		var signUp = {
			signUpId: data.data.signUpId,
			activityId: data.data.activityId,
			activityContent: data.data.activityContent,
			volunteerId: data.data.volunteerId,
			volunteerName: data.data.volunteerName,
			signIn: data.data.signIn,
			volunteerScore: data.data.volunteerScore,
		}
		this.cb(signUp);
	}
}

export { VolunteerSignUp }