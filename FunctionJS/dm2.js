// let abc = () => {
//     document.writeln("bablesh");
// }
// abc();
// document.writeln("<br>")
// !-----------------------------------
// let b = () => document.writeln(10);
// b();
// !-----------------------------------
// const c = ()=> {return 10};
// document.writeln("<br>")
// document.writeln(c());
// document.writeln("<br>")
// &-----------------------------------

// function sum(a, b, task) {
//     console.log(task(a, b));
// }
// sum(10, 20, (x, y) => { return x + y });

// function math(c, d, opt) {
//     return opt(c, d);
// };

// math(10, 20, function (a1, b1) {
//     console.log(`The sum of ${a1} and ${b1} is : ${a1+b1}`);
//     console.log(`The multiplication of ${a1} and ${b1} is : ${a1*b1}`);
// });

// ^ IIFE
// (()=>{console.log("Immediate invoke function expression")})();
// ^------------------------------------------------------------
function abc(demo){
   demo(10,20);
    console.log("hi");
}
abc(xyz());
function xyz(){
    console.log("funtion abc")
}