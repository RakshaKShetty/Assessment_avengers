export default {

		async give_feedbackPrivateMgr_slack ()
		{
		const emailmanager =	await ManagerEmail.run()
						   const email = emailmanager[0].email.toString()
						//	 console.log (email)
							// return await Give_feedback_SlackAPI.run({email: email})
			
		const email1 = feedback_users.selectedOptionLabels[0]
		return Give_feedback_SlackAPI.run({email1: email1})
		  
		},
			
	async give_feedbackPrivateOnly_slack () {
		const a = feedback_users.selectedOptionValues
	   
for (let i = 0; i < a.length; i++) 
{
  //const b = await Query1.run()
	  const email =  feedback_users.selectedOptionValues[i]
		//console.log(email)
	Give_feedback_SlackAPI.run({email :email})
}
		
	},
	 
async give_feedbackManagerOnly_Slack()
		{
	
							const emailmanager =	await ManagerEmail.run()
						   const email = emailmanager[0].email.toString()
						//	 console.log (email)
						//	 return 	Give_feedback_SlackAPI.run({email :email})
			
							
							
							}
			
						 
			}
	
