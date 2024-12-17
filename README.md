bmi-calculator-keyur
A Node.js package to calculate BMI (Body Mass Index) and generate a comprehensive health report. This package provides detailed health insights based on user inputs such as weight, height, age, gender, and activity level. It also includes suggestions on ideal weight ranges and daily calorie needs.

Features
BMI Calculation: Calculate BMI based on weight and height.
Health Classification: Classifies the BMI result into categories: Underweight, Normal weight, Overweight, and Obesity.
BMR (Basal Metabolic Rate): Calculates the user's daily calorie requirement based on age, gender, and activity level.
Ideal Weight Range: Suggests the ideal weight range based on height.
Health Risk & Recommendations: Provides health risks and lifestyle recommendations based on BMI and activity level.
Installation
To install the package, use npm:

bash
Copy code
npm install bmi-calculator-keyur
Usage
1. BMI Calculation
The calculateHealthReport function returns the BMI, health classification, BMR, ideal weight range, daily calorie requirement, health risk, and lifestyle recommendations.

Example:
javascript
Copy code
const { calculateHealthReport } = require('bmi-calculator-keyur');

// Example usage:
const report = calculateHealthReport(70, 175, 30, 'male', 'moderate');
console.log(report);
Input Parameters:
weight: Weight in kilograms.
heightCm: Height in centimeters.
age: Age of the user.
gender: Gender of the user, either "male" or "female".
activityLevel: Activity level of the user, one of:
"sedentary" (little or no exercise)
"light" (light exercise/sports 1-3 days/week)
"moderate" (moderate exercise/sports 3-5 days/week)
"active" (hard exercise/sports 6-7 days a week)
Output:
The function returns an object with the following properties:

bmi: The calculated BMI value.
classification: The BMI classification (e.g., "Normal weight").
bmr: The Basal Metabolic Rate (BMR) value.
dailyCalorieRequirement: The user's recommended daily calorie intake.
idealWeightRange: The ideal weight range based on height.
healthRisk: The potential health risks associated with the BMI.
recommendation: Health and lifestyle recommendations.
2. Example Output:
javascript
Copy code
{
  bmi: 22.86,
  classification: "Normal weight",
  bmr: 1668.75,
  dailyCalorieRequirement: 2586.56,
  idealWeightRange: "(63.3 - 73.3 kg)",
  healthRisk: "Low risk",
  recommendation: "Maintain a balanced diet and regular exercise."
}
API Functions
calculateHealthReport(weight, heightCm, age, gender, activityLevel)
weight: (number) User's weight in kilograms.
heightCm: (number) User's height in centimeters.
age: (number) User's age.
gender: (string) User's gender, either "male" or "female".
activityLevel: (string) Activity level, one of "sedentary", "light", "moderate", or "active".
Returns:
An object containing BMI, health classification, BMR, ideal weight range, daily calorie requirement, health risk, and recommendations.
Tests
To run tests, use the following steps:

Clone the repository:

bash
Copy code
git clone https://github.com/keyurbuha/bmi-calculator-keyur.git
Install dependencies:

bash
Copy code
npm install
Run the test script:

bash
Copy code
node test.js
The test script will run several test cases to validate the health report calculations.

Contribution
Feel free to fork this repository and submit pull requests. Contributions are always welcome!

Fork the repository.
Clone your fork locally.
Create a new branch for your changes.
Make your changes and commit them with clear messages.
Push your changes and submit a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.