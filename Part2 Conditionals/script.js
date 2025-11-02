// // quistion one
// let amount = Number(prompt("Enter Amount Here :"));

// let discount = 0;

// if (amount > 0 && amount <= 5000) {
//   discount = 5;
// }
// if (amount > 5000 && amount <= 7000) {
//   discount = 10;
// }
// if (amount > 7000 && amount <= 10000) {
//   discount = 20;
// }
// let paybleAmount = amount - Math.floor((amount * discount) / 100);

// console.log(paybleAmount);

// // Quistion two
// let unit = Number(prompt("Enter Amount Here :"));
// let amount = 0;

// if(unit>400){
//   amount = (unit-400) * 13;
//   unit = 400
// }
// if(unit>200 && unit<=400){
//   amount += (unit-200) * 8;
//   unit = 200;
// }
// if(unit>100 && unit<=200){
//   amount += (unit-100) * 6;
//   unit = 100;
// }
// amount += unit * 4;
// console.log(amount);

// Qoustion three
let amount = 5234;
if (amount > 500) {
  console.log("500 Notes",Math.floor(amount / 500));
  amount = amount % 500;
}
if (amount > 200) {
  console.log("200 Notes", Math.floor(amount / 200));
  amount = amount % 200;
}
if (amount > 100) {
  console.log("100 Notes", Math.floor(amount / 100));
  amount = amount % 100;
}
if (amount > 50) {
  console.log("50 Notes", Math.floor(amount / 50));
  amount = amount % 50;
}
if (amount > 20) {
  console.log("20 Notes", Math.floor(amount / 20));
  amount = amount % 20;
}
if (amount > 10) {
  console.log("10 Notes", Math.floor(amount / 10));
  amount = amount % 10;
}
if (amount > 5) {
  console.log("5 Notes", Math.floor(amount / 5));
  amount = amount % 20;
}
if (amount > 2) {
  console.log("2 Notes", Math.floor(amount / 2));
  amount = amount % 2;
}
if (amount === 1) {
  console.log("1 Notes", amount);
}

