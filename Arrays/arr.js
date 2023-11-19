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

