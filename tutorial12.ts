//tutorial12.ts - Default Function Parameters

var getValue = function(value = 10, bonus = 5){
    console.log(value + bonus);
    console.log(arguments.length);
    
    
}
getValue(); //15
getValue(20); // 25
getValue(20,30); //50
getValue(undefined,30); //40

