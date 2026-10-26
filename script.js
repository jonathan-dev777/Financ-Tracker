let totalBalance = 0;
let totalIncome = 0;
let totalExpenses = 0;
let transactionNumber = 0;

document.getElementById("add-transaction-button").addEventListener("click", function () {
    let description = document.getElementById("description").value;
    if (description === "") {
        alert("Please enter a description for the transaction.");
        return;
    }
    let amount = Number(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount greater than 0.");
        return;
    }
    
    let type = document.getElementById("type").value;
    let transactionHistory = document.getElementById("transaction-history");
    let transaction = document.createElement("tr");
    let numberCell = document.createElement("td");
    let dateCell = document.createElement("td");
    let typeCell = document.createElement("td");
    let amountCell = document.createElement("td");
    let descriptionCell = document.createElement("td");

    transactionNumber++;
    numberCell.textContent = transactionNumber;
    dateCell.textContent = new Date().toLocaleDateString("de-DE");
    typeCell.textContent = type;
    amountCell.textContent = amount + " €";
    descriptionCell.textContent = description;
    transactionHistory.appendChild(transaction);

    transaction.appendChild(numberCell);
    transaction.appendChild(dateCell);
    transaction.appendChild(typeCell);
    transaction.appendChild(amountCell);
    transaction.appendChild(descriptionCell);

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";

    if (type === "income") {
        totalIncome = totalIncome + amount;
    } else if (type === "expense") {
        totalExpenses = totalExpenses + amount;
    }

    totalBalance = totalIncome - totalExpenses;

    document.getElementById("balance").textContent = totalBalance + " €";
    document.getElementById("income").textContent = totalIncome + " €";
    document.getElementById("expenses").textContent = totalExpenses + " €";

})

let typeSelect = document.getElementById("type");

typeSelect.addEventListener("change", function () {
    if (typeSelect.value === "income") {
        typeSelect.classList.add("option-income");
        typeSelect.classList.remove("option-expense");
    } else if (typeSelect.value === "expense") {
        typeSelect.classList.add("option-expense");
        typeSelect.classList.remove("option-income");
    }
});

typeSelect.dispatchEvent(new Event("change"));