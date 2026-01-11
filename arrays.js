// // finding max element
// let arr = [2, 3, 100, 1, 4, 5, 6];

// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// // finding second max element
// let arr = [20, 40, 99, 38, 206, 384];

// let max = Math.max(arr[0], arr[1]);
// let sMax = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     sMax = max;
//     max = arr[i];
//   } else if (arr[i] > sMax && max != arr[i]) {
//     sMax = arr[i];
//   }
// }
// console.log(sMax, max);

// Reversing the array
let arr = [20, 40, 99, 38, 206, 384];
let temp = new Array(arr.length)

let j = 0;
for(let i = arr.length - 1; i>=0; i--){
  temp[j] = arr[i]
  j++
}
console.log(temp);


