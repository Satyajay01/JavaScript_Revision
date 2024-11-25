// For Loop 
for (let i=0; i<=10; i++){
    console.log(i);
};
// -----------------------

for (let i=10; i>=0; i--){
    console.log(i);
};
// -----------------------

// For Loop with array

const myarr = [10,20,30,40,50,60,70,80,90];

for(let i=0; i<myarr.length; i++){
    console.log("Array ",myarr[i])
}

//-----------------------

const myarray2 = [ 1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < myarray2.length; i++) {
    const result = myarray2[i];
    console.log("Array with stord values = ",result);
}

// -----------------------
//--------------while-------------

let j = 0;
while (j<=10) {
    console.log("While Loop",j);
    j++;
    
}

//--------------while loop array
const myarray3 = [1,2,3,4,5,6,7,8];
let k = 0;
while (k<=myarray3.length) {
    console.log("while loop array ",k);
    k++;
};

// --------------------
//--------------Do while loop array

let score =1;
do {
    console.log(`score is ${score}`);
    score++;
} while (score<=10);



