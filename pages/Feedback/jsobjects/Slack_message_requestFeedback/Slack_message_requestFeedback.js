export default {

		async request_feedbackPrivate_Slack () {
		const a = request_feedback_users.selectedOptionValues
	   
for (let i = 0; i < a.length; i++) 
{
  //const b = await Query1.run()
	  const email =  request_feedback_users.selectedOptionValues[i]
		let message = "You have a feedback request from "
		const selectedname = appsmith.user.username
		let detailmessage = request_feedback_content.text.replace(/<\/?[^>]+(>|$)/g, "")
	//console.log(email)
	Request_feedback_SlackAPI.run({ email: email ,message :message ,selectedname : selectedname, detailmessage : detailmessage})

		
						
																
	}
},
	 
			

async request_feedbackManagerOnly_slack()
		{
		const a = request_feedback_users.selectedOptionValues
for (let i = 0; i < a.length; i++) 
{
  //const b = await Query1.run()
	const emailmanager =	await ManagerEmail.run()
						 //  const email = emailmanager[i].email.toString()
	const email2 = 'kamakshi@appsmith.com'
	let message = "You have received this feedback request as manager of "
		const selectedname = request_feedback_users.selectedOptionValues[i]
		let detailmessage1 = request_feedback_content.text.replace(/<\/?[^>]+(>|$)/g, "")
	Request_feedback_SlackAPI.run({ email: email2 ,message :message ,selectedname : selectedname , detailmessage : detailmessage1})
						//	 console.log (email)
							// return Request_feedback_SlackAPI.run({email: email})
	
	 //const email1 =  request_feedback_users.selectedOptionValues[i]
		//console.log(email)
	//Request_feedback_SlackAPI.run({email :email1})
}
							},
	async request_feedbackPrivateMgr_Slack () {
		const a = request_feedback_users.selectedOptionValues
for (let i = 0; i < a.length; i++) 
{
  //const b = await Query1.run()
	//const emailmanager =	await ManagerEmail.run()
						 //  const email = emailmanager[i].email.toString()
					
						 //  const email = emailmanager[i].email.toString()
	const email2 = 'kamakshi@appsmith.com'
	let message2 = "You have received this feedback request as manager of "
		const selectedname = request_feedback_users.selectedOptionValues[i]
		let detailmessage1 = request_feedback_content.text.replace(/<\/?[^>]+(>|$)/g, "")
							 	Request_feedback_SlackAPI.run({ email: email2 ,message :message2 ,selectedname : selectedname , detailmessage : detailmessage1})
						//	 console.log (email)
							// return Request_feedback_SlackAPI.run({email: email})
	
	  const email1 =  request_feedback_users.selectedOptionValues[i]
		//console.log(email)
	let message1 = "You have a feedback request from "
	const selectedname1 = appsmith.user.username
	let detailmessage2 = request_feedback_content.text.replace(/<\/?[^>]+(>|$)/g, "")
	Request_feedback_SlackAPI.run({ email: email1 ,message :message1 ,selectedname : selectedname1 , detailmessage: detailmessage2})
}
		
	},
			
						 
			}
	
