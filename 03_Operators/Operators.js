// Arithmetic Operators**************

let x = 10;
let y = 3;

console.log(x + y); // Addition (+)
console.log(x - y); // Subtraction (-)
console.log(x * y); // Multiplication (*)
console.log(x / y); // Division (/) 
console.log(x % y); // Modulus (%)
console.log(x ** y);// Exponentiation (**)
console.log(++x);   // Increment (++)
console.log(--y);   // Decrement (--)


// Assignment Operators********************

let a = 10;
let b = 5;
let c = 7;

console.log(a = b);    // Basic Assignment (=)
console.log(a += b);   // Addition Assignment (+=)
console.log(a -= b);   // Subtraction Assignment (-=)
console.log(a *= b);   // Multiplication Assignment (*=)
console.log(a /= b);   // Division Assignment (/=)
console.log(a %= b);   // Modulus Assignment (%=)
console.log(a **= 2);  // Exponentiation Assignment (**=)

console.log(c &= 3);   // Bitwise AND Assignment (&=)
console.log(c |= 2);   // Bitwise OR Assignment (|=)
console.log(c ^= 5);   // Bitwise XOR Assignment (^=)
console.log(c <<= 1);  // Left Shift Assignment (<<=)
console.log(c >>= 1);  // Right Shift Assignment (>>=)
console.log(c >>>= 1); // Unsigned Right Shift Assignment (>>>=)


// Comparison Operators******************

let d = 20;
let e = 10;
let f = "20";

console.log(d == f);   // Equal to (==) -> true because values are the same (type coercion)
console.log(d === f);  // Strict equal to (===) -> false because types are different
console.log(d != e);   // Not equal to (!=) -> true because values are different
console.log(d !== f);  // Strict not equal to (!==) -> true because types are different
console.log(d > e);    // Greater than (>) -> true because 20 > 10
console.log(d < e);    // Less than (<) -> false because 20 is not less than 10
console.log(d >= e);   // Greater than or equal to (>=) -> true because 20 >= 10
console.log(d <= e);   // Less than or equal to (<=) -> false because 20 is not less than or equal to 10



// Conditional (Ternary) Operator*****************
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.


// Logical Operators*****************

// 1. AND (&&)
let g = 7;
let h = 3;
console.log(g < 10 && h > 1); // true


// 2. OR (||)
let j = 3;
let k = 8;
console.log(j === 5 || k === 5); // false

// 3. NOT (!)
let l = 10;
let m = 10;
console.log(!(l === m)); // false



//JavaScript Bitwise Operators*********

let p = 40;
let q = 20;
let r = "40";

console.log(p == r);   // Equal to (==) -> true because values are the same (type coercion)
console.log(p === r);  // Strict equal to (===) -> false because types are different
console.log(p != q);   // Not equal to (!=) -> true because values are different
console.log(p !== r);  // Strict not equal to (!==) -> true because types are different
console.log(p > q);    // Greater than (>) -> true because 40 > 20
console.log(p < q);    // Less than (<) -> false because 40 is not less than 20
console.log(p >= q);   // Greater than or equal to (>=) -> true because 40 >= 20
console.log(p <= q);   // Less than or equal to (<=) -> false because 40 is not less than or equal to 20


