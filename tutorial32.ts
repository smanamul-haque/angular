// tutorial32.ts - Map
let myMap32 = new Map();

myMap32.set("fname","Anamul");
myMap32.set("age",38);

console.log(myMap32.get("fname"));
console.log(myMap32.get("age"));

let ob1 = {};
let ob2 = {};

myMap32.set(ob1, 45);
myMap32.set(ob2, 55);

console.log(myMap32.get(ob1));
console.log(myMap32.get(ob2));

// size
console.log(myMap32.size);
console.log(myMap32.has("fname"));
myMap32.delete("fname");
console.log(myMap32.has("fname"));

// clear all elements 
myMap32.clear();
console.log(myMap32.size);