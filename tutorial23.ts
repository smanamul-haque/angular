// tutorial23.ts - Class Inheritance
class Employee{
    constructor(fname: string){
        console.log(fname +" Employee constructor");
        }
    getID(){
        return 10;
    }    
}

class Clerk extends Employee{
    constructor(cName: string){
        super(cName);
        console.log(cName+ " Clerk constructor");
        
    }
    getID(){
        return super.getID();
    }

}

let c = new Clerk("Fozlul");
console.log(c.getID());


