const a = [1, 3, 4];
let b = 0;

for (let i = 0; i < a.length; i++) {
  b += a[i];
}

console.log("b", b);

let str = "hello world";
let str2 = "";
for (let i = str.length - 1; i >= 0; i--) {
  str2 = str[i];
  console.log("str2", str2);
}

let arr = [1, 2, 3, 4, 5];
let arr2 = [];
for (let i = arr.length - 1; i >= 0; i--) {
  arr2 = arr[i];
  console.log("arr2", arr2);
}
let string = "alina";
let reversedArr = [];

for (let i = string.length - 1; i >= 0; i--) {
  reversedArr.push(string[i]);
}

console.log(reversedArr);

let pallin = "racecar";
let drome = "";
for (let i = pallin.length - 1; i >= 0; i--) {
  drome += pallin[i];
}

if (pallin === drome) {
  console.log("true");
} else {
  console.log("false");
}
