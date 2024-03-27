// here i got the first form dialog, and stored it in a variable
const startDialog = document.querySelector("#startDialog");
//here i got the start management button and stored it in a variable, so i can add an event listener to it, and have the first dialog appear
let startBtn = document.querySelector("#startBtn");
//added the cancel button in the dialog and stored it inna variable
let cancelInfo = document.querySelector("#cancelInfoSubmit");
//added the add button in the dialog and stored it in a variable
let addIncomeSource = document.querySelector("#addIncomeSource");
// Here in a variable, i stored the second dialog that appears after clicking the add button in the first dialog
let addNewIncomeSourceDialog = document.querySelector("#addNewIncomeSourceDialog");
// i stored the submit button in a variable, in order to add an event listener to it 
let infoSubmit = document.querySelector("#infoSubmit");




//Fuction that shows the Start dialog on click of the startBtn management button
function showStartDialog() {
    startDialog.showModal();
}

//Function that closes the startBtn dialogue on click of the cancel button in the dialogue
function closeStartDialog() {
    startDialog.close();
}

//Function that shows a new dialogue to enter new source of income
function shownewIncomeSourceDialog() {
    addNewIncomeSourceDialog.showModal();
}


//Here i stored the input field in the second Dialog that asks you to input the name of your other source of income, so i can store, the value, and transform it to a label in the first dialog that takes your details
let newIncomeName = document.querySelector("#newIncomeLabel");

// Here i stored the input field in the second dialog, that asks you to enter the amount you got from the other source of income, so i can append the first dialog that takes your details
let newIncomeAmount = document.querySelector("#newIncomeAmount");

//i took the add button in the second dialog in a variable, this button is responsible for appending the income source name, and the amount gotten from that income source
let addOtherIncomeSource = document.querySelector("#addOtherIncomeSource");

addOtherIncomeSource.disabled = true;

function checknewIncomeInputs() {
    if (newIncomeName.value.trim().length > 0 && newIncomeAmount.value.trim().length > 0) {
        addOtherIncomeSource.disabled = false;
    }
    else {
        addOtherIncomeSource.disabled = true;
    }
}

newIncomeName.addEventListener("input", checknewIncomeInputs);
newIncomeAmount.addEventListener("input", checknewIncomeInputs);
// this is the form inside of the first dialog, i took it seperatly, so i can append the new values inside the form, else it will be appended under the submit and cancel buttons
let startDialogForm = document.querySelector('#startDialogForm');


//function that appends a new source of income to the first dialog
function addIncomeToList() {
    let newIncomeLabel = document.createElement("label");
    newIncomeLabel.innerText = newIncomeName.value;
    // newIncomeLabel.setAttribute("class", "startDialogLabel");
    newIncomeLabel.style.color = '#76ABAE';
    newIncomeLabel.style.fontWeight = 'bolder';
    let newIncomeAmountNumber = document.createElement("input");
    newIncomeAmountNumber.setAttribute("class", "incomeValueField");
    newIncomeAmountNumber.type = "number";
    newIncomeAmountNumber.value = newIncomeAmount.value;
    let breakTag1 = document.createElement('br');
    let breakTag2 = document.createElement('br');
    startDialogForm.appendChild(newIncomeLabel);
    startDialogForm.appendChild(breakTag1);
    startDialogForm.appendChild(newIncomeAmountNumber);
    startDialogForm.appendChild(breakTag2);
}

// Here i made a function that collects all the numeric values filled in the First form, to determine the total income fund
let totalFunds = 0;

function accumulateValues() {
    totalFunds = 0;
    let gatherValues = document.querySelectorAll('.incomeValueField');
    for (let i = 0; i < gatherValues.length; i++) {
        totalFunds += +(gatherValues[i].value);
    }
    return totalFunds;
}




//Welcome message here, is an existing space i made in the html document. i got this in irder to display the template `welcome${userName}`
let welcomeMessage = document.querySelector('#welcomeMessage');
// The input field where users fill their First Name
let firstName = document.querySelector('#fname')
// The input field where users fill their Last Name
let lastName = document.querySelector('#lname');
// This is an existing tag i made in the html document, that is meant to return an error message, if the user ommits their FirstName
let firstNameWarning = document.querySelector('.fname-warn');
// This is an existing tag i made in the html document, that is meant to return an error message, if the user ommits their LastName
let lastNameWarning = document.querySelector('.lname-warn');
// Here i got the header field in the dashboard
let introHeader = document.querySelector('.intro-header');
//The main part of this application...wrapped in a <main> tag
let main = document.querySelector('#main-section');
let welcomeName = "";
// This is the existing space saved in the code for the totalFund value.. the toatal fund is returned here
let totalFundArea = document.querySelector('.totalFundArea');

// The idea for a submit count, is cool, Basically, when the user ommits a field and clicks on submit, the error message for the ommitted field comes up and stays there until you fill it and click submit again, thats when the error message leaves
// But with a submitCount, after Clicking the submitButton, the value of subMit Count increments. and there is a function that checks if submitCount is > 0.
// when submitCount is greater than 0, the user tries to fill the empty fields they ommited, and the function listens on input, to check if the field has been filled and clears the Error message
let submitCount = 0;


// function that increases the value of submitCount by 1 each time the submit button on the first dialog box is clicked.
function submitIncrement() {
    submitCount++;
}


// This is the function that is called when the submitCount values is > 0, and it listens on input to see if the empty fields are filled, and clears the error messages
function formRetry() {
    if (submitCount > 0) {
        firstName.addEventListener("input", function () {
            if (firstName.value.trim().length > 0) {
                firstNameWarning.textContent = '';
            }
            else {
                firstNameWarning.textContent = 'This field is required';

            }
        });
        lastName.addEventListener("input", function () {
            if (lastName.value.trim().length > 0) {
                lastNameWarning.textContent = '';
            }
            else {
                lastNameWarning.textContent = 'This field is required';

            }
        })
    }
}

// This is the first function called, when the submit button is clicked, it contains the validation process, checking if any field is left empty, if true, the error messages are returned underneath the empty fields
infoSubmit.addEventListener("click", function () {
    submitIncrement();

    if (firstName.value.trim().length === 0 && lastName.value.trim().length === 0) {
        firstNameWarning.textContent = 'This field is required';
        lastNameWarning.textContent = 'This field is required';
    }
    else if (firstName.value.trim().length === 0) {
        firstNameWarning.textContent = 'This field is required';
        lastNameWarning.textContent = '';
    }
    else if (lastName.value.trim().length === 0) {
        lastNameWarning.textContent = 'This field is required';
        firstNameWarning.textContent = '';
    }
    else {
        firstNameWarning.textContent = '';
        lastNameWarning.textContent = '';
        let rawName = firstName.value.toLowerCase();
        let welcomeName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
        welcomeMessage.textContent = `Welcome ${welcomeName},`;
        startDialog.close();
        introHeader.style.display = 'none';
        startBtn.style.display = 'none';
        main.style.display = 'block';
        totalFundArea.innerText = `$${totalFunds}.00`
    }

    //Calling the form retry function, if the error comes on 
    formRetry();



});


// This documentation thing is hard oh JESUS!!!!!!!!!!!!!!!!

// Here i am basically getting the the needed eleements for the expense, calculations

let addExpensebtn = document.querySelector('#addExpense');
let addExpenseDialog = document.querySelector('#addExpenseDialog');
let cancelNewExpenseDialog = document.querySelector('#cancelNewExpenseDialog');
let addNewExpenseName = document.querySelector('#addNewExpenseName');
let expenseForm = document.querySelector('.expenseForm');
let newExpenseName = document.querySelector('#newExpenseName');
let newExpenseNameInput = document.querySelector('#newExpenseNameInput');
let rent = document.querySelector('#rentExpense');


// Now if you check the application, You can see that rent field is the only one available by default. because it is assumed that the user has to be paying rent. if not, you could input 0.
// Below the rent input field, you can see an add button that givees you the ability to add other possible expenses for the month, but it is disabled by default
// This function checks if the rent input is filled... if it's filled, the add button is enabled.else it stays disabled

rent.addEventListener('input', function () {

    if (rent.value.trim().length > 0) {
        addExpensebtn.disabled = false;
    }
    else {
        addExpensebtn.disabled = true;
    }
});

//This is the function that appends the new expense name and it's respective field
// to the expense form
function addExpenseToList() {

    let rawName = newExpenseNameInput.value.toLowerCase();
    let labelDisplay = rawName.charAt(0).toUpperCase() + rawName.slice(1);

    let newExpenselabel = document.createElement('label');
    let newExpenseInput = document.createElement('input');
    newExpenselabel.setAttribute('class', 'expenseFormLabel');
    newExpenseInput.setAttribute('class', 'ExpenseValue');
    newExpenseInput.type = 'number';
    newExpenseInput.placeholder = 'Enter amount...';
    newExpenselabel.textContent = `${labelDisplay}`
    console.log(newExpenseNameInput.value)


    let breakTag1 = document.createElement('br');
    let breakTag2 = document.createElement('br');

    expenseForm.appendChild(newExpenselabel);
    expenseForm.appendChild(breakTag1);
    expenseForm.appendChild(newExpenseInput);
    expenseForm.appendChild(breakTag2);

}

// The event Listener placed on the add epense button, and peprforms the inputed function

addNewExpenseName.addEventListener("click", function () {
    addExpenseToList();
    closeAddExpenseDialog();

})

//Function that shows the dialog of add new expense
function showAddExpenseDialog() {
    addExpenseDialog.showModal();
}

// function that closes the dialogue
function closeAddExpenseDialog() {
    addExpenseDialog.close();
}

cancelNewExpenseDialog.addEventListener("click", closeAddExpenseDialog);
addExpensebtn.addEventListener("click", showAddExpenseDialog);


// Getting elemets for calculation function

let calculate = document.querySelector("#calculate");
let totalExpenseValue = 0;
let netIncome = 0;
let netIncomeMessage = document.querySelector(".netIncomeMessage");



function calculation() {
    let totalExpense = document.querySelectorAll(".ExpenseValue");
    totalExpenseValue = 0;
    for (let i = 0; i < totalExpense.length; i++) {
        totalExpenseValue += +(totalExpense[i].value);
    }

    totalExpense.forEach(function (field) {
        field.disabled = true;
    })
    netIncome = totalFunds - totalExpenseValue;

    netIncomeMessage.textContent = `Your Net income is: $${netIncome}`;
    console.log(netIncome)

    let expenseNames = document.querySelectorAll(".expenseFormLabel");
    let ExpenseValues = document.querySelectorAll(".ExpenseValue")
    addExpensebtn.disabled = true;

    //Code for Chart calculation
    const chartData = {
        labels: [],
        data: [],
    }

    expenseNames.forEach(function (name) {
        chartData.labels.push(name.textContent);
    });

    ExpenseValues.forEach(function (value) {
        chartData.data.push(value.value);
    });

    const myChart = document.querySelector(".my-chart");

    new Chart(myChart, {
        type: "doughnut",
        data: {
            labels: chartData.labels,
            datasets: [{
                label: "Expense",
                data: chartData.data,
            },
            ],
        },
        options: {
            borderWidth: 5,
            borderRadius: 2,
            hoverBorderWidth: 0,
            plugins: {
                legend: {
                    // display: false,
                    gap: 10,
                    onClick: function (e) {
                        e.stopPropagation();
                    }
                }
            }
        }})

}

calculate.addEventListener("click", calculation);

let editTotalIncomeBtn = document.querySelector('#editTotalIncomeBtn');

editTotalIncomeBtn.addEventListener("click", showStartDialog)



