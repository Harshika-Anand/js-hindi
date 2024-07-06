//singleton: made from constructor, if from literal, not singleton

//object literals

const mySym=Symbol("key1")
console.log(mySym);

const jsUser={
name:"Harshika", //key and value
"full name":"Harshika Anand",//cant accesss with dot
[mySym]:"myKey1",
age:18,
location:"India",
isLoggedIn:false,
lastLoggedInDays:["Monday","Sunday"]
}
//or Object.create, this is constructor method jismein singleton banta hai

console.log(jsUser.name);
console.log(jsUser["name"]);//was kept as string
console.log(jsUser["full name"]);


console.log((jsUser[mySym]));//gives string but it is a symbol
//to use as symbol in object, add[]

//Object.freeze(jsUser)
jsUser.age=17;
console.log(jsUser.age);//changes not propagated

jsUser.greeting=function(){
    console.log("Hello js user");
}

//console.log(jsUser.greeting());//error, not a function, use after unfreezing
//console.log(jsUser.greeting);//undefined, later gives function returnback anonymous
console.log(jsUser.greeting());

jsUser.greeting2=function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(jsUser.greeting2());

//const tinderUser=new Object()//singleton
const tinderUser={}//non singleton

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser={
    email:"h@gmail.com",
    fullname:{
    firstname:"harshika",
    lastname:"anand"
    }
}
console.log(regularUser.fullname?.firstname);//question mark to check whether property exists

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

//const obj3={obj1,obj2}

//const obj3=Object.assign({},obj1,obj2)//{}to guarentee result, all go in {}, varna sab pehle object mein jaenge
const obj3={...obj1,...obj2}//to spread
console.log(obj3);

const users=[
    {
        id:1,name:"a"
    },
    {
        id:2,name:"b"
    }
]

//users[1].name; aise access karo

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//destructuring of objects

const course={
    coursename:"jas-hindi",
    price:"999",
    courseInstructor:"Brian"
}
const{courseInstructor}=course
console.log(courseInstructor);//ab object ka naam nai likhna padega or courseInstructor:instructor likh ke latter naam se bula lo

//json: {}, receives api values,no name object is treated like json, keys are usually strings too, enclosed in double quotes
//https://api.github.com/users/Harshika-Anand

/* sometimes we get our data in array,like
[
{},
{}
]*/


