let set = new Set();
set.add(5);
set.add("HTML");
set.add("CSS");
set.add("JS");
set.add(true);

// set.delete(true);
// console.log(set.entries())
// for (let x of set.entries()) {
//     console.log(x)
// }
// set.forEach((ele, ind, set)=>{
//     console.log(ele, ind);
// })
// console.log(set.has("bablesh"))

let s = new Set(["js", 5, false, "css"]);
console.log(s.has("js"));