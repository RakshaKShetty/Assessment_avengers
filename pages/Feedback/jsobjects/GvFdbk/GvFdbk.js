export default {
	myVar1: [],
	myVar2: {},
	myFun1 () { 
		// Get the radio group element
		var radioGroup = document.getElementById(feedback_type);

		{
			var selectedValue = feedback_type.selectedOptionValue;
			// Perform task based on the selected value
			switch (selectedValue) {
				
				case feedback_type.options[0].value:
					// Task for option 1
					Give_feedback_manageronly.run()

					break;
				case feedback_type.options[1].value:
					// Task for option 2
					Request_feedback_mgr_private.run()

					break;
				case feedback_type.options[2].value:
					// Task for option 3
					Request_feedback_manageronly.run()

					break;
			
				case feedback_type.options[3].value:
					// Task for option 3
					Request_feedback_private.run()

					break;
					// Add more cases for additional options as needed
				default:
					// Default case if no matching option is found
					console.log('No task defined for this option');
					break;
			}
			//	write code here
			//	this.myVar1 = [1,2,3]
		}
	}

	,
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}