//if else programs
//switch case programms
//logic operators programsll
const month="march"
switch(month)
{
    case "jan":
        console.log("january");
         break;
    case "march":
        console.log("march");
        break;
    default:
        console.log("idk")
        break;
}
//treat empty string as falsy, bhari hui as truthy

//falsy: false,0,-0,BigInt 0n,"",NaN,null,undefined

//truthy: "0",'false',[],{},function(){}

//if(arr.length===0)(to check for empty array)

//if(Object.keys(meraObj).length===0)(to check for empty object)
 
//Nullish Coalescing Operator (??): null undefined

let val1;
val1=5 ?? 10
console.log(val1);//gives 5 
val1=null??10;
console.log(val1);//gives 10
val1=undefined??15
console.log(val1);
val1=undefined??null
console.log(val1);
val1=null??undefined
console.log(val1);
