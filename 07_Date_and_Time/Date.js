const mydate = new Date();

console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toUTCString());
console.log(typeof(mydate));

// ------------------------

let my_date = new Date();
console.log(my_date.getDay());
console.log(my_date.getMonth()+1);
console.log(my_date.getFullYear());

// -------------------------

let myDate2 = new Date(2024,10,20);
console.log(myDate2.toDateString()); // single disit in javascript month starts from 0

let my_date3 = new Date("2024-11-20") // yy-mm-dd
console.log(my_date3.toLocaleString());  // duble disit in javascript month starts from 01


