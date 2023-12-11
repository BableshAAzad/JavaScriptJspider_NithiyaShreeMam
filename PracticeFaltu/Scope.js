"use strict"
// bablesh();

// let bablesh = function () {
//     console.log("Hello");
// }
// console.log(a);
// var a = 200;
// console.log(typeof Object);
// console.log(typeof function(){});
// console.log(typeof this);

// let arr = new Array(20);
// let brr = Array.of(4);
// console.log(arr.length);
// arr[0] = 20;
// console.log(arr);
// console.log(brr.length)

// function demo(a, b) {
//     this.abc = a;
//     this.bfg = b;
// }

// let x = new demo(10, 20);
// x.__proto__.name = "bablesh";
// console.log(x.__proto__.name);

// let demo = Object.create({ name: "Bablesh" });
// console.log(x);
// console.log(demo.__proto__.name); // Bablesh

// console.log(typeof prototype);
// ^----------------------------------------------------------
// function abc(){
//     console.log(name);
//     console.log(age);
//     var name = "bablesh";
//     let age = 20;
// }
// abc();
// ^----------------------------------------------------------
// for(var i = 0; i<3; i++){
//     setTimeout(()=> console.log(i),1);
// }
// for(let i = 0; i<3; i++){
//     setTimeout(()=> console.log(i),1);
// }
// ^----------------------------------------------------------
// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
// };
// console.log(shape.diameter());
// console.log(shape.perimeter());
// console.log(2 * Math.PI * 10);
// ^----------------------------------------------------------


let obj = {
    ename: "Bablesh",
    sno: 1234,
    addr: () => {
        console.log(this.ename);
        console.log(this.name.length);
    },
    mono : function(){
        console.log(this.name);
    }
};
obj.addr();
obj.mono();



// ^----------------------------------------------------------
// ^----------------------------------------------------------
// ^----------------------------------------------------------
// ^----------------------------------------------------------
