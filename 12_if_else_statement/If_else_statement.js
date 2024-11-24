// If-Else-----------
let a = 10;
let b = 20;

if (a > b) {
    console.log("a is greater than b");
}
else {
    console.log("b is greater than a");
};

//Adding Else If--------------

let c = 2; 
let d = 4;
let e = 6;
let f = 8;
let g = 10;

if (8==c) {
    console.log("Value 8 is C ");
}
else if(8==d){
    console.log("Value 8 is D ");
}
else if(8==e){
    console.log("Value 8 is E ");
}
else if(8==f){
    console.log("Value 8 is F ");
}
else{
    console.log("Value 8 is G ");
};

// Nested If-Else--------------

let number = 0;

if (number > 0) {
    console.log("Positive number");
} else {
    if (number < 0) {
        console.log("Negative number");
    } else {
        console.log("Zero");
    }
}
