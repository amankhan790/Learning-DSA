// fact of n natural number
// let userInput = prompt("Enter Any Number :");

// if (userInput === null) {
//   console.log("Cancelled :");
// } else {
//   var n = Number(userInput);
//   if (isNaN(n)) {
//     console.log("Invalid Number");
//   } else {
//     if (n > 0) {
//       let fact = 0;
//       for (let i = 1; i <= n; i++) {
//         fact += i;
//       }
//       console.log(fact);
//     } else {
//       console.log("should be +ve and more than zero :");
//     }
//   }
// }

// // fact of a natural number
// let userInput = prompt("Enter Any Number :");

// if (userInput === null) {
//   console.log("Cancelled :");
// } else {
//   var n = Number(userInput);
//   if (isNaN(n)) {
//     console.log("Invalid Number");
//   } else {
//     if (n > 0) {
//       let fact = 1;
//       for (let i = 1; i <= n; i++) {
//         fact *= i;
//       }
//       console.log(fact);
//     } else {
//       console.log("should be +ve and more than zero :");
//     }
//   }
// }

// factor of a number
// let userInput = prompt("Enter Any Number :");

// if (userInput === null) {
//   console.log("Cancelled :");
// } else {
//   var n = Number(userInput);
//   if (isNaN(n)) {
//     console.log("Invalid Number");
//   } else {
//     if (n > 0) {
//       for (let i = 1; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0) {
//           console.log(i);
//         }
//       }
//       console.log(n);
//     } else {
//       console.log("should be +ve and more than zero :");
//     }
//   }
// }

// prime number
// let userInput = prompt("Enter Any Number :");

// if (userInput === null) {
//   console.log("Cancelled :");
// } else {
//   var n = Number(userInput);
//   if (isNaN(n)) {
//     console.log("Invalid Number");
//   } else {
//     if (n > 0) {
//       let isPrime = true;
//       for (let i = 2; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0) {
//           isPrime = false;
//         }
//       }
//       console.log(isPrime);
//     } else {
//       console.log("should be +ve and more than zero :");
//     }
//   }
// }

// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;

//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(13));

// Some of digit of a number
// let userInput = prompt("Enter Any Number :");

// if (userInput === null) {
//   console.log("Cancelled :");
// } else {
//   var n = Number(userInput);
//   if (isNaN(n)) {
//     console.log("Invalid Number");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       while (n > 0) {
//         let rem = n % 10;
//         sum += rem;
//         n = Math.floor(n / 10);
//       }
//       console.log(sum);
//     } else {
//       console.log("should be +ve and more than zero :");
//     }
//   }
// }

// Reverse a number
// let userInput = prompt("Enter Any Number :");

// if (userInput === null) {
//   console.log("Cancelled :");
// } else {
//   var n = Number(userInput);
//   if (isNaN(n)) {
//     console.log("Invalid Number");
//   } else {
//     if (n > 0) {
//       let reverse = 0;
//       while(n>0){
//         let reminder = n % 10;
//         reverse = reverse*10 + reminder;
//         n = Math.floor(n/10)

//       }
//       console.log(reverse);

//     } else {
//       console.log("should be +ve and more than zero :");
//     }
//   }
// }

// Ckecking weither a number is strong or not
// let userInput = prompt("Enter Any Number :");
// if (userInput === null) {
//   console.log("Cancelled :");
// } else {
//   var n = Number(userInput);
//   if (isNaN(n)) {
//     console.log("Invalid Number");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       let copy = n;
//       while (n > 0) {
//         let rem = n % 10;
//         let fact = 1;
//         for (let i = 1; i <= rem; i++) {
//           fact = fact * i;
//         }
//         sum = sum + fact;
//         n = Math.floor(n / 10);
//       }
//       if(copy === sum){
//         console.log("strong number");

//       }
//       else{
//         console.log("not strong number");
//       }
//     } else {
//       console.log("should be +ve and more than zero :");
//     }
//   }
// }

// guess the number
// let random = Math.floor(Math.random() * 100) + 1;

// let guess = null;
// while (guess !== random) {
//   let input = prompt("Guess the number (1–100) or type exit to quit:");
//   if (input === null || input.toLowerCase() === "exit") {
//     console.log("Game exited by user 🚪");
//     break;
//   }

//   guess = Number(input);

//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log("❌ Enter a valid number between 1 and 100");
//     continue;
//   }

//   if (guess > random) {
//     console.log("📉 Too high, try again...");
//   } else if (guess < random) {
//     console.log("📈 Too low, try again...");
//   } else {
//     console.log("🎉 Congrats! You guessed it right!");
//   }
// }
console.log("Hello");
