// Get all input fields
const inputs = document.querySelectorAll('.code');

// Add event listener to each input field
inputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        // Move to next input field if user presses a key
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        // Handle backspace key press
        if (e.key === 'Backspace') {
            e.preventDefault();
            if (index > 0) {
                inputs[index - 1].focus();
                inputs[index - 1].value = '';
            }
        }
    });
});