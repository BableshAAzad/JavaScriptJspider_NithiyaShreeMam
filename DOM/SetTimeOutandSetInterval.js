let p = document.querySelector("p");
let count = 0;
let timeOut;
let timeOn = 0;
function timer() {
    p.innerHTML = count;
    if (count <=29)
        count++;
    timeOut = setTimeout(timer, 500);
}
function start() {
    if (!timeOn) {
        p.style.color = "green";
        timeOn = 1;
        timer();
        count = 0;
    }
}
function stop() {
    p.style.color = "red";
    timeOn = 0;
    clearTimeout(timeOut);
}