// window.addEventListener("scroll", function(){
//     console.log("Scrolling.....!!!"); //^ up and down in both situation working
// })

// window.addEventListener("wheel", function (event) {
//     if (event.deltaY < 0) {
//         console.log("Scrolling Up.....!!!"); //^ deltaY ==> for horizontal
//     }else if (event.deltaY > 0) {
//         console.log("Scrolling down.....!!!");
//     }
// })

window.addEventListener("scroll", function(){
    console.log(window.pageYOffset);
    if(window.pageYOffset > 200){
        document.body.style.background = "red";
    }else if(window.pageYOffset < 200){
        // document.body.style.background = "green";
    }
})