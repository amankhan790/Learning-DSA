let arr = [2, 3, 100, 1, 4, 5, 6];

let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
