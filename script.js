const startDialog = document.querySelector("#startDialog");
let start =document.querySelector("#startBtn");

let cancelInfo = document.querySelector("#cancelInfoSubmit");

let addIncomeSource = document.querySelector("#addIncomeSource");

let addNewIncomeSourceDialog = document.querySelector("#addNewIncomeSourceDialog");


//Fuction that shows Start dialog on click of the start management button
function showStartDialog(){
    startDialog.showModal();
}

//Function that closes the start dialogue on click of the cancel button in the dialogue
function closeStartDialog(){
    startDialog.close();
}

//Function that shows a new dialogue to enter new source of income
function shownewIncomeSourceDialog(){
    addNewIncomeSourceDialog.showModal()
}



let newIncomeName = document.querySelector("#newIncomeLabel");
let newIncomeAmount = document.querySelector("#newIncomeAmount");
let addOtherIncomeSource = document.querySelector("#addOtherIncomeSource");
let startDialogForm = document.querySelector('#startDialogForm');


//function that appends a new source of income to the first dialog
function addIncomeToList(){
    let newIncomeLabel = document.createElement("label");
    newIncomeLabel.innerText = newIncomeName.value;
    newIncomeLabel.setAttribute("id", "startDialogLabel");
    let newIncomeAmountNumber = document.createElement("input");
    newIncomeAmountNumber.type = "number";
    newIncomeAmountNumber.value = newIncomeAmount.value;
    let breakTag1 = document.createElement('br');
    let breakTag2 = document.createElement('br');
    
    startDialogForm.appendChild(newIncomeLabel);
    startDialogForm.appendChild(breakTag1);
    startDialogForm.appendChild(newIncomeAmountNumber);
    startDialogForm.appendChild(breakTag2);
    
    
}

addOtherIncomeSource.addEventListener("click", () => {
    addIncomeToList(); // Execute the function
    addNewIncomeSourceDialog.close(); // Close the dialog
});

cancelInfo.addEventListener("click", closeStartDialog);
start.addEventListener("click",showStartDialog);
addIncomeSource.addEventListener("click", shownewIncomeSourceDialog);

