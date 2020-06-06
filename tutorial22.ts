// tutorial22.ts - class body and methods 
// 2 types of methods - constructor method, static method, protype method
class Player{
    pname: string;
    //class body
    constructor(pname: string){
        this.pname = pname;
        console.log(`${this.pname} constructor`);     
    }
    static staticMethod(){
        console.log("static method");
        }
    greetPlayer(){
        console.log("Hello "+ this.pname);
        
    }    
}

let p1 = new Player("Anam"); //constructor 
Player.staticMethod(); // static 
p1.greetPlayer(); // protype 




