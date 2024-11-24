// There are 3 types of scope in JavaScript. Global,Function,Block

// (1) Global:-------------------
let globalVariable = "I am global";

function display() {
    console.log(globalVariable); // Accessible
}
display();
console.log(globalVariable); // Accessible




// (2)Function:----------------------
function myFunction() {
    let functionVariable = "I am inside a function";
    console.log(functionVariable); // Accessible
}

myFunction();
// console.log(functionVariable); // Error: functionVariable is not defined



// (3)Block:-------------------------
{
    let blockVariable = "I am inside a block";
    console.log(blockVariable); // Accessible
}

// console.log(blockVariable); // Error: blockVariable is not defined
