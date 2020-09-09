data = Number(
  prompt("Welcome\n1. Airtime Self \n2. Airtime Others \n3. Data \n4. Transfer")
);
// Airtime Self
if (data == 1) {
  amount = prompt("Enter Amount: ");
  if (amount == 0) {
    alert("Invalid amount selected");
  } else {
    alert("#" + amount + " has been recharged successfully");
  }
} else if (data == 2) {
  //Airtime Others
  network = prompt(
    "Enter Network Provider:\n1. MTN\n2. GLO\n3. Airtel\n4. Etisalat"
  );
  if (network == 1 || network == 2 || network == 3 || network == 4) {
    amount = prompt("Enter Amount: ");
    if (amount == 0) {
      alert("Invalid amount selected");
    } else {
      number = prompt("Enter mobile number: ");
      alert("#" + amount + " has been sent to " + number + " successfully");
    }
  } else {
    alert("Invalid provider selected");
  }
} else if (data == 3) {
  //Data
  user = Number(prompt("1. Self\n2. Other"));
  if (user == 1) {
    amount = prompt("Enter Data amount(MB): ");
    alert(amount + "MB has been sent to you successfully");
  } else if (user == 2){
    number = prompt("Enter Recipient number: ");
    network = prompt(
      "Enter Network Provider:\n1. MTN\n2. GLO\n3. Airtel\n4. Etisalat"
    );
    if (network == 1 || network == 2 || network == 3 || network == 4) {
      amount = prompt("Enter Data amount(MB): ");
      alert(amount + "MB has been sent to " + number + " successfully");
    } else {
      alert("Invalid provider selected");
    }
  } else{
      alert("Invalid option selected");
  }
} else if (data == 4) {
  //Transfer
  number = prompt("Enter Account Number: ");
  amount = prompt("Enter Amount to be transferred: ");
  ans = confirm("Are you sure?");
  if (ans == true) {
    alert(
      "#" + amount + " has been transferred to " + number + " successfully"
    );
  } else {
    alert("Transaction cancelled successfully");
  }
} else {
  alert("Invalid package selected");
}
