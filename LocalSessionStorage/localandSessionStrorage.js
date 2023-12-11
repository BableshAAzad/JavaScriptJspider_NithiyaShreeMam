// ! Local Storage
console.log(localStorage);
console.log(typeof localStorage);
// & store
localStorage.setItem("username", "Bablesh");
localStorage.setItem("username", "AAzad");

localStorage.setItem("password", 12345);
// & fetch
console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("password"));
// & remove
// localStorage.removeItem("username");
// & clear
// localStorage.clear();
// console.log(localStorage)
// & key
console.log(localStorage.key(0));
console.log(localStorage.key(1));
// & length
console.log(localStorage.length);

// ^-----------------------------------------------
// ! session Storage
console.log(sessionStorage);
console.log(typeof sessionStorage);
// & store
sessionStorage.setItem("username", "Bablesh");
sessionStorage.setItem("password", 12345);
// & fetch
console.log(sessionStorage.getItem("username"));
console.log(sessionStorage.getItem("password"));
// & remove
// sessionStorage.removeItem("username");
// & clear
// sessionStorage.clear();
// & key
console.log(sessionStorage.key(0));
console.log(sessionStorage.key(1));
// & length
console.log(sessionStorage.length);

