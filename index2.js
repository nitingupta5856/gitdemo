var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent="newnew";
items[1].style.fontWeight="bold";
items[1].style.background="yellow";
items[2].style.background="green";

// items.style.fontWeight="bold"; // error
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}
