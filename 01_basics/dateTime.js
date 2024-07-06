let myDate=new Date()
console.log(myDate);
//.getMonth()+1, getDay(), etc

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate=new Date(2023,1,23,5,4)
console.log(myCreatedDate.toLocaleString());

let newDate=new Date("01-14-2023")
console.log(newDate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

//`${newDate.getDay()}`

newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDate);