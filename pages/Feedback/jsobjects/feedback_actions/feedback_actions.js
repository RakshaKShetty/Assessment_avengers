export default {
	async submit () {
		try {
			const feedbackUsersNames = feedback_users.selectedOptionLabels;
			// fetch all the emails of managers of the employees
			const getManagers = ManagerEmail.run();
			// insertion of feedback to DB
			const saveFeedback = GiveFeedback.run();

			// get managers and insert feedback at once
			await Promise.all([getManagers, saveFeedback]);

			// send slack message about the feedback
			// TODO: hook up to the action
			const sendSlackMessage = Promise.resolve();

			// run the appropriate email task
			const sendEmail = (() => {
				// Perform task based on the selected value
				switch (feedback_type.selectedOptionValue) {
						// Public
					case feedback_type.options[0].value:{
						// TODO: hook up to correct email action
						return Promise.reject()
					}

						// Private
					case feedback_type.options[1].value:{
						return Give_feedback_private.run()
					return	Slack_message_giveFeedback.give_feedbackPrivateOnly_slack() 
					}

						// Manager only
					case feedback_type.options[2].value:{
						return Give_feedback_manageronly.run()
						// return Slack_message_giveFeedback.give_feedbackManagerOnly_Slack()
					}

						// Private + Manager
					case feedback_type.options[3].value:{
						return Give_feedback_mgr_private.run()
					//	return Slack_message_giveFeedback.give_feedbackPrivateMgr_slack()
					}

						// Add more cases for additional options as needed
					default: {
						// Default case if no matching option is found
						console.log('No task defined for this option');

						return Promise.reject();
					}
				}
			})();

			await Promise.all([sendSlackMessage, sendEmail]);

			// close the modal
			closeModal(feedback_send_form.name);

			// show success alert
			showAlert('You have successfully submitted feedback about ' + feedbackUsersNames.toString() + '!!!', 'success');

			// reset all input
			resetWidget("feedback_users", true);
			resetWidget("feedback_type", true);
			resetWidget("feedback_content", true)
		} catch(err) {
			console.error(err)
			showAlert('Unable to submit feedback', 'error');
		}
	},

	async request() {
		try {
			// insertion of request feedback to DB
			await RequestFB.run();;

			const options = request_feedback_type.options;			
			const sendEmail = (() => {
				// Perform task based on the selected value
				switch (request_feedback_type.selectedOptionValue) {
					// Private 
					case options[0].value: {
						return Request_feedback_private.run()
					//	return Slack_message_requestFeedback.request_feedbackPrivate_Slack()
					}

					// Private + Manager
					case options[1].value: {
						return Request_feedback_mgr_private.run()
					//	return Slack_message_requestFeedback.request_feedbackPrivateMgr_Slack()
					}

					// Manager Only
					case options[2].value: {
						return Request_feedback_manageronly.run()
					//	return Slack_message_requestFeedback.request_feedbackManagerOnly_slack()
					}

						// Add more cases for additional options as needed
					default: {
						// Default case if no matching option is found
						console.log('No task defined for this option');

						return Promise.reject();
					}
				}
			})();

			// TODO:
			const sendSlackMessage = Promise.resolve();

			await Promise.all([sendEmail, sendSlackMessage]);

			// close the modal
			closeModal(feedback_request_form.name);

			// show success alert
			showAlert('You have successfully request feedback' + '!!!', 'success');

			// reset all input
			resetWidget("request_feedback_users", true);
			resetWidget("request_feedback_type", true);
			resetWidget("request_feedback_content", true)
		} catch(err) {
			console.error(err)
			showAlert('Unable to request feedback', 'error');
		}
	}
}