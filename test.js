const { calculateBMI } = require("./index");

// Test cases for the BMI calculator
try {
    console.log("Test 1: Normal Weight");
    console.log(calculateBMI(70, 1.75)); // { bmi: 22.86, classification: "Normal weight" }

    console.log("Test 2: Underweight");
    console.log(calculateBMI(45, 1.60)); // { bmi: 17.58, classification: "Underweight" }

    console.log("Test 3: Overweight");
    console.log(calculateBMI(85, 1.75)); // { bmi: 27.76, classification: "Overweight" }

    console.log("Test 4: Obesity");
    console.log(calculateBMI(110, 1.75)); // { bmi: 35.92, classification: "Obesity" }

    console.log("Test 5: Invalid input");
    try {
        console.log(calculateBMI(-70, 1.75)); // Should throw an error
    } catch (error) {
        console.error(error.message);
    }

    console.log("All tests passed successfully!");
} catch (error) {
    console.error("Test failed: ", error.message);
}
