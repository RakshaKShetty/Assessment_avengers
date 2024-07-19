export default {

		async give_feedbackPrivateMgr_slack ()
		{
		const emailmanager =	await ManagerEmail.run()
					//	   const email = emailmanager[0].email.toString()
						//	 console.log (email)
		const email2 = 'kamakshi@appsmith.com'
		let message = "You have received feedback as manager of "
		const selectedname = feedback_users.selectedOptionValues[0]
		let detailmessage = feedback_content.text.replace(/<\/?[^>]+(>|$)/g, "")
							 Give_feedback_SlackAPI.run({ email: email2 ,message :message ,selectedname : selectedname, detailmessage :detailmessage})
			
		//	console.log(email2)
	const email1 = feedback_users.selectedOptionValues[0]
	let message1 = "You have received feedback from "
	const selectedname1 = appsmith.user.username
	let detailmessage1 = feedback_content.text.replace(/<\/?[^>]+(>|$)/g, "")
	Give_feedback_SlackAPI.run({ email: email1 ,message :message1 ,selectedname : selectedname1,detailmessage : detailmessage1})
		 // console.log(email1)
		
														 },
														 
			
		async give_feedbackPrivateOnly_slack () {
		const a = feedback_users.selectedOptionValues
	   
for (let i = 0; i < a.length; i++) 
{
  //const b = await Query1.run()
	  const email1 =  feedback_users.selectedOptionValues[i]
		let message1 = "You have received feedback from"
		const selectedname1 = appsmith.user.username
		let detailmessage = feedback_content.text.replace(/<\/?[^>]+(>|$)/g, "")
		//console.log(email)
	Give_feedback_SlackAPI.run({ email: email1 ,message :message1 ,selectedname : selectedname1,detailmessage : detailmessage})
		

}
		
	},
	 
async give_feedbackManagerOnly_Slack()
		{
	
							{
	//	const emailmanager =	await ManagerEmail.run()
					//	   const email = emailmanager[0].email.toString()
						//	 console.log (email)
		const email2 = 'kamakshi@appsmith.com'
		let message = "You have received feedback as manager of "
		const selectedname = feedback_users.selectedOptionValues[0]
		let detailmessage = feedback_content.text.replace(/<\/?[^>]+(>|$)/g, "")
		 Give_feedback_SlackAPI.run({ email: email2 ,message :message ,selectedname : selectedname , detailmessage: detailmessage})
			
							
							}
		}
							
			
						 
			}
	
