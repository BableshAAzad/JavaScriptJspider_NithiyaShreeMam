// & getElementsByTagName() : (return type HTML Collection)
// ? HTMLCollection
// let b = document.getElementsByTagName("p");
// console.log(b.item(0));
// console.log(b.item(1));
// console.log(b.length);
// console.log(b.namedItem("para1"));
// & querySelectorAll() :(retrun tyoe NodeList)  of inbuilt methods
let c = document.querySelectorAll("p");
// console.log(c);
// console.log(c.length);

console.log(c.item(1));
console.log(c.item(3));

// c.forEach((ele, ind, arr) => {
//     console.log(ele, ind, arr);
// });

// for(let ele of c.entries()){
//     console.log(ele);
// }

// for(let ele of c.values()){
//     console.log(ele);
// }

// for(let ele of c.keys()){
//     console.log(ele);
// }
