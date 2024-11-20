let name = "satyajay";
let age = 23;
console.log(`My name is ${name} and my Age is ${age}`);

// *********************

let MyName = new String ("Satyajay");
// console.log(MyName)

console.log(MyName[0]);
console.log(MyName.length);
console.log(MyName.charAt(4));
console.log(MyName.indexOf('a'));
console.log(MyName.toUpperCase());
console.log(MyName.toLowerCase());


const newString = MyName.substring(0,5);
console.log(newString)

const anotherString = MyName.slice(-7, 5)
console.log(anotherString);

const newStringOne = "      Jay     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://satyajay.com/satyajay%20dibya";
console.log(url.replace('%20', '-'));
console.log(url.includes('dibya'))


const fullname = new String("Hii-Satyajay-dibya");
const test = console.log(fullname.split('-')); // convert String to Array 



