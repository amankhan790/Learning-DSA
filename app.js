let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number :"));
let m = Number(prompt("Enter a number :"));

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write("*");
  }
  console.log();
}
