// module2.ts 
import {fname} from './module1';
import {lname, age} from './module1';
import {dept as d, semester as s} from './module0';


console.log(fname);
console.log(lname);
console.log(age);

console.log(d);
console.log(s);

// tutorial27.ts
// import university from './tutorial27'
import {default as university} from './tutorial27'
console.log(university);

// tutorial28.ts
import {greeting, GreetMessage} from './tutorial28'
greeting("Anam");

let gm = new GreetMessage();
gm.greeting();


