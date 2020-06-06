//tutorial15.ts - Object Literals Part 1

let firstName = "Anamul";
let lastName = "Haque";

// Object Literals
// let person = {
//     firstName : firstName,
//     lastName: lastName,
// }
//ES2015
let person = {
    firstName,
    lastName,
}


console.log(person.firstName);
console.log(person.lastName);

// function createPerson(firstName: string, lastName: string, age: number){
//     let fullName = firstName + " " + lastName;
//     return {
//         firstName,
//         lastName,
//         fullName,
//         isSenior: function(){
//             return age > 65;
//         }};
// }
function createPerson(firstName: string, lastName: string, age: number){
    let fullName = firstName + " " + lastName;
    return {
        firstName,
        lastName,
        fullName,
        isSenior(){
            return age > 65;
            }
        };
}

let p = createPerson("Nusrat","Poonam", 35);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());






