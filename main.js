// var r = 6;
// var R = "6";

// console.log(r==R);
// // console.trace(3>8);
// console.log("Ekeso",3<8,"hh"+9);

// // Unary Operator
// console.log(typeof(7));
// console.log(typeof(r));
// console.log(typeof(R));
// console.log(typeof(true));
// console.log(typeof("Ekeso"));

// alert(5 + null);
// alert(5 + undefined);

// Example
// var value = prompt("Enter a value");
// value = parseInt(value);
// alert(typeof(value));

// //Question
// // 1.
// value = prompt("Input Value");
// if (value!=null || value!=undefined) {
//     alert(value)
// }

// // 2.
// century = prompt("Input a Number");
// century = parseInt(century);
// century >= 100 ? alert("Century or Above") : alert("Below a Century");

// age =  Number(prompt("Enter age"))
// age = 19
// console.log(typeof(age))
// if (age>=18 && age<=50) {
//     console.log("Within age range")
// } else {
//     console.log("not needed")
// }

data = Number(
  prompt("Welcome\n1. Airtime-self \n2. Airtime-others \n3. Data \n4. Transfer")
);
// Airtime Self
if (data == 1) {
    amount = prompt("Enter Amount: "); 
  if (amount==0) {
      alert("Invalid amount selected");
  } else {     
    alert("#" + amount + " has been recharged successfully");
  }
} else if (data == 2) {
  //Airtime Others
  network = prompt(
    "Enter Network Provider:\n1. MTN\n2. GLO\n3. Airtel\n4. Etisalat"
  );
  if (network==1||network==2||network==3||network==4) {
    amount = prompt("Enter Amount: ");
    number = prompt("Enter mobile number: ");
    alert("#" + amount + " has been sent to " + number + " successfully");    
} else {     
    alert("Invalid provider selected");
}
} else if (data == 3) {
  //Data
  network = Number(prompt("1. Self\n2. Other"));
  if (network == 1) {
    amount = prompt("Enter Data amount(MB): ");
    alert(amount + "MB has been sent to you successfully");
  } else {
    number = prompt("Enter Recipient number: ");
    network = prompt(
        "Enter Network Provider:\n1. MTN\n2. GLO\n3. Airtel\n4. Etisalat"
      );
    amount = prompt("Enter Data amount(MB): ");
    alert(amount + "MB has been sent to " + number + " successfully");
  }
} else if (data == 4) {
  //Transfer
  number = prompt("Enter Account Number: ");
  amount = prompt("Enter Amount to be transferred: ");
  ans = confirm("Are you sure?");
  if (ans==true) {
    alert("#" + amount + " has been transferred to " + number + " successfully");      
  } else {
    alert("Transaction cancelled successfully");      
  }
} else {
  alert("Invalid package selected");
}
