//tutorial5.ts
// Var hoisting and Functional scope 
function greetPerson(name: string){    
    if(name === "Anamul"){
        var greet = "Hello Anamul";
    }else{
        var greet = "Hi there!";
    }
    console.log(greet);     
}

greetPerson("Anamul");
greetPerson("Razib");
