export default {

		/*async givefeebackprivatemsgr ()
		{
		const emailmanager =	await ManagerEmail.run()
						   const email = emailmanager[0].email.toString()
						//	 console.log (email)
							 return Request_feedback_API.run({email: email})
			
		const email1 = request_feedback_users.selectedOptionLabels[0]
		return Request_feedback_API.run({email1: email1})
		  
		},*/
			
	async request_feedbackPrivate_Slack () {
		const a = request_feedback_users.selectedOptionValues
	   
for (let i = 0; i < a.length; i++) 
{
  //const b = await Query1.run()
	  const email =  request_feedback_users.selectedOptionValues[i]
		console.log(email)
await	Request_feedback_SlackAPI.run({email :email})
}
		
	},
	 
async request_feedbackManagerOnly_slack()
		{
		const a = request_feedback_users.selectedOptionLabels
for (let i = 0; i < a.length; i++) 
{
  //const b = await Query1.run()
	const emailmanager =	await ManagerEmail.run()
						   const email = emailmanager[i].email.toString()
						//	 console.log (email)
							 return Request_feedback_SlackAPI.run({email: email})
	
	 // const email1 =  request_feedback_users.selectedOptionValues[i]
		//console.log(email)
	//Request_feedback_API.run({email :email1})
}
							},
	async request_feedbackPrivateMgr_Slack () {
		const a = request_feedback_users.selectedOptionLabels
for (let i = 0; i < a.length; i++) 
{
  //const b = await Query1.run()
	const emailmanager =	await ManagerEmail.run()
						   const email = emailmanager[i].email.toString()
						//	 console.log (email)
							 return Request_feedback_SlackAPI.run({email: email})
	
	  const email1 =  request_feedback_users.selectedOptionValues[i]
		//console.log(email)
	Request_feedback_SlackAPI.run({email :email1})
}
		
	},
			
						 
			}
	
