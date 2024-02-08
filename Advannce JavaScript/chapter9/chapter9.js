"use strict"

// Practice exercise 9.2

// console.log(window.location.protocol);
// console.log(window.location.href);

// console.dir(document);

const output = document.querySelector('.output');
output.textContent = "Hello World";
output.classList.add("red");
output.id = "tester";
output.style.backgroundColor = "red";
console.log(document.URL);
output.textContent = document.URL;