function saymayname() {
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("Y");
};

// saymayname(); //saymayname = Reference and () = execution
// ------------------

function addtownumber(number1, number2) {
    console.log(number1 + number2);
}
addtownumber(5, 5);

// -------------------------


function addtownumber2(number1, number2) {
    let result = number1 + number2;
    return result;
}

const result = addtownumber2(4, 4);
console.log("Result:", result);

// -----------------------------



function loginUserMassage(username) {
    if (username === undefined) {
        console.log("Please Enter a username");
        return
    }
    else {

        return `${username} just logged in `
    }

};

console.log(loginUserMassage("Satyajay"));


