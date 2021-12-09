var billAmount = document.getElementById("bill-amount");
var cashGiven = document.getElementById("cash-given");
var btnCalculate = document.getElementById("btn-calculate");
var cashInfo = document.getElementById("cash-info");
var tableList = document.querySelectorAll(".no-of-notes");
var cashToBeReturned, tempCash;
var notes = [2000, 500, 100, 20, 10, 5, 1];

function validate(number) {
    return !isNaN(number) && number.trim().length > 0;
}

function nonZero(number) {
    return Number(number) >= 0;
}

btnCalculate.addEventListener("click", () => {
    amount = billAmount.value;
    given = cashGiven.value;
    if (
        validate(amount) &&
        validate(given) &&
        nonZero(amount) &&
        nonZero(given)
    ) {
        bill = parseInt(amount);
        given = parseInt(given);
        if (given >= amount) {
            if (amount === 0 && given > 0) {
                cashInfo.innerText = "Extra cash is given!!!!";
            } else {
                cashToBeReturned = given - bill;
                cashInfo.innerText =
                    "Cash to be returned: ₹" + cashToBeReturned;
                calculateChange(cashToBeReturned);
            }
        } else {
            cashInfo.innerText = "Pay remaining money to fulfill bill";
        }
    } else {
        cashInfo.innerText = "INVALID";
    }
});

function calculateChange(cashToBeReturned) {
    var words = "";
    for (var i = 0; i < notes.length; i++) {
        var noOfNotes = Math.trunc(cashToBeReturned / notes[i]);
        tableList[i].innerText = noOfNotes;
        cashToBeReturned = cashToBeReturned % notes[i];
    }
    words += "\nReturn: ₹" + cashToBeReturned;
}
