const grossIncomeInput = document.getElementById("grossIncome");
const extraIncomeInput = document.getElementById("extraIncome");
const ageGroupSelect = document.getElementById("ageGroup");
const deductionsInput = document.getElementById("deductions");
const submitButton = document.getElementById("submit");
const modal = document.getElementById("modal");
const modalContent = document.getElementsByClassName("modal-content")[0];
const modalResult = document.getElementById("result");
const span = document.getElementsByClassName("close")[0];

const errorIcons = document.querySelectorAll(".error-icon");

function showErrorIcon(input) {
    const errorIcon = input.nextElementSibling;
    errorIcon.style.display = "inline-block";
}

function hideErrorIcon(input) {
    const errorIcon = input.nextElementSibling;
    errorIcon.style.display = "none";
}

function validateInput(input) {
    const value = input.value.trim();
    if (value === "" || isNaN(value)) {
        showErrorIcon(input);
        return false;
    } else {
        hideErrorIcon(input);
        return true;
    }
}

function validateAgeGroup() {
    const ageGroup = ageGroupSelect.value;
    if (ageGroup === "") {
        showErrorIcon(ageGroupSelect);
        return false;
    } else {
        hideErrorIcon(ageGroupSelect);
        return true;
    }
}

function calculateTax() {
    const grossIncome = parseFloat(grossIncomeInput.value);
    const extraIncome = parseFloat(extraIncomeInput.value);
    const deductions = parseFloat(deductionsInput.value);
    const ageGroup = ageGroupSelect.value;

    const overallIncome = grossIncome + extraIncome - deductions;

    if (overallIncome <= 800000) {
        modalResult.textContent = "No tax is applicable.";
    } else {
        const taxableIncome = overallIncome - 800000;
        let taxRate;

        switch (ageGroup) {
            case "<40":
                taxRate = 0.3;
                break;
            case ">=40&<60":
                taxRate = 0.4;
                break;
            case ">=60":
                taxRate = 0.1;
                break;
            default:
                taxRate = 0;
        }

        const tax = taxableIncome * taxRate;
        modalResult.textContent = ` ₹${tax.toFixed(2)} After tax Deduction`;
    }

    modal.style.display = "block";
}

submitButton.addEventListener("click", () => {
    const isGrossIncomeValid = validateInput(grossIncomeInput);
    const isExtraIncomeValid = validateInput(extraIncomeInput);
    const isDeductionsValid = validateInput(deductionsInput);
    const isAgeGroupValid = validateAgeGroup();

    if (isGrossIncomeValid && isExtraIncomeValid && isDeductionsValid && isAgeGroupValid) {
        calculateTax();
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}