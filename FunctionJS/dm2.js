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
// function abc(demo){
//    demo(10,20);
//     console.log("hi");
// }
// abc(xyz());
// function xyz(){
//     console.log("funtion abc")
// }
// ^------------------------------------------------------------
// ^ Nested function
// function gp() {
//     let gp_p = "50hect";
//     let gp_m = 50000;
//     console.log(`The property of grand parent is : ${gp_p} and ${gp_m}`);
//     function p() {
//         let p_p = "25hect";
//         let p_m = 25000;
//         console.log(`The property of grand parent is : ${p_p} and ${p_m}`);
//         function c() {
//             let c_p = "12hect";
//             let c_m = 12500;
//             console.log(`The property of grand parent is : ${gp_p} and ${gp_m}`);
//             console.log(`The property of child is : ${c_p} and ${c_m}`);
//         } return c;
//     } return p;
// }
// gp()()();
// ^------------------------------------------------------------
// ^ Curried function
// function cur(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(cur(10)(20)(30));
// ^------------------------------------------------------------
// ^ Recursion funtion
// let n = 5;
// function rec(num) {
//     if (num > 0) {
//         console.log("Recursion function")
//         num--;
//         rec(num);
//     }
// }
// rec(n);
// ^------------------------------------------------------------
// ^ Generator funtion
// function* generator(){
//     console.log("Statement 1");
//     yield 1;
//     console.log("Statement 1");
//     yield 100;
//     console.log("Statement 1");
//     yield 200;
// }

// let gen = generator();
// console.log(gen.next())
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// -------or------------
// console.log("------------------or-------------------")
// console.log(generator().next());
// console.log(generator().next());
// console.log(generator().next());
// ^------------------------------------------------------------
function abc(){
    console.log("jd")
}
console.log(abc);
