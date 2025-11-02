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
let userInput = prompt("Enter Any Number :");

if (userInput === null) {
  console.log("Cancelled :");
} else {
  var n = Number(userInput);
  if (isNaN(n)) {
    console.log("Invalid Number");
  } else {
    if (n > 0) {
      let isPrime = true;
      for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          isPrime = false;
        }
      }
      console.log(isPrime);
    } else {
      console.log("should be +ve and more than zero :");
    }
  }
}
