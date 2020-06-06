//tutorial14.ts - Spread Operator - split an array
let displayColor2 = function(message1: string,...colors: string[]){
    console.log(message1);
    console.log(colors);
    console.log(arguments.length);
           
    for(let i in colors){
        console.log(colors[i]);    
    }
}
let message2 = "List of Colors"

let colorArray = ['Orange', 'Yellow', 'Indigo'];
displayColor2(message2, ...colorArray); // spread call are use during function call
