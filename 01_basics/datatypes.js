//primitive and reference data types
//primitive: Stack: call by value String,Number,null,Boolean,undefined,Symbol,BigInt
//reference: Heap: call by reference array,objects,functions
const id=Symbol('123')
const id2=Symbol('123')
console.log(id);
console.log(id2);
console.log(id==id2);
console.log(id===id2);

//for BigInt, add n to the end of the number

const heroes=["batman","superman"];

let myObj={
    name:"harshika",
    age:19,
}

const myFunction=function(){
    console.log("Hello World");
} 

