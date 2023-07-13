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

// let array3 = [5, 4, 3, 2, 1];

// for (let i = 0; i < array3.length / 2; i++) {
//   let temp = array3[i];
//   array3[i] = array3[array3.length - i - 1];
//   array3[array3.length - i - 1] = temp;
// }
// console.log("reverses", array3);

//Q4 subarray
// let array4 = [1, 2, 3, 4, 5];

// for (let i = 0; i < array4.length; i++) {
//   for (let j = i; j < array4.length; j++) {
//     console.log(array4.slice(i, j + 1));
//   }
// }

// Q5 sum of subArray
// let array4 = [1, 2, 3, 4, 5];
// let greatest = 0;
// let subarrayWithGreatestSum = [];

// for (let i = 0; i < array4.length; i++) {
//   let subarray = [];
//   let sum = 0;

//   for (let j = i; j < array4.length; j++) {
//     subarray.push(array4[j]);

//     sum = sum + array4[j];
//     if (sum > greatest) {
//       greatest = sum;
//       subarrayWithGreatestSum = subarray.slice();
//     }
//   }
// }
// console.log("Subarray with greatest sum:", subarrayWithGreatestSum);
// console.log("greatest", greatest);

//Q6 Duplicate
// let array6 = [1, 2, 4, 3, 2];
// let hasDuplicates = false;

// for (let i = 0; i < array6.length; i++) {
//   for (let j = i + 1; j < array6.length; j++) {
//     if (array6[i] === array6[j]) {
//       hasDuplicates = true;
//     }
//   }
// }

// console.log(hasDuplicates);

//Q7 choclate distribution
let a = [7, 3, 2, 2, 4, 9, 12, 1, 56, 1];
let m = 3;
let a2 = [];

for (let i = 0; i < m; i++) {
  let min = a[i];
  let minIndex = i;

  for (let j = i + 1; j < a.length; j++) {
    if (a[j] < min) {
      min = a[j];
      minIndex = j;
    }
  }

  a2.push(min);

  // Swap the smallest element with the current element at index i
  let temp = a[i];
  a[i] = a[minIndex];
  a[minIndex] = temp;
}

console.log("a2", a2);
