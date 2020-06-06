//tutorial13.ts - Rest Operator
// let displayColor = function(){
//     console.log(message);
    
// for(let i in arguments){
//     console.log(arguments[i]);    
// }
// }

// let message = "List of color";
// displayColor(message, "Red");
// displayColor(message,"Red", "Green");
// displayColor(message,"Red", "Green", "Blue");

// 2nd problem
console.log("-----2nd example--------");

let displayColor1 = function(message1: string,...colors: string[]){
    console.log(message1);
    console.log(colors);
    console.log(arguments.length);
           
    for(let i in colors){
        console.log(colors[i]);    
    }
}

let message1 = "List of color";
displayColor1(message1, "Red");
displayColor1(message1,"Red", "Green");
displayColor1(message1,"Red", "Green", "Blue");