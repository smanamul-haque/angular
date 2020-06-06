// // tutorial39.ts - Iterables and Iterators

// let person39 = {
//     fname: "Anamul",
//     lname: "Haque",
// };

// person39[Symbol.iterator] = function(){
//     let properties = Object.keys(person39);
//     let count = 0;
//     let idDone = false;
//     let next = () => {
//         if (count >= properties.length){
//             idDone = true;
//         }
//         return{
//             done: idDone, value: this[properties[count++]]};
//     }
//     return{next};
// }


// for (let p of person39){
//     console.log(p);   

// }

