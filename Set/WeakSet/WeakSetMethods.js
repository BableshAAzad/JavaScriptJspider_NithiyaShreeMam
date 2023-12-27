let ws = new WeakSet();

let obj1 = {ename : "Bablesh"};
let obj2 = {sarname : "AAzad"};

ws.add(obj1);
ws.add(obj2);

console.log(ws);

// for(let x of ws){
//     console.log(x) //! Weakset is not iterable
// }

if(ws.has(obj1)){
    console.log("Object 1");
}
if(ws.has(obj2)){
    console.log("Object 2");
}
