const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 1 resolved");
      resolve("Result from Promise 1");
    }, 2000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 2 rejected");
      reject(new Error("Error from Promise 2"));
    }, 4000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 3 resolved");
      resolve("Result from Promise 3");
    }, 6000);
  });
  
  Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
      // console.log("All promises settled:", results);
      // const errors = results.filter((result) => result.status === 'rejected');
      // console.log("Aggregate errors:", errors.map((error) => error.reason));
      console.log(results)
    });
  