window.addEventListener("resize", onResizeVP);
function onResizeVP() {
    let navItems = document.getElementById("navMid");
    window.outerWidth < 1180 ? navItems.style.display = "none" : navItems.style.display = "contents";
}

// console.log(window.outerWidth)