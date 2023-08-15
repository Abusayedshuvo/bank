//   deposit amount

document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInputElement = document.getElementById("deposit-input");
  const depositInput = parseFloat(depositInputElement.value);

  const depositAmountElement = document.getElementById("deposit-amount");
  const depositAmount = parseFloat(depositAmountElement.innerText);
  const totalDeposit = depositInput + depositAmount;
  depositInputElement.value = "";
  if (isNaN(totalDeposit)) {
    alert("Kindly Put a Valid Number");
    return;
  }
  depositAmountElement.innerText = totalDeposit;
  // Balance Amount
  const balanceAmountElement = document.getElementById("balance-amount");
  const oldBalanceAmount = parseFloat(balanceAmountElement.innerText);
  const totalBalance = oldBalanceAmount + totalDeposit;
  balanceAmountElement.innerText = totalBalance;
});

// Withdraw Amount

document.getElementById("withdraw-btn").addEventListener("click", function () {
  // Withdraw amount
  const withdrawInputElement = document.getElementById("withdraw-input");
  const withdrawInput = parseFloat(withdrawInputElement.value);

  const withdrawAmountElement = document.getElementById("withdraw-amount");
  const withdrawAmount = parseFloat(withdrawAmountElement.innerText);
  const totalWithdraw = withdrawAmount + withdrawInput;
  withdrawInputElement.value = "";
  if (isNaN(totalWithdraw)) {
    alert("Kindly Put a Valid Number");
    return;
  }

  //   Removed from main Balance
  const balanceElement = document.getElementById("balance-amount");
  const balanceAmount = balanceElement.innerText;
  const updateBalance = balanceAmount - withdrawInput;
  if (withdrawInput > balanceAmount) {
    alert("You can not withdraw more than your balance");
    return;
  }
  balanceElement.innerText = updateBalance;
  withdrawAmountElement.innerText = totalWithdraw;
});
