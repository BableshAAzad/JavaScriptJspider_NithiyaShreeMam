// let m = new Map();
// m.set(3, "js");
// m.set(true, "Boolean");
// m.set("Js", "JavaScript");
// m.set(888n, "HTML");
// m.set(null, "NULL");

// for(let x of m){
//     console.log(x);
// }
// m.delete(null);
// console.log(m);
// m.delete("Boolean");
// console.log(m);

// let iterator = m.entries();
// for (let i = 0; i < m.size; i++) {
//     console.log(iterator.next().value);
// }

// console.log(m.entries());
// for(let x of m.entries()){
//     console.log(x)
// }

let map = new Map([[3, "js"], [true, "Boolean"], [null, "NULL"]]);
// console.log(map)
// map.forEach((ele, ind, map) => {
//     console.log(ele, ind);
// })
// console.log(map.get(true))
// console.log(map.has(3));


console.log(map.values());
// let iterator = map.keys();
// for (let i = 0; i < map.size; i++) {
//     console.log(iterator.next().value);
// }
// for(let y of map.keys()){
//     console.log(y);
// }

