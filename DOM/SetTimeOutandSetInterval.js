// function demo() {
//     console.log("demo Function");
// }
// function test() {
//     console.log("test function");
// }
// setTimeout(demo, 1000);
// setInterval(test, 2000);
// ^-------------------------------------
// let B = document.querySelector("p");
// let timeOut;
// function smile() {
//     B.innerHTML += "😁";
// }
// function start() {
//     timeOut = setTimeout(smile, 100);
// }
// function stop() {
//     clearTimeout(timeOut);
// }
// ^-------------------------------------
let B = document.querySelector("p");
let timeOut;
let on = 0;
function smile() {
    B.innerHTML += "😁";
}
function start() {
    if (!on) {
        on = 1;
        timeOut = setInterval(smile, 500);
    }
}
function stop() {
    on = 0;
    clearInterval(timeOut);
}
// ^-------------------------------------

// let x = document.querySelector("p");
// let count = 0;
// let timeOut;
// let timeOn = 0;
// function timer() {
//     x.innerHTML = count;
//     if (count <=29)
//         count++;
//     timeOut = setTimeout(timer, 500);
// }
// function start() {
//     if (!timeOn) {
//         x.style.color = "green";
//         timeOn = 1;
//         timer();
//         count = 0;
//     }
// }
// function stop() {
//     x.style.color = "red";
//     timeOn = 0;
//     clearTimeout(timeOut);
// }