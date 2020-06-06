//tutorial18.ts - Destructuring objects

// alias 
let objEmployee = {
    fname1: "Anamul",
    lname1: "Haque",
    gender1: "Male"
};

let {fname1: f, lname1: l, gender1: g} = objEmployee;

console.log(f);
console.log(l);
console.log(g);


//---------- General -----------
// let objEmployee = {
//     fname1: "Anamul",
//     lname1: "Haque",
//     gender1: "Male"
// };

// let {fname1, lname1, gender1} = objEmployee;

// console.log(fname1);
// console.log(lname1);
// console.log(gender1); 











