const coding=["js","python","cpp","java"]

const values=coding.forEach((item)=>{
    console.log(item);
    return item //still undefined as forEach does not return a value
})
console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter((num)=>num>5) //filter bhi callback leta hai, condition bhi deni hoti hai, jo true hoga wahi pass hoga, yaad rakhna implicit same line mein return nai likhna padta
console.log(newNums);

//forEach mei liko if(num>5){newNums.push(num)}
//newNums.map bhi use hota hai

const nums=[5,10,15]
const myTot=nums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},3)

console.log(myTot);