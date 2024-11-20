const mysymbol = Symbol("key1");
const mysymbolobj = {
    [mysymbol]: "mykey"   // imp make object and print Symbol 
};

console.log(mysymbolobj[mysymbol]);


// -------------------Objet----------------
const user ={
    name: "satyajay",
    age: 23,
    location: "Raipur",
    email: "satyajaydibya9@gmail.com",
    login: false,
    last_login: ["monday","saturday"],
    "full name": "satyajay dibya"
};



console.log(user);
console.log(user.email);
console.log(user["name"]);
console.log(user["full name"])

// Object.freeze(user);  // freeze and no change value in the object

user.email = "satyajay@google.com";  // change value in object
console.log(user)



// ------------------------------------------
user.greeting = function() {
    console.log("Hello Satyajay")
};

console.log(user.greeting());





