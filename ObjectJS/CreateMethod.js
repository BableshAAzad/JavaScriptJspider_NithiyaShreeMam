// let obj = Object.create({
//     name: "Bablesh",
//     add: "Raipur",
// });
// Object.getPrototypeOf(obj).name = "AAzad";
// console.log(Object.getPrototypeOf(obj).name);

let obje = {
    ename: "AAzad",
    age: 17,
    address: "Raipur"
}
for (let i of Object.entries(obje)) {
    console.log(i)
}