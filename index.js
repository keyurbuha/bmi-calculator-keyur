/**
 * Calculates BMI (Body Mass Index) based on weight and height.
 * @param {number} weight - Weight in kilograms.
 * @param {number} height - Height in meters.
 * @returns {object} - An object with the BMI value and classification.
 */
function calculateBMI(weight, height) {
    if (!weight || !height || weight <= 0 || height <= 0) {
        throw new Error("Weight and height must be positive numbers.");
    }

    const bmi = weight / (height * height);
    let classification = "";

    if (bmi < 18.5) {
        classification = "Underweight";
    } else if (bmi < 24.9) {
        classification = "Normal weight";
    } else if (bmi < 29.9) {
        classification = "Overweight";
    } else {
        classification = "Obesity";
    }

    return {
        bmi: parseFloat(bmi.toFixed(2)), // Rounds to 2 decimal places
        classification
    };
}

module.exports = { calculateBMI };
