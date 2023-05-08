// Get references to HTML elements
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.querySelector('.result');

// Calculate BMI when the button is clicked
calculateBtn.addEventListener('click', function() {
    // Get the weight and height values
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // convert to meters

    // Calculate the BMI
    const bmi = weight / (height * height);

    // Display the result
    resultDiv.textContent = `Your BMI is ${bmi.toFixed(1)}`;
});