// tutorial28.ts - Exporting Functions and Classes

export function greeting(person: string){
    console.log("Hello "+ person);
}

export class GreetMessage{
    constructor(){
        console.log("Constractor");
        
    }
    greeting(){
        console.log("Greet Function");
        
    }
}