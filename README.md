@keyurbuha/bmi-calc
A comprehensive Node.js package for calculating Body Mass Index (BMI) and generating detailed health insights.
🌟 Features

Precise BMI Calculation: Calculate Body Mass Index accurately
Comprehensive Health Classification:

Categorize BMI results (Underweight, Normal weight, Overweight, Obesity)


Metabolic Insights:

Calculate Basal Metabolic Rate (BMR)
Determine personalized daily calorie requirements


Weight Management Support:

Suggest ideal weight ranges
Provide personalized health risk assessments


Lifestyle Recommendations: Generate tailored health and fitness suggestions

📦 Installation
Install the package using your preferred package manager:
npm
bashCopynpm install @keyurbuha/bmi-calc
Yarn
bashCopyyarn add @keyurbuha/bmi-calc
pnpm
bashCopypnpm add @keyurbuha/bmi-calc
🚀 Usage
Basic Example
javascriptCopyconst { calculateHealthReport } = require('@keyurbuha/bmi-calc');

// Calculate health report
const report = calculateHealthReport(70, 175, 30, 'male', 'moderate');
console.log(report);
Input Parameters
ParameterTypeDescriptionValid ValuesweightnumberWeight in kilogramsPositive numberheightCmnumberHeight in centimetersPositive numberagenumberUser's agePositive numbergenderstringUser's gender"male" or "female"activityLevelstringPhysical activity level"sedentary", "light", "moderate", or "active"
Example Output
jsonCopy{
  "bmi": 22.86,
  "classification": "Normal weight",
  "bmr": 1668.75,
  "dailyCalorieRequirement": 2586.56,
  "idealWeightRange": "(63.3 - 73.3 kg)",
  "healthRisk": "Low risk",
  "recommendation": "Maintain a balanced diet and regular exercise."
}
📋 API Reference
calculateHealthReport(weight, heightCm, age, gender, activityLevel)
Returns a comprehensive health report with:

bmi: Calculated Body Mass Index
classification: BMI category
bmr: Basal Metabolic Rate
dailyCalorieRequirement: Recommended daily calorie intake
idealWeightRange: Suggested weight range
healthRisk: Potential health risks
recommendation: Personalized lifestyle suggestions

🧪 Testing
To run tests:
bashCopy# Clone the repository
git clone https://github.com/keyurbuha/bmi-calculator-keyur.git

# Navigate to project directory
cd bmi-calculator-keyur

# Install dependencies
npm install

# Run tests
npm test
🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -am 'Add some feature')
Push to the branch (git push origin feature/your-feature)
Create a new Pull Request

📄 License
This project is licensed under the MIT License.
🏷️ Keywords

bmi
health
fitness
calculator
weight-management

👤 Author
Keyur Buha
🔗 Links

Repository: GitHub Repository
Issues: Report Issues