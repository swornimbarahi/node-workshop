// Print out
let a = "This is a variable";

console.log(1);
console.log("string");
console.log(a);

// Print out multiple things from one function;
console.log("This was our", 1, "st Tutorial.");

// Variables
// All information is stored in 1s and 0s
// Boolean - 1 , 0 - True, False
// Number - 00 -> 0, 01 -> 1, 10 -> 2
// String -  0110 1100  0001 1001 -> ASCII -> l\n

// How to create them
// let, var, const

let fname_1 = "Swornim";
const fname_2 = "Swornim";

const lname = "Barahi";

fname_1 = fname_1 + lname;
console.log(fname_1);

// fname_2 = fname_2 + lname;
// console.log(fname_2);
// Does not run because, const variable cannot be reassigned


// for loop
// for (define/initialize the variable; set the condition; final step) {
//    Looped code here;
//}

for (let i = 0; i < 4; i += 1) {
  console.log(i);
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 1; i <= 5; i += 1) {
  let str = "";
  for (let j = 1; j <= i; j += 1) {
    str += i + " ";
  }
  console.log(str);
}

// while loops
// while (condition) {
//    Loop code here;
//}

let n = 0;
while (n < 10) {
  console.log(n * n);
  n += 1;
}


// if then else then

// if (condition) {
//    Do task a;
// }

// if (condition) {
//    do something;
// } else {
//    do something else;
// }

// if (condition) {
//   do task 1;
// } else if (condition_2) {
//   do task 2;
// } else if (condition_3) {
//   do task 3;
// } else {
//   do task 4;
// }


// Arithmetic Operators;
// Add +
// Subtract -
// Multiply *
// Division /

// Math.round(100/3)
// -> 33
// Math.floor(100.9)
// -> 100
// Math.ceil(100.000001)
// -> 101
// Math.log(100)
// 4.605170185988092
// Math.log10(1000)
// 3

// let a = 1, b = 5;
// a++; // a 2
// b += --a; // a -> 1 before the statement runs, which means b = 6.
// ++a;
// a--;

// Boolean Operators;
// && -> and operator
// || -> or operator
// == -> equals operator (loose)
// === -> strict equals operator
// ^ -> XOR operator
// ! -> Not operator


// Bitwise Operators;
// ~ -> Not operator; 1 -> 0, 1011 -> 0100
// & -> And operator; 1 & 0 -> 0, 1100 & 0110 -> 0100
// | -> Or operator; 0 | 0 -> 0, 1 | 0 -> 1, 11000111 | 01100111 -> 11100111
// ^ -> xor operator; 1 ^ 0 -> 1, 1 ^ 1 -> 0, 1110 ^ 0111 -> 1001
// >> -> Shift Right; 1101 >> 2 -> 0011, 11010110 >> 1 -> 01101011
// << -> Shift Left; 1101 << 2 -> 110100, 11010110 << 1 -> 110101100
//                    Capacity 4 bits ->  1101 << 1 -> 1010
// 1237896

// function toBinary(x) {
//   let res = "";

//   while (x > 0) {
//     res += x % 2;
//     x >>= 1;
//   }

//   return res.split('').reverse().join('');
// }

// console.log(toBinary(1237896));

// Function
// function function_name(arguments) {
// 
//    return something;
// }
