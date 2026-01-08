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
// let n = Number(prompt("Enter a number :"));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }

//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

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

// X pattern
// let n = Number(prompt("Enter a number :"));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();

// }

// V pattern
let n = Number(prompt("Enter a number :"));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2 * n - 1; j++) {
    if (i == j || i + j == 2 * n) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}
