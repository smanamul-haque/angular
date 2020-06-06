// tutorial38.ts - Iterables and Iterators
let interable38 = [1,2,3,9];

function createIterator(array: string | any[]){
    let count = 0;
    return{
        next: function(){
            return count < array.length ? 
            {value: array[count++], done:false}:
            {value: undefined, done:true};
        }
    }
}

let myIterator = createIterator(interable38);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
