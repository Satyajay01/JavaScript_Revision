// 9 types of function...............


// 1. Named Function
function Named_Function(a,b) {
    return console.log(a+b);
};
Named_Function(2,2);


// 2. Anonymous Function
const Anonymous_Function = function(a,b) {
    return console.log(a*b);
};
Anonymous_Function(4,4)


// 3. Arrow Function
const Arrow_Function = (a,b)=>{
    return console.log(a+b);
};
Arrow_Function(6,6)


// 4. Constructor Function
function Constructor_Function(name, age) {
    this.name = name;
    this.age = age;
};
const user = new Constructor_Function("Satyajay", 23);
console.log(user.name, user.age);


// 5. Generator Function
function* Generator_Function() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = Generator_Function();
console.log(gen.next().value);



// 6. Async Function
async function Async_Function() {
    const response = await fetch("https://api.example.com");
    return response.json();
}
// Async_Function();


// 7. Immediately Invoked Function Expression (IIFE)
(function(){
    console.log("This runs immediately!");
})();


// 8. Recursive Function
function Recursive_Function(n) {
    return n===0 ? 1 : n * Recursive_Function(n-1);
}
console.log("Factorial ",Recursive_Function(5));


// 9. Higher-Order Function
function Higher_Order_Function(fn, a,b){
    return fn(a,b);
}
console.log(Higher_Order_Function((x,y)=>x+y, 5,5))


