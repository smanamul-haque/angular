// tutorial31.ts - WeakSets 

 let mySet31 = new Set();
 let key = {};
 mySet31.add(key);
 console.log(mySet31.size);
 
// Weakset

let myWeakSet = new WeakSet();
let key1 = {};
myWeakSet.add(key1);
console.log(myWeakSet.has(key1));





