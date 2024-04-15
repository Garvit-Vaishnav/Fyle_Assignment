# Fyle_Assignment

# Tax Calculation

This project is a web application that calculates the tax amount based on the user's income, age group, and deductions. It is built using HTML, CSS, JavaScript, Bootstrap, and jQuery.

## Features

- User can input their gross annual income, extra income, age group, and applicable deductions.
- Validation is implemented to ensure that only valid numeric values are entered for income and deductions.
- The age group is selected from a dropdown menu with three options: "<40", "≥40 & <60", and "≥60".
- Error icons and tooltips are displayed when invalid input is entered or a mandatory field is left blank.
- Upon submission, a modal is displayed showing the calculated tax amount based on the provided inputs and the specified tax calculation rules.

## Tax Calculation Rules

- If the overall income (after deductions) is less than or equal to 8 lakhs (≤800,000), no tax is applicable.
- If the overall income is greater than 8 lakhs (>800,000), the amount over 8 lakhs is taxed as follows:
- For people aged less than 40 (<40), the tax rate is 30%.
- For people aged 40 or above but less than 60 (≥40 & <60), the tax rate is 40%.
- For people aged 60 or above (≥60), the tax rate is 10%.

## Assumptions

- The application assumes that the user will enter valid numeric values for income and deductions fields.
- The age group dropdown option is treated as mandatory, and an error will be shown if it is not selected before submission.
- The design is for representation purposes only, and minor modifications have been made to improve usability and accessibility.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter your gross annual income, extra income (if any), and total applicable deductions in the respective input fields.
3. Select your age group from the dropdown menu.
4. Click the "Submit" button.
5. If all inputs are valid, a modal will be displayed showing the calculated tax amount based on the provided inputs and the tax calculation rules.
6. 
If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## ScreenShots
1. Page load this Interface
   ![Screenshot 2024-04-15 152407](https://github.com/Garvit-Vaishnav/Fyle_Assignment/assets/73755830/67d5d7b8-9e62-4ccc-974e-194a8c072753)

2. Showing validation error if input field are not mentioned.
   ![Screenshot 2024-04-15 152521](https://github.com/Garvit-Vaishnav/Fyle_Assignment/assets/73755830/efda371c-2705-4d06-acc9-2245074efc71)

3. Value entered and Submit
   ![image3](https://github.com/Garvit-Vaishnav/Fyle_Assignment/assets/73755830/d23d37c2-2bdb-44ee-a51b-794489dead38)

4. Output
   ![image4](https://github.com/Garvit-Vaishnav/Fyle_Assignment/assets/73755830/a8955c03-4fe2-40e9-a7ea-5a0253901599)




