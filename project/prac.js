// const a = [1, 3, 4];
// let b = 0;

// for (let i = 0; i < a.length; i++) {
//   b += a[i];
// }

// console.log("b", b);

// let str = "hello world";
// let str2 = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   str2 = str[i];
//   console.log("str2", str2);
// }

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   arr2 = arr[i];
//   console.log("arr2", arr2);
// }
// let string = "alina";
// let reversedArr = [];

// for (let i = string.length - 1; i >= 0; i--) {
//   reversedArr.push(string[i]);
// }

// console.log(reversedArr);

// let pallin = "racecar";
// let drome = "";
// for (let i = pallin.length - 1; i >= 0; i--) {
//   drome += pallin[i];
// }

// if (pallin === drome) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// let arrayb = [3, 6, 18, 14, 20];
// let biggest = 0;

// for (let i = 0; i < arrayb.length; i++) {
//   if (arrayb[i] > biggest) {
//     biggest = arrayb[i];
//   }
// }
// console.log("biggest", biggest);
// let array1 = [3, 6, 20, 14, 20, 20];
// let array2 = [];

// for (let i = 0; i < array1.length; i++) {
//   let isDuplicate = false;

//   for (let j = 0; j < array1.length; j++) {
//     if (i !== j && array1[i] === array1[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }

//   if (!isDuplicate) {
//     array2.push(array1[i]);
//   }
//   console.log("array2:", array2);
// }
// let array1 = [12, , 3, 3, 12, 6, 20, 14, 20, 12, 20];

// for (let i = 0; i < array1.length; i++) {
//   for (let j = i + 1; j < array1.length; j++) {
//     if (array1[i] === array1[j]) {
//       array1.splice(j, 1);
//       array1.splice(i, 1);
//     }
//   }
// }

// console.log("array1:", array1);

// let array = [1, 2, 5, 4, 4, 4, 2];

// for (let i = 0; i < array.length; i++) {
//   let count = 0; // Initialize count for each unique element

//   // Check if the element has been counted before
//   if (array.indexOf(array[i]) === i) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         count++; // Increment count if element is found
//       }
//     }

//     // Display the element and its count
//     console.log("Element:", array[i]);
//     console.log("Count:", count);
//   }
// }

// let array = [1, 2, 5, 4, 4, 4, 2];
// let count = {};

// for (let i = 0; i < array.length; i++) {
//   let currentElement = array[i];
//   if (count[currentElement]) {
//     count[currentElement]++;
//   } else {
//     count[currentElement] = 1;
//   }
// }

// console.log(count);
let array = [5, 4, 8, 1, 2];
for (let i = 0; i < array.length; i++) {
  let num = array[i];
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] > num) {
      array[i] = array[j];
      array[j] = num;
    }
  }
}
console.log("array", array);
