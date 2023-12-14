// & can not use this key word inside object
let obj = {
    ename : "Bablesh",
    eid : 123,
    addr : function () {
        console.log(this.ename);
    },
    addre : ()=>{
        console.log(this.ename);
    }
}
obj.addr(); // Bablesh
obj.addre(); // undefined
// ^-------------------------------
// & can not invoke before declaration
a(); // Uncaught ReferenceError
let a =()=>{
    console.log("hello");
}
// ~-------------------
b();
function b(){
    console.log("Hello");
}
// ^-------------------------------
// & can not use 'arguments' object
function abc() {
    console.log(arguments.length);
}
abc(1, 2, 3, 6); // 4
// ~-------------------
let dfe = () => {
    console.log(arguments.length); // Uncaught ReferenceError: arguments is not defined
}
dfe(1, 2, 3, 6); // 4
// ~-------------------
let ghi=(...a)=>{
    console.log(a.length);
}
ghi(2,3,4,6); // 4