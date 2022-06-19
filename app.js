const btn = document.getElementById("btn");
const menu = document.getElementById("menu");
// const great = document.getElementById("great");
// const good = document.getElementById("good");
// const bad = document.getElementById("bad");
const spans = document.querySelectorAll(".spans");
let inputTip = document.getElementById("percentage");
const SERVICES = [
    {
        myValue: 0.20,
        title: "Great - 20%"
    },
    {
        myValue: 0.10,
        title: "Good - 10%"
    },
    {
        myValue: 0.02,
        title: "Bad - 2%"
    }
]

btn.addEventListener("click", () => {
    menu.style.display = "block";
})

spans.forEach(spanOption => {
    spanOption.addEventListener("click", () => {
        // let inputTip = document.getElementById("percentage");
        let values = spanOption.getAttribute("data-value");

        console.log(values)

        if (SERVICES[0].myValue == values) {
            inputTip.value = SERVICES[0].title;
            menu.style.display = "none";
        } else if (SERVICES[1].myValue == values) {
            inputTip .value = SERVICES[1].title;
            menu.style.display = "none";
        } else if (SERVICES[2].myValue == values) {
            inputTip .value = SERVICES[2].title;
            menu.style.display = "none";
        }
    })
})

let amount = document.getElementById("amount");
let total = document.getElementById("totalAmount");
let owes = document.getElementById("personOwes");
const calcBtn = document.getElementById("calc");
const bill = document.getElementById("bill");
const shares = document.getElementById("peopleShare")
const results = document.getElementById("rslts");

calcBtn.addEventListener("click", () => {

    results.style.display = "block";

    if (inputTip.value == SERVICES[0].title) {
        let TipAmountOne = bill.value * SERVICES[0].myValue;
        amount.textContent = TipAmountOne;
        let totalAmountOne = bill.value - 0 + TipAmountOne;
        total.textContent = totalAmountOne;
        owes.textContent = totalAmountOne / shares .value;

    } else if (inputTip.value == SERVICES[1].title) {
        let TipAmountTwo = bill.value * SERVICES[1].myValue;
        amount.textContent = TipAmountTwo;
        let totalAmountTwo = bill.value - 0 + TipAmountTwo;
        total.textContent = totalAmountTwo;
        owes.textContent = totalAmountTwo / shares .value;
        
    }
    else if (inputTip.value == SERVICES[2].title) {
        let TipAmountThree = bill.value * SERVICES[2].myValue;
        amount.textContent = TipAmountThree
        let totalAmountThree = bill.value - 0 + TipAmountThree;
        total.textContent = totalAmountThree;
        owes.textContent = totalAmountThree / shares .value;
    }

    setTimeout(() => {
        document.location.reload();
    }, 3000);
})

