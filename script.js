// Select all input fields
const inputs = document.querySelectorAll('.code');

// Focus on the first input field on page load
inputs[0].focus();

// Function to handle input events
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.match(/[0-9]/)) {
            // Move to next input field if a valid number is entered
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        } else {
            e.target.value = ''; // Clear invalid input
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            input.value = ''; // Clear current input

            if (index > 0) {
                inputs[index - 1].focus(); // Move back to previous input field
            }
        }
    });
});
