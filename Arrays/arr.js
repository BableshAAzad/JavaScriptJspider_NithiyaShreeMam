// ^ Arrays Helper methods
// ! push()
// ? add the elements at the end of an array
// ? multiple elemets can be added
// ? effects the origianl array
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// arr.push("hi", "web");
// console.log(arr); // [10, 20, 30, 40, 50, 'hi', 'web']
// let y = arr.push("az");
// console.log(y); // 8
// console.log(arr); // [10, 20, 30, 40, 50, 'hi', 'web', 'az']
// ^------------------------------------------------------------------------------
// ! pop()
// ? removes the elements at the end of the array
// ? single element can be removed at a time
// ? effects the original array
// ? no arguments is passed inside the method
// let arr = [10, 20, 30, 40, 50];
// console.log(arr); // [10, 20,30,40,50]
// let a = arr.pop();
// console.log(a) // 50
// console.log(arr) // [10, 20, 30, 40]
// console.log(arr.pop()); // 40
// console.log(arr); // [10, 20, 30]
// arr.pop();
// console.log(arr); // [10, 20]
// ^------------------------------------------------------------------------------
// ! unshift()
// ? add the elements at the beginig of an array
// ? multple elemets can be added
// ? effects the original array
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// arr.unshift("hi", "web");
// console.log(arr); // ['hi', 'web', 10, 20, 30, 40, 50]
// let z = arr.unshift("js")
// console.log(z); // 8
// console.log(arr); // ['js', 'hi', 'web', 10, 20, 30, 40, 50]
// ^------------------------------------------------------------------------------
// ! shift()
// ? remove the element at the beginging of an array
// ? single element can be removed at a time
// ? effects the original array
// ? no arguments is passed inside the method
// let arr =[10, 20,30,40,50];
// console.log(arr);
// let b =  arr.shift();
// console.log(b); // 10
// console.log(arr); // [20, 30, 40, 50]
// console.log(arr.shift()); // 20
// console.log(arr); // [30, 40, 50]
// arr.shift();
// console.log(arr); // [40, 50]
// ^------------------------------------------------------------------------------
// ! slice(start index, end index)
// ? start index => included, end index => excluded
// ? used the fecth the elements from an array
// ? doesnot effects the original array
// ? accepts the negative value
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// console.log(arr.slice(1, 3)); // [20, 30]
// let x = arr.slice(1);
// console.log(x); // [20, 30, 40, 50]
// console.log(arr.slice(-2)); // [40, 50]
// console.log(arr.slice(-3, -1)); // [30, 40]
// console.log(arr.slice(-2, 1)); // []
// console.log(arr); // [10, 20, 30, 40, 50]
// ^------------------------------------------------------------------------------
// ! splice(start index, number of elements to be removed, elements to be added)
// ? used to remove and added the elements to an array
// ? effects the original array
// ? negative value can be specified for the index position
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// let m = arr.splice(1, 2, "hi");
// console.log(m) // [20, 30]
// console.log(arr); // [10, 'hi', 40, 50]
// arr.splice(1, 2);
// console.log(arr); // [10, 50]
// arr.splice(1);
// console.log(arr); // [10]
// console.log(arr.splice(-2)); // [10]
// console.log(arr); // []
// -----------------------------------
// let brr = [10, 20, 30, 40, 50];
// console.log(brr.splice(-2)); // [40, 50]
// console.log(brr); // [10, 20, 30]
// brr.splice(-2, -2);
// console.log(brr);
// brr.splice(2, 0, "hi", "Hello");
// console.log(brr); // [10, 20, 'hi', 'Hello', 30]
// ^------------------------------------------------------------------------------
// ! join()
// ? join() converts the array to string 
// ? the argument inside join method will be added between each element of an array
// ?doesn't effects the original array
// let arr = [10, 20, 30, 40, 50];
// let e = arr.join(); // console.log(arr.join());
// console.log(e); // 10,20,30,40,50
// console.log(arr.join(""))// 1020304050
// console.log(arr.join(" ")); // 10 20 30 40 50
// console.log(arr.join("+")); // 10+20+30+40+50
// let a = arr.join();
// console.log(typeof a); // string
// console.log(arr); // [10, 20, 30, 40, 50]
// ^------------------------------------------------------------------------------
// ! fill()
// ? fill() every element of an array with the passed argument
// ? if no argument is passed then it is consider an undefined
// ? effects the original array
// let arr = [10, 20, 30, 40, 50];
// arr.fill();
// console.log(arr); // [undefined, undefined, undefined, undefined, undefined]
// let brr  = [10, 20, 30, 40, 50];
// brr.fill(11);
// console.log(brr); // [11, 11, 11, 11, 11]
// let w = [10, 20, 30, 40, 50];
// console.log(w.fill(24, 45)); // [10, 20, 30, 40, 50]
// ^------------------------------------------------------------------------------
// ! includes(search_element, from_index)
// ? includes() search whether the elememt is present or not, if the element present return true
// ? otherwise false where the result in the from of boolean
// ? accepts the search _element and from_index to the search of an element from the given index in forwords
// ? if from_index is not specified by default searchs from 0 index
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.includes()); // false
// let y = arr.includes(30);
// console.log(y); // true
// console.log(arr.includes(30)); // true
// console.log(arr.includes("30")); // false
// console.log(arr.includes(30, 3)); // false
// console.log(arr.includes(30, 2)); // true
// console.log(arr.includes(30, -1)); // false
// ^------------------------------------------------------------------------------
// ! indexOf(search_element, from_index)
// ? indexOf() returns the index value of the element
// ? if the elements is not present retuns -1
// ?  indexOf()  retuns the index of first matched element
// ? if from_index is declared of the indexOf()  search the element from the given
// ? index value in forward direction othewise search the element from the 0 index in frorword direction
// let arr = [10, 20, 30, 40, 50, 30];
// console.log(arr.indexOf()); // -1
// console.log(arr.indexOf(30)); // 2
// console.log(arr.indexOf(60)); // -1
// console.log(arr.indexOf(30, 3)); // 5
// console.log(arr.indexOf(40, 4)); // -1
// console.log(arr.indexOf(30, -2)); // 5
// console.log(arr.indexOf(30, -4)); // 2
// ^------------------------------------------------------------------------------
// ! lastIndexOf(search_element, from_index)
// ? lastIndexOf() returns the index value of the element
// ?  if the elements is not present retuns -1
// ? lastIndexOf() retuns the index of last matched element becase the search is in backword direction
// ? if from_index is declared the lastIndexOf() search the element from the given index value in backward
//?direction otherwise search the element from the backword direction (from the last index to 0 index).
// let arr = [10, 20, 30, 40, 50, 30];
// console.log(arr.lastIndexOf()); // -1
// console.log(arr.lastIndexOf(30)); // 5
// console.log(arr.lastIndexOf("30")); // -1
// console.log(arr.lastIndexOf(80)); // -1
// console.log(arr.lastIndexOf(30, 1)); // -1
// console.log(arr.lastIndexOf(30, -3)); // 2
// console.log(arr.lastIndexOf(30, -1)); // 5
// ^------------------------------------------------------------------------------
// ! flat()
// ?  flat() flattens the nested array
// ? the argument can be passed depending upon the number of nested array or else Infinite can be specified
let arr = [10, 20, 30, 40, 50];
console.log(arr); // [10, 20, 30, 40, 50]
console.log(arr.flat()); // [10, 20, 30, 40, 50]
console.log(arr.flat(1)); // [10, 20, 30, 40, 50]

let brr = [10, 20, [[30]], 40, 50];
console.log(brr); // [10, 20, Array(1), 40, 50]
console.log(brr.flat(2)); // [10, 20, 30, 40, 50]

let crr = [10,20, [[[[[[[[[30]]]]]]]]], 40, 50];
console.log(crr); // [10, 20, Array(1), 40, 50]
console.log(crr.flat(Infinity)); // [10, 20, 30, 40, 50]

// ^------------------------------------------------------------------------------
// ! reverse()
// ?  reverse the element from the array
// ?  effects the original array
// let arr = [10, 20, 30, 40, 50];
// arr.reverse();
// console.log(arr);// [50, 40, 30, 20, 10]