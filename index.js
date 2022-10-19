// console.log(first);
// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='hello';

// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
// console.log(document.images);

// console.log(document.getElementById('header-title'));
var headertitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(headertitle);

// headertitle.textContent='hello';
// headertitle.innerText='goodbye';
console.log(headertitle.textContent);
console.log(headertitle.innerText);
headertitle.innerHTML='<h1>hello</h1>';
// headertitle.style.borderBottom='solid 3px black';
header.style.borderBottom='solid 3px black'

var title=document.querySelector('.title');
title.style.color = 'green';
title.style.fontWeight='bold';
console.log(title);

