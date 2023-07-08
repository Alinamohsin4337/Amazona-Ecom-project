//  Q1 Find max?
// let array = [1, 2, 3, 4, 5];
// let max = 0;
// for (let i = 0; i < array.length; i++) {
//   if (max < array[i]) {
//     max = array[i];
//   }
// }
// console.log("max", max);

//  Q2 Find minimum?
// let array2 = [8, 2, 3, 4, 5];
// let min = array2[0];
// for (let i = 0; i < array2.length; i++) {
//   if (min > array2[i]) {
//     min = array2[i];
//   }
// }
// console.log("min", min);

//Q3 REVERSE
//  Q2 Find minimum?
let array3 = [5, 4, 3, 2, 1];

for (let i = 0; i < array3.length / 2; i++) {
  let temp = array3[i];
  array3[i] = array3[array3.length - i - 1];
  array3[array3.length - i - 1] = temp;
}
console.log("reverses", array3);
