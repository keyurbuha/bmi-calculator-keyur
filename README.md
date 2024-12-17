## @keyurbuha/bmi-calc
A comprehensive Node.js package for calculating Body Mass Index (BMI) and generating detailed health insights.
## 🌟 Features

**Precise BMI Calculation:** Calculate Body Mass Index accurately

**Comprehensive Health Classification:** Categorize BMI results (Underweight, Normal weight, Overweight, Obesity)

**Metabolic Insights:** Calculate Basal Metabolic Rate (BMR)
Determine personalized daily calorie requirements

**Weight Management Support:** Suggest ideal weight ranges
Provide personalized health risk assessments

**Lifestyle Recommendations:** Generate tailored health and fitness suggestions

## 📦 Installation
Install the package using your preferred package manager:
### npm
`npm install @keyurbuha/bmi-calc`
### Yarn
`yarn add @keyurbuha/bmi-calc`
### pnpm
`pnpm add @keyurbuha/bmi-calc`

## 🚀 Usage
### Basic Example

```javascript
const { calculateHealthReport } = require('@keyurbuha/bmi-calc');

// Calculate health report
const report = calculateHealthReport(70, 175, 30, 'male', 'moderate');
console.log(report);
```

### Input Parameters
The following are the parameters required for the BMI calculation:

- **`weight`**:  
  - **Type**: number  
  - **Description**: Weight in kilograms  
  - **Valid Values**: Positive number

- **`heightCm`**:  
  - **Type**: number  
  - **Description**: Height in centimeters  
  - **Valid Values**: Positive number

- **`age`**:  
  - **Type**: number  
  - **Description**: User's age  
  - **Valid Values**: Positive number

- **`gender`**:  
  - **Type**: string  
  - **Description**: User's gender  
  - **Valid Values**: `"male"`, `"female"`

- **`activityLevel`**:  
  - **Type**: string  
  - **Description**: Physical activity level  
  - **Valid Values**: `"sedentary"`, `"light"`, `"moderate"`, `"active"`


### Example Output
```json{
  "bmi": 22.86,
  "classification": "Normal weight",
  "bmr": 1668.75,
  "dailyCalorieRequirement": 2586.56,
  "idealWeightRange": "(63.3 - 73.3 kg)",
  "healthRisk": "Low risk",
  "recommendation": "Maintain a balanced diet and regular exercise."
}
```
## 📋 API Reference

### `calculateHealthReport(weight, heightCm, age, gender, activityLevel)`

This function returns a comprehensive health report with the following details:

- **bmi**: Calculated Body Mass Index
- **classification**: BMI category (e.g., Underweight, Normal weight, Overweight, Obesity)
- **bmr**: Basal Metabolic Rate (the number of calories the body needs at rest)
- **dailyCalorieRequirement**: Recommended daily calorie intake based on activity level
- **idealWeightRange**: Suggested weight range for the given height
- **healthRisk**: Potential health risks based on BMI and other factors
- **recommendation**: Personalized lifestyle suggestions for improving health

## 🧪 Testing
To run tests, follow these steps:

```bash
# Clone the repository
git clone https://github.com/keyurbuha/bmi-calculator-keyur.git

# Navigate to the project directory
cd bmi-calculator-keyur

# Install dependencies
npm install

# Run tests
npm test
```
## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🏷️ Keywords

- bmi
- health
- fitness
- calculator
- weight-management

## 👤 Author

**Keyur Buha**

## 🔗 Links

- **Repository**: [GitHub Repository](https://github.com/keyurbuha/bmi-calculator-keyur)
- **Issues**: [Report Issues](https://github.com/keyurbuha/bmi-calculator-keyur/issues)