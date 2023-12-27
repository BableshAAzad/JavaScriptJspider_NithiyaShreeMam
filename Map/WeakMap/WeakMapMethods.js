
let obj1 = {ename : "Bablesh"};
let obj2 = {sarnmae : "AAzad"};
let obj3 = {address : "Raipur"};

let wm = new WeakMap();
wm.set(obj1, "a");
wm.set(obj2, "b");
wm.set(obj3, "c");
wm.set({age : 28}, "d")

console.log(wm);
console.log(wm.get(obj5))