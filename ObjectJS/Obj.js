// ! 6th JSON 
// ? JSON.stringify() => converts the normal js Object to JSON (stringify Object)
// ? JSON.parse() => converts the JSON (stringify Object) to normal js Object 
// let obj = JSON.parse(JSON.stringify({ ename: "Bheema", eid: 123 }));
// console.log(obj)
let obj = { ename: "Bheema", eid: 123 };
let temp = JSON.stringify(obj);
console.log(temp); // {"ename":"Bheema","eid":123}
console.log(typeof temp); // string

let res = JSON.parse(temp);
console.log(res); // {"ename":"Bheema","eid":123}
console.log(typeof res); // object
// ^-----------------------------------------------------------------------------------
// 