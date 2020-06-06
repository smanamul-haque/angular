// tutorial37.ts - Symbol iterator
// Builtin symbol - well known symbol
// for--of loop --> iterator method -- symbol.iterator

let str = "hello";
let arr = [1,2,3,4];
let num37 = 5;
let obj37 = {name: "Poonam"};

console.log("For String - "+ typeof str[Symbol.iterator]);
console.log("For String - "+ typeof arr[Symbol.iterator]);
// console.log("For String - "+ typeof num37[Symbol.iterator]);
// console.log("For String - "+ typeof obj37[Symbol.iterator]);

