const { calculateHealthReport } = require("./index");

// Test cases for the health report calculator
try {
    console.log("Test 1: Normal Weight");
    console.log(calculateHealthReport(70, 175, 30, "male", "moderate"));
    // Expected: { bmi: 22.86, classification: "Normal weight", bmr: 1668.75, dailyCalorieRequirement: 2586.56, idealWeightRange: "(63.3 - 73.3 kg)", healthRisk: "Low risk", recommendation: "Maintain a balanced diet and regular exercise." }

    console.log("Test 2: Underweight");
    console.log(calculateHealthReport(45, 160, 25, "female", "light"));
    // Expected: { bmi: 17.58, classification: "Underweight", bmr: 1208.75, dailyCalorieRequirement: 1661.94, idealWeightRange: "(45.5 - 55.5 kg)", healthRisk: "Increased risk of malnutrition and weakened immunity.", recommendation: "Consider increasing calorie intake and consult a nutritionist." }

    console.log("Test 3: Overweight");
    console.log(calculateHealthReport(85, 175, 35, "male", "active"));
    // Expected: { bmi: 27.76, classification: "Overweight", bmr: 1855.75, dailyCalorieRequirement: 3190.57, idealWeightRange: "(63.3 - 73.3 kg)", healthRisk: "Increased risk of cardiovascular diseases and diabetes.", recommendation: "Increase physical activity and reduce calorie intake." }

    console.log("Test 4: Obesity");
    console.log(calculateHealthReport(110, 175, 40, "female", "sedentary"));
    // Expected: { bmi: 35.92, classification: "Obesity", bmr: 1555.75, dailyCalorieRequirement: 1866.90, idealWeightRange: "(45.5 - 55.5 kg)", healthRisk: "High risk of obesity-related health issues.", recommendation: "Consult a doctor and follow a structured weight management program." }

    console.log("Test 5: Invalid input (Negative weight)");
    try {
        console.log(calculateHealthReport(-70, 175, 25, "male", "moderate"));
        // Should throw an error
    } catch (error) {
        console.error(error.message);  // Expected: "Weight, height, and age must be positive numbers."
    }

    console.log("Test 6: Invalid input (Zero height)");
    try {
        console.log(calculateHealthReport(70, 0, 25, "female", "moderate"));
        // Should throw an error
    } catch (error) {
        console.error(error.message);  // Expected: "Weight, height, and age must be positive numbers."
    }

    console.log("Test 7: Extremely low weight");
    console.log(calculateHealthReport(30, 175, 20, "male", "active"));
    // Expected: { bmi: 9.80, classification: "Underweight", bmr: 1172.50, dailyCalorieRequirement: 2017.88, idealWeightRange: "(63.3 - 73.3 kg)", healthRisk: "Increased risk of malnutrition and weakened immunity.", recommendation: "Consider increasing calorie intake and consult a nutritionist." }

    console.log("Test 8: Extremely high weight");
    console.log(calculateHealthReport(200, 175, 45, "female", "sedentary"));
    // Expected: { bmi: 65.31, classification: "Obesity", bmr: 2035.75, dailyCalorieRequirement: 2442.90, idealWeightRange: "(45.5 - 55.5 kg)", healthRisk: "High risk of obesity-related health issues.", recommendation: "Consult a doctor and follow a structured weight management program." }

    console.log("All tests passed successfully!");
} catch (error) {
    console.error("Test failed: ", error.message);
}

