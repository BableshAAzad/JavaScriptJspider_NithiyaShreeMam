// let p = new Promise((resolve, reject)=>{
// });
// console.log(p); //? Promise {<pending>}
// ^---------------------------------------------------------------------
// let p = new Promise((resolve, reject)=>{
//     resolve("The promise is resolved");
// });
// console.log(p); //? Promise {<fulfilled>: 'The promise is resolved'}
// ^---------------------------------------------------------------------
// let p = new Promise((resolve, reject) => {
//     reject("The promise is rejected");
// });
// console.log(p); //? Promise {<rejected>: 'The promise is rejected'}
//! Uncaught (in promise) The promise is rejected
// ^---------------------------------------------------------------------
// let p = new Promise((resolve, reject) => {
//     resolve("The promise is resolved");
//     reject("The promise is rejcted");
// });
// console.log(p); //? Promise {<fulfilled>: 'The promise is resolved'}
// ^---------------------------------------------------------------------
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("The promise is resolved 1");
//         reject("The promise is rejcted 1");
//     }, 3000);
//     setTimeout(() => {
//         resolve("The promise is resolved 2");
//         reject("The promise is rejcted 2");
//     }, 2000);
// });
// console.log(p); //?  Promise {<pending>}
// ^---------------------------------------------------------------------
// ! Instance method
// & then() ==> execute when promise is resolved
// & catch() ==> execute when promise is rejected
// & finally() ==> execute whether promise is resolved or rejected but not pending

// let p = new Promise((resolve, reject) => {
//     let task = confirm("The task is complited?");
//     if (task) {
//         resolve("well done...! I did a good job")
//     } else {
//         reject("Yes, I failed in completing the task");
//     }
// })
// console.log(p);
// p.then((msg) => {
//     console.log(msg);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("The task is proceeded");
// });
//^---------------------------------------------------------------------
// ! Static Methods
// &  all() ==> 
// &  allSettle() ==> 
// &  any() ==> 
// &  race() ==> 
// TODO----------all()----------------
// let p1 = new Promise((res, rej) => {
//     res("The promise is resolved 1");
//     rej("The promise is rejected 1");
// });
// let p2 = new Promise((res, rej) => {
//     res("The promise is resolved 2");
//     rej("The promise is rejected 2");
// });
// let p3 = new Promise((res, rej) => {
//     res("The promise is resolved 3");
//     rej("The promise is rejected 3");
// });
// let p4 = new Promise((res, rej) => {
//     res("The promise is resolved 4");
//     rej("The promise is rejected 4");
// });

// Promise.all([p1, p2, p3, p4]).then((msg) => {
//     console.log(msg);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Promise Proceeded");
// });
// TODO----------allSattelled()----------------
// let p1 = new Promise((res, rej) => {
//     res("The promise is resolved 1");
//     rej("The promise is rejected 1");
// });
// let p2 = new Promise((res, rej) => {
//     res("The promise is resolved 2");
//     rej("The promise is rejected 2");
// });
// let p3 = new Promise((res, rej) => {
//     res("The promise is resolved 3");
//     rej("The promise is rejected 3");
// });
// let p4 = new Promise((res, rej) => {
//     res("The promise is resolved 4");
//     rej("The promise is rejected 4");
// });

// Promise.allSettled([p1, p2, p3, p4]).then((msg) => {
//     console.log(msg);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Promise Proceeded");
// });

// & AllSatteled()
// ? allSatteled() methods waits for all the promises to get setteled(resolve/rejected)
// ? allSatteled() returns the result in the formate of array of objects with status and value property
// ~ status holds the promise state
// ~ value holds the promise result
// ?if any one of the promises is pending, allSatteled() methods does't return of any satteled promises.

// TODO----------any()----------------
// let p1 = new Promise((res, rej) => {
//     res("The promise is resolved 1");
//     rej("The promise is rejected 1");
// });
// let p2 = new Promise((res, rej) => {
//     res("The promise is resolved 2");
//     rej("The promise is rejected 2");
// });
// let p3 = new Promise((res, rej) => {
//     res("The promise is resolved 3");
//     rej("The promise is rejected 3");
// });
// let p4 = new Promise((res, rej) => {
//     res("The promise is resolved 4");
//     rej("The promise is rejected 4");
// });

// Promise.any([p1, p2, p3, p4]).then((msg) => {
//     console.log(msg);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Promise Proceeded");
// });
// & any()
// ? any() methods accepts the first resolved promise
// ? any() methods returns the statement/value of first resolved promise
// ? if all promises are rejected returns ==> AggregateError: "All promises were rejected" and finally execute
// ? if all promises are pending then there is no result


// TODO----------race()----------------
// let p1 = new Promise((res, rej) => {
//     res("The promise is resolved 1");
//     rej("The promise is rejected 1");
// });
// let p2 = new Promise((res, rej) => {
//     res("The promise is resolved 2");
//     rej("The promise is rejected 2");
// });
// let p3 = new Promise((res, rej) => {
//     res("The promise is resolved 3");
//     rej("The promise is rejected 3");
// });
// let p4 = new Promise((res, rej) => {
//     res("The promise is resolved 4");
//     rej("The promise is rejected 4");
// });

// Promise.race([p1, p2, p3, p4]).then((msg) => {
//     console.log(msg);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Promise Proceeded");
// });
// & race()
// ? race() methods accepts the first setteled(resolve/reject) promise
// ? race() methods returns the statement/value of first setteled(resolve/reject) promise
// ? if all promises are pending then there is no result

// ^---------------------------------------------------------------------
// ^---------------------------------------------------------------------
// ^---------------------------------------------------------------------
// ^---------------------------------------------------------------------
































