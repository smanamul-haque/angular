// tutorial36.ts - symbol
// ES5 - string, number, boolean, null, undefined 
// ES2015 - Symbol

let s = Symbol("First Symbol");
typeof
console.log(typeof s);
console.log(s.toString());

let s2 = Symbol("Test");
let s3 = Symbol("Test");

console.log(s2 === s3);

// symbol registry 
let s4 = Symbol.for("RegSymbol");
let s5 = Symbol.for("RegSymbol")

console.log(s4 === s5);
console.log(Symbol.keyFor(s4));
console.log(Symbol.keyFor(s5));

// Object 

let fname36 = Symbol("FirstName");

let person36 = {
    [fname36]: "Anamul",
}

console.log(Object.getOwnPropertySymbols(person36));






