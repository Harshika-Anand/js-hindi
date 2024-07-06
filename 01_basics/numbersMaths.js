const score=400

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=123.8966

console.log(otherNumber.toPrecision(3)); //significant digits

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math);
//Math.abs(), Math.round(), Math.ceil(), Math.floor(), Math.min(), Math.max(), Math.random()

console.log((Math.random()*10)+1);
//we add floor too to round up

//formula: Math.floor(Math.random()*(max-min+1)+min);

