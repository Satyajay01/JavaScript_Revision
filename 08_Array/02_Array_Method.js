const boys = ["satyajay","satya","jay" ];
const cars = ["BMW","Audi","Ford"];

// boys.push(cars);
// console.log(boys);


const boys_cars = boys.concat(cars);
console.log(boys_cars);
console.log(boys_cars.length);


// -------------------------------------

const number_arr = [1,2,3,[4,5,6,[7,8,9]],[9,8,7]];
const new_number_arr = number_arr.flat(Infinity);
console.log(new_number_arr);


// -------------------------------------

const Array_name = (Array.from("Satyajay")); // convert to Array
console.log(Array_name,"length is = ",Array_name.length);


// ---------------------------------------

let score1 = 100;
let score2 = 200;
let score3 = 300;

const  score4 = Array.of(score1,score2,score3);
console.log(score4);



