//tutorial5.ts
// let is not hoisting and Functional scope 

// 4th example 
// var m = 9;
// var m =10;

// let n = 7;
// let n = 6;


//--- 3rd example ---
// var a = 1;
// var b = 2;
// if(a === 1){
//     var a = 10;
//     let b = 20;
//     console.log(a); //10
//     console.log(b); //20   
    
// }
// console.log(a); //10
// console.log(b); //2

//--- Second example ---
// function greetPerson6(name: string){  
//     let greet;  
//     if(name === "Anamul"){
//         greet = "Hello Anamul";
//     }else{
//         greet = "Hi there!";
//     }
//     console.log(greet);     //error
// }

// greetPerson6("Anamul");
// greetPerson6("Razib");

//--- First example ---

// function greetPerson(name: string){    
//     if(name === "Anamul"){
//         let greet = "Hello Anamul";
//     }else{
//         let greet = "Hi there!";
//     }
//     console.log(greet);     //error
// }

// greetPerson("Anamul");
// greetPerson("Razib");
