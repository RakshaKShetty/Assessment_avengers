export default {
	myVar1: [],
	myVar2: {},
	myFun1 () { 
		// Get the radio group element
		var radioGroup = document.getElementById(request_feedback_type);

		{
			var selectedValue = request_feedback_type.selectedOptionValue;
			// Perform task based on the selected value
			switch (selectedValue) {
				case request_feedback_type.options[0].value:
					// Task for option 1
					Give_feedback_manageronly.run()

					break;
				case request_feedback_type.options[1].value:
					// Task for option 2
					Give_feedback_manageronly.run()

					break;
				case request_feedback_type.options[2].value:
					// Task for option 3
					Give_feedback_manageronly.run()

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