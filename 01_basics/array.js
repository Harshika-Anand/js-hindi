const myArray=[0,1,2,3,4,5,true,"hi"]

console.log(myArray[7]);

const myArr=new Array(1,2,3,4)
myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

//shift se 9 removed from starting
//includes(), indexOf()

const newArr=myArr.join()

console.log(myArr);
console.log(newArr);

//slice,splice
const my1=myArr.slice(1,3)
console.log(my1);
console.log(myArr);

const my2=myArr.splice(1,3)
console.log(my2);
console.log(myArr);
//splice wale got deleted from myArr, original array got manipulated

const marvel=["thor","ironman"]
const dc=["batman","flash"]
//marvel.push(dc);
//or use concatinate, it returns a new array, marvel wont be affected
console.log(marvel);

//do[2][0]to access elements from dc now

const allNew=[...marvel,...dc];
console.log(allNew);
//dc elements treated as individual now, not array

const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const another1=another.flat(Infinity)
console.log(another);
console.log(another1);

console.log(Array.isArray("Harshika"));
console.log(Array.from("Harshika"));// array bana diya
console.log(Array.from({name:"Harshika"}));//ob ka array nai bana paya so empty array de diya

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//array ban gayi