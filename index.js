/**
 * Calculates BMI (Body Mass Index) and generates a full health report.
 * @param {number} weight - Weight in kilograms.
 * @param {number} heightCm - Height in centimeters.
 * @param {number} age - Age in years.
 * @param {"male" | "female"} gender - Gender of the user.
 * @param {"sedentary" | "light" | "moderate" | "active" | "very active"} activityLevel - User's activity level.
 * @returns {object} - Full health report including BMI, BMR, calorie needs, and recommendations.
 */
function calculateHealthReport(weight, heightCm, age, gender, activityLevel) {
    if (!weight || !heightCm || !age || !gender || !activityLevel) {
        throw new Error("All inputs (weight, height, age, gender, activityLevel) are required.");
    }
    if (weight <= 0 || heightCm <= 0 || age <= 0) {
        throw new Error("Weight, height, and age must be positive numbers.");
    }

    // Convert height from cm to meters
    const height = heightCm / 100;

    // Calculate BMI
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

    // Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
    let bmr = 0;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * heightCm - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * heightCm - 5 * age - 161;
    }

    // Daily Calorie Requirement based on activity level
    const activityFactors = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        "very active": 1.9
    };
    const dailyCalories = bmr * activityFactors[activityLevel];

    // Calculate Ideal Body Weight (Devine Formula)
    let idealWeightRange = "";
    if (gender === "male") {
        idealWeightRange = `(${50 + 0.9 * (heightCm - 152)} - ${60 + 0.9 * (heightCm - 152)} kg)`;
    } else {
        idealWeightRange = `(${45.5 + 0.9 * (heightCm - 152)} - ${55.5 + 0.9 * (heightCm - 152)} kg)`;
    }

    // Health Risks and Recommendations
    let healthRisk = "";
    let recommendation = "";
    if (bmi < 18.5) {
        healthRisk = "Increased risk of malnutrition and weakened immunity.";
        recommendation = "Consider increasing calorie intake and consult a nutritionist.";
    } else if (bmi < 24.9) {
        healthRisk = "Low risk. Maintain current lifestyle.";
        recommendation = "Maintain a balanced diet and regular exercise.";
    } else if (bmi < 29.9) {
        healthRisk = "Increased risk of cardiovascular diseases and diabetes.";
        recommendation = "Increase physical activity and reduce calorie intake.";
    } else {
        healthRisk = "High risk of obesity-related health issues.";
        recommendation = "Consult a doctor and follow a structured weight management program.";
    }

    // Return full health report
    return {
        bmi: parseFloat(bmi.toFixed(2)),
        classification,
        bmr: parseFloat(bmr.toFixed(2)),
        dailyCalorieRequirement: parseFloat(dailyCalories.toFixed(2)),
        idealWeightRange,
        healthRisk,
        recommendation
    };
}

module.exports = { calculateHealthReport };
