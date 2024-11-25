// for in = key (object)
// for of = Values 
// forEach = key and value

// -----------------------

const arr = [1,2,3,4,5,6,7,8,9];

for(const i of arr){
    console.log("Index value",i);
};
// -----------------------
const name ="SATYAJAY";
for(const j of name){
    console.log(j);
};

// ----------for in-------------

const myobj ={
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    sw: "Swift"
}

for (let key in myobj){
    console.log(key) // only for key
    console.log(myobj[key]) // only for values
};


// ---------Array For_in loop-----------
const programming =["js","c++","python","ruby"];
for(let key in programming){
    console.log(`index value ${key}`, programming[key])
};


// -------------forEach--with--Array---------------
// ------------forEach with normal function-----------

const coding = ["JavaScript","C++","Python","Ruby"];


coding.forEach(function(value, index){
    console.log(index, value);
});

// ------------forEach with arrow function-----------
coding.forEach((value, index)=>{
    console.log(index,value);
})



