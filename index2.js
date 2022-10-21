// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent="newnew";
// items[1].style.fontWeight="bold";
// items[1].style.background="yellow";
// items[2].style.background="green";

// items.style.fontWeight="bold"; // error
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold";
// }

// get Element by tag name

// var li=document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent="newnew";
// li[1].style.fontWeight="bold";
// li[1].style.background="yellow";
// li[2].style.background="green";
// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight="bold";
// }

// query selector
// var header =document.querySelector('#main-header');
// header.style.borderBottom ='solid 4px black';
// var input=document.querySelector('input');
// input.value='hello';
// var submit=document.querySelector('input[type="submit"]');
// submit.value='send';
// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color ='blue';
// var secnd = document.querySelector('.list-group-item:nth-child(2)');
// secnd.style.color ='green';
// var third = document.querySelector('.list-group-item:nth-child(3)');
// third.style.visibility  ='hidden';

// query selector all
// var titles =document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='hello';
// var even = document.querySelector('li:nth-child(2)')
// console.log(even);
//  even.style.color='green';


// var odd = document.querySelectorAll('li:nth-child(odd)')

// for(var i=0;i<odd.length;i++){
//     odd[i].style.background='green';
// }



// querySelector() methodcan only be used to access a single element while querySelectorAll() method can be used to access all elements which match with a specified CSS selector
// parentNode
// var itemlist =document.querySelector('#items');
// console.log(itemlist.parentNode);

// itemlist.parentNode.style.background="blue";
// console.log(itemlist.parentNode.parentNode);
// parentElement
var itemlist =document.querySelector('#items');
// console.log(itemlist.parentElement);

// itemlist.parentElement.style.background="blue";
// console.log(itemlist.parentElement.parentElement.parentElement);

// ChildNode
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.background="yellow";

// first child
// console.log(itemlist.firstChild);
// first element child
// console.log(itemlist.firstElementChild);

// itemlist.firstElementChild.textContent='hello';
// last child
// console.log(itemlist.lastChild);
// last element child
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='hello';
// next sibling
// console.log(itemlist.nextSibling);
// next element sibling
// console.log(itemlist.nextElementSibling);
// previous sibling
// console.log(itemlist.previousSibling);
// previous element sibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='green';
// create element
var newDiv=document.createElement('div');
// console.log(newDiv);
// add class
newDiv.className="updated";
// console.log(newDiv);
// add id

newDiv.id="updatedjj";
// console.log(newDiv);
// add atribute
newDiv.setAttribute('title', 'Hello Div');
console.log(newDiv);
// CREATE Text node
var newtextdiv= document.createTextNode('hello world');
// add text node
newDiv.appendChild(newtextdiv);
console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
newDiv.style.fontSize='30px';

var parent =document.querySelector('.list-group');
console.log(parent.innerHTML);
// parent.innerHTML
parent.innerHTML='<li>Hello world'+ parent.innerHTML;