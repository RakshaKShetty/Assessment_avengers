export default {
	myVar1: [],
	myVar2: {},
	myFun1 () { 
		
		// Perform an action for each value in the variable using a for loop
		for (let i = 0; i < variableValues.length; i++) {
			let value = variableValues[i];
			//	console.log("Value:", value);

			if (value == variableValues[0]) {
				console.log("Value:",variableValues[0]); 
				Give_feedback_manageronly.run();
			} else if (value == variableValues[1]) {
				console.log("Value:",variableValues[1]); 
				Give_feedback_mgr_private.run();
			} else if (value == variableValues[2]) {
				console.log("Value:",variableValues[2]); 
				Give_feedback_private.run();
			}
			else {
				console.log("All done!"); // This message will be printed if the temperature is less than 20
			}
		}

		// Perform your action here, for example, logging the value
		// You can replace console.log with any action you want to perform
	} 
	,
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}