//tutorial21.ts - class - class are not hoisted.
class Teacher{
    greet(){
        console.log("Hi there!!");
        
    }
};


let teacher = new Teacher();
console.log(typeof Teacher);
console.log(teacher.greet === Teacher.prototype.greet);


