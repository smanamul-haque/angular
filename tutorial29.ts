// tutorial29.ts - Sets & Maps

let myMap = Object.create(null);
myMap.name = "Anamul";
let  val = myMap.name;
console.log(val);

// used mainly for checking the existence of attributes 
let mySet0 = Object.create(null);
// mySet.id = true;
mySet0.id = 0;
if(mySet0.id){
    console.log("ID existis");
    
}

