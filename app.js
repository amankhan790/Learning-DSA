let prompt = require("prompt-sync")();

// pattern one
// let n = Number(prompt("Enter a number :"));
// let m = Number(prompt("Enter a number :"));

// for (let i = 0; i < m; i++) {
//   for (let j = 0; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// left angel triangle
// let n = Number(prompt("Enter a number :"));

// for (let i = 1; i <= n; i++) {
//   for (let j = n; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// right angel triangle
// let n = Number(prompt("Enter a number :"));
// for (let i = 1; i <= n; i++) {
//   for (let j = n; j >= i; j--) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Mirror right angel triangle
// let n = Number(prompt("Enter a number :"));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("  ");
//   }

//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// piramid structure
let n = Number(prompt("Enter a number :"));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }

  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// printing english letter
// let n = Number(prompt("Enter a number :"));

// for (let i = 1; i <= n; i++) {
//   let ascii = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   console.log();
// }
