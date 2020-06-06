//tutorial11.ts

import { setTimeout } from "timers"

// lexical 'this'
var employee = {
    id: 302,
    greet: function(){
        setTimeout(() => {console.log(this.id)},1000);
    }
};

employee.greet();