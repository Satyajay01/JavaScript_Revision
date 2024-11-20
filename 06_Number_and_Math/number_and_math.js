const score = 500;
const balance = new Number(1000); // fix define datatype pf Number.
console.log(balance);

const a = String(123456); // fix define datatype of String.
console.log(a);
console.log(typeof(a));

// ------------number Precision------------

const num1 = 123.456;
console.log(num1.toPrecision(4));  // method 1

num2 = num1.toPrecision(3);  // method 2
console.log(num2);


// --------------- Math function ------------

console.log(Math);

console.log(Math.abs(-4)); // Negative value to positive Convert
console.log(Math.round(4.4));// number  Round off
console.log(Math.ceil(4.3));

console.log(Math.min(1,2,3,4,5,6)); //minimum value
console.log(Math.max(1,2,3,4,5,6)); //maximum value


// ***********Random number**********

console.log("Random with 10 multiply and +1 = ",Math.random()*(10)+1)
console.log("Random with 10 multiply and +1 = ", (Math.floor(Math.random()*10)+1));

const min = 10; // fix minimum value
const max = 100; // fix maximum value
console.log(Math.floor(Math.random()*(max - min))+10);













