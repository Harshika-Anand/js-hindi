//fetch('https://something.com').then().catch().finally()
//promise khud mein object hai representing eventual completion
const promiseOne=new Promise(function(resolve, reject){
    //Do an async task
    //do calls, cryptography
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() //to connect resolve and then
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})//directly related to resolve



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})



const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"example@.chai.com"})
    },1000)
})
promisethree.then(function(user){
console.log(user);
})//we successfully get the resolve wala parameter



const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = true;
       if(!error)
       {
        resolve({username:"harshika",password:"pw1"})
       }
       else//rejectio ki baat hogi
       {
        reject('Something went wrong')
       }
    },2000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("Finally")) //jo value upar se return hui, woh idhar aayi. This is chaining



const promiseFive=new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error)
        {
         resolve({username:"javascript",password:"pw1"})
        }
        else//rejectio ki baat hogi
        {
         reject('Error: Something went wrong')
        }
     },1000)
})
//different approach of async and await
async function consumePromiseFive(){
    try{
        const response=await promiseFive
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()//use try and catch to gracefully handle an error



async function getAllusers(){
    try{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data);}
    catch(error)
    {
        console.log(`E: ${error}`);
    }
}
getAllusers()


fetch('ttps://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))// fetch returns a promise


