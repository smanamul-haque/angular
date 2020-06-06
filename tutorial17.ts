//tutorial17.ts - Destructuring Array

let employee = ["Anamul", "Haqye", "Female"];

let [fname, lname, gender= "Male"] = employee;

console.log(fname);
console.log(lname);
console.log(gender); //Female




// let employee = ["Anamul", "Haqye"];

// let [fname, lname, gender= "Male"] = employee;

// console.log(fname);
// console.log(lname);
// console.log(gender); //Male


// let employee = ["Anamul", "Haque", "Male"];

// let [fname,...restElements] = employee;

// console.log(fname);
// console.log(restElements);





// let employee = ["Anamul", "Haqye", "Male"];

// let [, , gender] = employee;

// console.log(gender); //Male



// let employee = ["Anamul", "Haqye"];

// let [fname, lname, gender] = employee;

// console.log(fname);
// console.log(lname);
// console.log(gender); //undefined


// let employee = ["Anamul", "Haqye", "Male"];

// let [fname, lname, gender] = employee;

// console.log(fname);
// console.log(lname);
// console.log(gender);













