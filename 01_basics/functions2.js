/*const user={
    username:"harshika",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}?, welcome to website`);
        console.log(this);//prints the current context
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this);//empty object current context, browser mein karoge toh window milegi, as it is a global object

function chai(){
    let username="harshi"
    console.log(this.username);//this context is only for objects, so returns undefined
}
chai()//loooots of values if it prints this

const chai2=()=>{
    let username="harshi"
    console.log(this.username);//aise nai hota
}
chai2()

const addTwo=(num1,num2)=>{
    return num1+num2
}//can write as implicit return like: (no {} and return keyword)
//const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(3,4))

const add=(num1,num2)=>({username:"harshi"})//() are compulsory here
console.log(add(3,5));

const myArr=[1,2,3,4,5]
//console.log(()=>{})//anonymous function
*/
//Immediately Invoked Function Expression (IIfe)

//()(), first one is definition, the second one will act as a function call
(function tea(){
    console.log("DB connected");
})();//to remove global scope mein  pollution, always put; to ensure context
//this was named IIFE

( (name)=>{
    console.log(`DB connected Two ${name} `);
})(`harshika`)
//this was unnamed IIFE
//For 2 IIFE, ; is important

 
//Js is single threaded

//Js execution context