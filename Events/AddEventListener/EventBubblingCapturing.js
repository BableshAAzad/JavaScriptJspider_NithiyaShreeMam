let tdiv = document.getElementById("tdiv");
let mdiv = document.getElementById("mdiv");
let idiv = document.getElementById("idiv");

tdiv.addEventListener("click", topDiv);
function topDiv(event) {
    console.log("top Div Clicked")
}

mdiv.addEventListener("click", midDiv);
function midDiv(event) {
    // event.stopPropagation();
    console.log("mid Div Clicked")
}


idiv.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("inn Div Clicked")
});

idiv.addEventListener("click", function (event) {
    // event.stopImmediatePropagation();
    event.stopPropagation();
    console.log("inn Div Clicked 2")
});

// ^-----------------------------------------------
let anchor = document.querySelector("a");
anchor.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Anchor tag Clicked");
})
