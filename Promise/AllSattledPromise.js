// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promise 1 resolved after 4000 milliseconds");
//       resolve("Result from Promise 1");
//     }, 4000);
//   });

//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promise 2 resolved after 2000 milliseconds");
//       resolve("Result from Promise 2");
//     }, 2000);
//   });

//   Promise.all([promise2, promise1])
//     .then((results) => {
//       console.log("All promises resolved:", results);
//     })
//     .catch((error) => {
//       console.error("At least one promise rejected:", error);
//     });


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1 resolved after 4000 milliseconds");
    resolve("Result from Promise 1");
  }, 4000);
  setTimeout(() => {
    console.log("Promise 2 resolved after 2000 milliseconds");
    resolve("Result from Promise 2");
  }, 2000);
});

Promise.all([promise1])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });