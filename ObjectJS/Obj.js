// ! 6th JSON 
// ? JSON.stringify() => converts the normal js Object to JSON (stringify Object)
// ? JSON.parse() => converts the JSON (stringify Object) to normal js Object 
// let obj = JSON.parse(JSON.stringify({ ename: "Bheema", eid: 123 }));
// console.log(obj)
// let obj = { ename: "Bheema", eid: 123 };
// let temp = JSON.stringify(obj);
// console.log(temp); // {"ename":"Bheema","eid":123}
// console.log(typeof temp); // string

// let res = JSON.parse(temp);
// console.log(res); // {"ename":"Bheema","eid":123}
// console.log(typeof res); // object
// ^-----------------------------------------------------------------------------------
// let products = [
//     {
//         pname: "mobile",
//         pcolor: "black",
//         price: 43000
//     },
//     {
//         pname: "laptop",
//         pcolor: "blue",
//         price: 30000
//     },
//     {
//         pname: "car",
//         pcolor: "black",
//         price: 20000
//     },
//     {
//         pname: "bag",
//         pcolor: "orang",
//         price: 60000
//     },
//     {
//         pname: "tv",
//         pcolor: "yellow",
//         price: 20000
//     },
// ];

// for (let i of products) {
//     if (i.pcolor === "black" && i.price > 30000) {
//         products.price -= products.price * 0.05;
// console.log(i);
//     }
// }
/**
 * {pname: 'mobile', pcolor: 'black', price: 43000}
 * pcolor : "black"
   pname : "mobile"
   price : 40850
 */
// for (let i in products) {
// if (products[i].pcolor == "black" && products[i].price > 30000) {
// console.log(products[i].price);
// products[i].price -= products[i].price * 0.05;
// console.log(products[i].price);
//     }
// }
/**
 * 
{pname: 'mobile', pcolor: 'black', price: 40850}
pcolor : "black"
pname : "mobile"
price : 40850

*/

//^-------------------------------------------------------------------------
// let arr = [10, 20, 30];
// let brr = arr;
// brr[0] = 55;
// console.log(arr);
//^-------------------------------------------------------------------------
// let arr = [1, 2, 3, 4, [11, 12, 13], 5, 6, 7, 8, 9];
// ^ shallow cloning ==> slice
// let sliceArr = arr.slice();
// console.log(sliceArr);
// sliceArr[0] = 9;
// console.log(sliceArr);
// console.log(arr);
// sliceArr[4][1] = 122;
// console.log(sliceArr)
// console.log(arr);
// ~----------------------
// ^ shallow cloning ==> map
// let mapArr = [];
// arr.map((ele, ind) => {
//     mapArr[ind] = ele;
// })
// console.log(mapArr);
// mapArr[0] = 15;
// console.log(arr);
// console.log(mapArr);
// mapArr[4][0] = 15;
// console.log(arr);
// ~----------------------
// ^ shallow cloning ==> spread operator
// let [...spreadArr] = arr;
// console.log(spreadArr);
// spreadArr[0] = 0;
// console.log(spreadArr);
// console.log(arr);
// spreadArr[4][2] = 20;
// console.log(spreadArr);
// console.log(arr);

// ^ shallow cloning ==> rest operator
// let abc = [...arr];
// console.log(abc);
// abc[0] = 0;
// console.log(abc);
// console.log(arr);
// abc[4][2] = 20;
// console.log(abc);
// console.log(arr);

// ^ shallow cloning ==> for in
// let forin = [];
// for(let i in arr){
//    forin[i] = arr[i];
// }
// console.log(forin);
// forin[0] = 0;
// console.log(arr);
// console.log(forin);
// forin[4][2] = 20;
// console.log(arr);
// console.log(forin);
// ^ shallow cloning ==> for of
// let forof = [];
// let x = 0;
// for (let i of arr) {
//     forof[x++] = i;
// }
// console.log(forof);
// forof[0] = 0;
// console.log(arr);
// console.log(forof);
// forof[4][2] = 20;
// console.log(arr);
// console.log(forof);
// ^ deep cloning ==> JSON
// let json = JSON.parse(JSON.stringify(arr));
// console.log(json);
// json[0] = 0;
// console.log(arr);
// console.log(json);
// json[4][2] = 0;
// console.log(arr);
// console.log(json);
// ^ deep cloning ==> structured clone
// let str = structuredClone(arr);
// console.log(str);
// str[0] = 0;
// console.log(arr);
// console.log(str);
// str[4][2] = 20;
// console.log(arr);
// console.log(str);
//^------------------------------------------------------------------
// let mona = {
//     name: "Bablesh",
//     id: 100,
//     state: {
//         city: "Raipur"
//     }
// };
// console.log(mona);
// console.log(mona.state.city);// Raipur
// mona.state.city = "Bilaspur";
// console.log(mona); // Bilaspur
//^------------------------------------------------------------------
// ! Arrays iterator methods
// let brr = [13,45,21,53,23,65];
// for (const i of brr.values()) {
//     console.log(i)
// }
// for (const i of brr.keys()) {
//     console.log(i)
// }
// for (const i of brr.entries()) {
//     console.log(i)
// }
//^------------------------------------------------------------------
// ! 
// let brr = [13, 45, 21, 53, 23, 65];
// let crr = {};
// let y =0;
// for (let x of brr.values()) {
//     crr[y++] = x;
// }
// console.log(crr);
//^------------------------------------------------------------------
// let az = {
//     name: "bablesh",
//     age: 57,
//     salary: 30000,
//     company: "Surya",
// }
// let zrr = [9,3,6,3,7];
// for (let i of Object.keys(az)) {
// console.log(az[i]); // return values
// console.log(i); // return keys
// }
// console.log("--------------------------")
// console.log(az);
//^-------------------------------------------------------------------
// for(let c of Object.entries(az)){
//     console.log(c)
// }
//***************** */
// for(let d in zrr){
//     console.log(zrr[d]) // return the values
// }
//***************** */
// for(let d in zrr){
//     console.log(d) // return the index
// }
//***************** */
// for(let d of zrr){
//     console.log(d) // return the index
// }
//^-------------------------------------------------------------------
// & Ways of creating Object 
//^ 1st way: literal
// let a = {
//     name: "Bablesh",
//     email: "abc@gmail",
//     mono: 847477,
// }
//^ 2st way: using crreate method
// let obj4 = Object.create({
//     name: "Bablesh",
//     email: "abc@gmail",
//     mono: 847477,
// })
// console.log(obj4);
//^ 3st way: using assign method
// let obj4 = Object.assign({
//     name: "Bablesh",
//     email: "abc@gmail",
//     mono: 847477,
// })
// console.log(obj4);
//^ 4st way: using structuredClone
// let obj4 = structuredClone({
//     name: "Bablesh",
//     email: "abc@gmail",
//     mono: 847477,
// })
// console.log(obj4);
//^ 5st way: using constructor
// let obj4 = new Object({
//     name: "Bablesh",
//     email: "abc@gmail",
//     mono: 847477,
// })
// console.log(obj4);
//^ 6st way: using JSON
// let obj4 = JSON.parse(JSON.stringify({
//     name: "Bablesh",
//     email: "abc@gmail",
//     mono: 847477,
// }));
// console.log(obj4);
//^ 7st way: using defineProperty
// let obj = Object.defineProperty({}, "aazad", {
//     value: "Bablesh",
//     value1: "Bhai",
// });
// console.log(obj);
//^ 8st way: using definePropertie
// let obj = Object.defineProperties({}, {
//     aazad: {
//         value: "Bablesh",
//     },
//     mono: {
//         value: 9349489,
//     }
// });
// console.log(obj);
//^ 9st way: using Constructor
let obj = function (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}
//~ Take any type of data to argument
// let demo = new obj(40, 58, 84);
// console.log(domo)
let demo = new obj("Bablesh", 700815, "AAzad@1");
// console.log(demo);
demo.address = "Raipur"; // insert new record
demo.a = "AAzad"; // Update to existing data
delete demo.c; // delete data 
for (let x of Object.values(demo)) {
    console.log(x);
}









