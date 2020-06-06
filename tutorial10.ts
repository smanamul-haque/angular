//tutorial10.ts
// Arrow Functions
var getRegValue = function() {
    return 10;
}

console.log(getRegValue());

const getArrowValue = () => {
    return 15;    
}

console.log(getArrowValue());


const getArrowValue1 = (m: number) =>  5*m;    

console.log(getArrowValue1(5));


const getArrowValue2 = (m: number, bonus: number) =>  5*m + bonus;    

console.log(getArrowValue2(5,25));
console.log(typeof getArrowValue2);


// var getRegValue = function() {
//     return 10;
// }

// console.log(getRegValue());



