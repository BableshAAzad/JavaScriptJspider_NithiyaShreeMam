// ! InnerHTML and InnerText
let a = document.getElementById("demo");
console.log(a);
// & fetch the content
console.log(a.innerHTML);
console.log(a.innerText);
// & change the content
// ! tags functionality is applied on the webgage
a.innerHTML = "<h1>Hello ReactJS</h1>";
console.log(a.innerHTML);
// ! tags functionality does't applied on the webpage
a.innerText = "<h1>Hello ReactJS</h1>";
console.log(a.innerText);
// & adds the content
let b = document.getElementById("test");
console.log(b);
b.innerHTML = "Hi MERN";
b.innerHTML = "Hi WEB";
