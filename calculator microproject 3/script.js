document.addEventListener('DOMContentLoaded', function () {
	// Get necessary elements
	const output = document.getElementById('output');
	const buttons = document.querySelectorAll('.btn');
	const delButton = document.querySelector('.del');
	const resetButton = document.querySelector('.reset');
	const equalButton = document.querySelector('.equal');

	// Add event listeners to buttons
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			output.value += button.value;
		});
	});

	delButton.addEventListener('click', () => {
		output.value = output.value.slice(0, -1);
	});

	resetButton.addEventListener('click', () => {
		output.value = '';
	});

	equalButton.addEventListener('click', () => {
		try {
			output.value = eval(output.value);
		} catch (error) {
			output.value = 'Error';
		}
	});
});
