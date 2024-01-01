let bob = document.querySelectorAll("div");
async function demo() {
    let data = await fetch("demon.json");
    // console.log(data);
    let finalDataa = await data.json();
    // console.log(finalDataa);
    finalDataa.map((e) => {
        bob[0].innerHTML += `${e.ename}
        ${e.midName}
        ${e.lastName}
        `;
    })
}
// demo();
// ^-------try catch-----------------
try {
    let a = "hello";
    // console.log(a);
    // console.log(b)
} catch {
    //    console.log("error hai");
}
// *------------------------------------
let pro = new Promise((res, rej) => {
    // res("resolved......");
    rej("Rejected......");
})

Promise.all([pro]).then((e) => {
    console.log(e);
}).catch((err) => {
    console.log(err);
})