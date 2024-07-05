const name="Harshika"
const repoCount=50

//string interpolation

console.log(`Hello im ${name} and my repo count is ${repoCount}`);

const gameName=new String('helo-hi')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));

console.log(gameName.substring(0,4));//helo

console.log(gameName.slice(-5,4));//lo

//.trim() to remove the extra spaces and \n
//.replace() to replace characters
//.includes() to ask if particular character is present in the string
console.log(gameName.split("-"));// gives aaray


