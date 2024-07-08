//array specific loops

const arr=[1,2,3,4,5]

//forof const iterator of object
for (const val of arr) {
    console.log(val);
}

const greetings="Hello World!"
for(const greet of greetings)
{
    console.log(`Each char is ${greet}`);
}

 //Maps: no duplicates allowed, varna its like array

const map=new Map()
map.set(`IN`,`India`)
map.set(`USA`,`United States of America`)
console.log(map);
//ignores multiple entries

for(const key of map)
{
    console.log(key);
}
for(const [key,value] of map)
    {
        console.log(key,`:-`,value);
    }

const myObject={
    js:`javascript`,
    cpp:`c++`,
    py:`python`
}
//forin, for objects and more
for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);
}

//when you use forin on arrays, we get keys(indices), not values
//maps are not iterable, 
const coding=["js","cpp","python"]
coding.forEach(function (item){// callback so no name
console.log(item);
})

coding.forEach((item)=>{
    console.log(item);
})

const myCoding=[
    {
        lang:"cpp",
        orient:"object oriented"
    },
    {
        lang:"c",
        orient:"procedure oriented"
    },
    {
        lang:"js",
        orient:"prototype based object oriented"
    }
]
myCoding.forEach((item)=>{
    console.log(item.lang);
    console.log(item.orient);
})//array ke object ki property asani se nikal gayi