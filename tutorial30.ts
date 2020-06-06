// tutorial30.ts - Sets 
// data structure that contains list of unique value 
let mySet = new Set();
let object1 = {};
let object2 = {};

mySet.add("Anamul");
mySet.add(304);
mySet.add(304); // ignore duplicate value 
mySet.add(object1);
mySet.add(object2);
console.log(mySet.size);

// Create new set
let newSet = new Set([1,2,3,4,4,4]);
console.log(newSet.size);

// chain set 
let chainSet = new Set().add("hello").add("world");
console.log(chainSet.size);

//check existence of a value 
console.log(chainSet.has("world"));
console.log(chainSet.has("Man"));
chainSet.delete("world");
console.log(chainSet.has("world"));





