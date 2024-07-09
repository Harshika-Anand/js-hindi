//console.log(window.document) se we get access(ya sirf document likhdo)
//Jaise console.dir(document)

document.getElementById('title')
//isse we get the entire element

document.getElementById('title').id
//isse we get id of said element

document.getElementById('title').class
//isse we get class of element, NO WE DO NOT

document.getElementById('title').className
//yes yes

document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')

document.getElementById('title').setAttribute('class','test')
//ALWAYS overrides previous value.

title.style.backgroundColor='green'
//we can adjust padding, border radius and more.

title.textContent //lagane se we get the text content of the element
title.innerHTML //same
title.innerText //same

/*The Difference?
If i put a span element, style it and set its display to none, innerText will not show it, 
textContent pura dikhaega, hidden or not.
innerHTML mein woh sab html values bhi de dega
*/

document.querySelector('h2') //will give first h2
document.querySelector('#title')
document.querySelector('.heading')//likewise for other css selectors

//say i have a ul
const list=document.querySelector('ul')
const first=list.querySelector('li')//will return first list item
first.style.backgroundColor="green"//will change bg color of first element of ul to green


const tempLiList=document.querySelectorAll('li')
//tempLiList: NodeList(3) [li,li,li], not an array, map nai available hai, for each available hai
//iska .style karke editing nai hoga, nodeList hai
tempLiList[0].style.color='green'
tempLiList[0].innerText //pehle ka text return karega

  tempLiList.forEach(function (l){
    l.style.backgroundColor='green'
  })

 Array.from(tempLiList) //array mein conversion

