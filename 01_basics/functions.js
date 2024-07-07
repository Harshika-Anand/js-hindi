function myName(){
    console.log("Harshika");
}
myName()
//if no argument passed to paraeter wala function, puts undefined
//check if parameter===undefined
//"", undefined are false value, pehle check karlo ki empty toh nai

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,800));
//what if i pass many values? use rest operator ...(spread bhi yehi hai, kaam alag hai, rest mein sab bundle mein pack kar dete hain)

const user={
    username:"harshika",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const arr=[200,400,100,600]
function returnSecondValue(getArray)
{  
    return getArray[1];
}    
console.log(returnSecondValue(arr));

//var can be accessed out of scope, { } ke andar dobara declare karoge toh bhi new value uthaega
//child can access parents members, parents cannot

