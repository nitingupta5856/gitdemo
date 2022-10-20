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

var li=document.getElementsByTagName('li');
console.log(li);
li[1].textContent="newnew";
li[1].style.fontWeight="bold";
li[1].style.background="yellow";
li[2].style.background="green";
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight="bold";
}
