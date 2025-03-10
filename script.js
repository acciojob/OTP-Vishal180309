// Get all input fields
const inputs = document.querySelectorAll('.code');

// Add event listener to each input field
inputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        // Move to next input field if user presses a key
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }

        // Check if all input fields have a value
        if (Array.from(inputs).every((input) => input.value.length === 1)) {
            // Verify the OTP (replace with your own verification logic)
            verifyOTP();
        }
    });
});

// Verify the OTP
function verifyOTP() {
    const otp = Array.from(inputs).map((input) => input.value).join('');
    console.log(`OTP: ${otp}`);

    // Replace with your own verification logic
    if (otp === '123456') {
        console.log('OTP is correct!');
    } else {
        console.log('OTP is incorrect!');
    }
}