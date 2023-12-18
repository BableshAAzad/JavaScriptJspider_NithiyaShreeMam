let emo = document.getElementById("ptag");
let i;
// let s;
let on = 0;
// function smily() {
//     emo.innerHTML += "😁";
// }
function heartSmily() {
    emo.innerHTML += "😍";
}
// ~-------------------------------------
// function setTimeM() {
//     if (!on) {
//         on = 1;
//         s = setTimeout(smily, 300);
//     }
// }
// function clearTimeM() {
//     on = 0;
//     clearTimeout(s);
// }
// ~-------------------------------------
function setInterV() {
    if (!on) {
        on =1;
        i = setInterval(heartSmily, 1000);
    }
}
function crearInterV() {
    on = 0;
    clearInterval(i)
}

// console.log(typeof Promise)