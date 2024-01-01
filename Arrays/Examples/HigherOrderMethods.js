// ^ Array Higher Order Methods
// ? the method which accepts the callback function is called higher order function
// ! map()
// ? The callback function of map() accepts three arguments that is element, index, 
// ?
// ?

// let arr = [10, 20, 30, 40, 50];
// arr.map((ele, index, array) => {
//     console.log(ele, index, array);
// }); // [10, 20, 30, 40, 50] print 5 times to array
// TODO--------------------
// console.log(
//     arr.map((ele) => {
//         return ele+1;
//     })); //  [11, 21, 31, 41, 51]
// ! filter()
// arr.filter((ele, index, array) => {
//     console.log(ele, index, array);
// }); // [10, 20, 30, 40, 50] print 5 times to array
// TODO--------------------
// console.log(
//     arr.filter((ele) => {
//         return ele > 20;
//     })
// TODO-------------------- 
// console.log(
//     arr.map((ele) => {
//         return ele > 20;
//     })
// ); // [false, false, true, true, true]
// ^---------------------------------------------------------------------
// ? Take Array of elements filter the elements which are divisible by 5,
//? then multiply every filtered array elemenets whith 2

// let brr = [10, 16, 19, 25, 36, 27, 35];
// let result = brr.filter((ele) => {
//     if (ele % 5 == 0)
//         return ele; // [10, 25, 35]
// }).map((abc) => {
//     return abc * 2;  // [20, 50, 70]
// });
// console.log(result);
// ^---------------------------------------------------------------------
// ! reduce()
let arb = [10, 20, 30, 40, 50];
let res = arb.reduce((accu, value) => {
    console.log(accu);
    return accu + value;
});
console.log("++++++++++++++")
console.log(res);
// ^---------------------------------------------------------------------

let acc = [10, 20, 30, 40, 50];
let bcc = ['a', 'b', 'c'];
let ccc = [true, false];
console.log(acc.concat(bcc, 94, 100, ccc))
