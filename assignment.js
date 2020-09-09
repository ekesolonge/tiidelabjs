data = Number(
  prompt("Welcome\n1. Airtime Self \n2. Airtime Others \n3. Data \n4. Transfer")
);
// Airtime Self
if (data == 1) {
  amount = prompt("Enter Amount: ");
  if (amount >= 50 && amount <= 10000) {
    alert("#" + amount + " has been recharged successfully");
  } else {
    alert("Invalid Amount");
  }
} else if (data == 2) {
  //Airtime Others
  network = prompt(
    "Enter Network Provider:\n1. MTN\n2. GLO\n3. Airtel\n4. Etisalat"
  );
  if (network == 1 || network == 2 || network == 3 || network == 4) {
    amount = prompt("Enter Amount: ");
    if (amount >= 50 && amount <= 10000) {
      number = prompt("Enter Mobile Number: ");
      alert("#" + amount + " has been sent to " + number + " successfully");
    } else {
      alert("Invalid Amount");
    }
  } else {
    alert("Invalid provider selected");
  }
} else if (data == 3) {
  //Data
  user = Number(prompt("1. Self\n2. Other"));
  if (user == 1) {
    amount = prompt("Enter Data amount(MB): ");
    if (amount >= 10 && amount <= 100000) {
      alert(amount + "MB has been sent to you successfully");
    } else {
        alert("Invalid Amount")
    }
  } else if (user == 2) {
    number = prompt("Enter Recipient number: ");
    network = prompt(
      "Enter Network Provider:\n1. MTN\n2. GLO\n3. Airtel\n4. Etisalat"
    );
    if (network == 1 || network == 2 || network == 3 || network == 4) {
      amount = prompt("Enter Data amount(MB): ");
      if (amount >= 10 && amount <= 100000) {
        alert(amount + "MB has been sent to " + number + " successfully");
      } else {
          alert("Invalid Amount")
      }
    } else {
      alert("Invalid provider selected");
    }
  } else {
    alert("Invalid option selected");
  }
} else if (data == 4) {
  //Transfer
  number = prompt("Enter Account Number: ");
  if (number != 0) {
    amount = prompt("Enter Amount to be transferred: ");
    if (amount != 0) {
      ans = confirm("Are you sure?");
      if (ans == true) {
        alert(
          "#" +
            amount +
            " has been transferred to account number " +
            number +
            " successfully"
        );
      } else {
        alert("Transaction cancelled successfully");
      }
    } else {
      alert("Invalid Amount");
    }
  } else {
    alert("Invalid Account Number");
  }
} else {
  alert("Invalid package selected");
}
