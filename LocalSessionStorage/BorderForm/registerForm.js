// ^------------------UserName validation-------------------------------
document.getElementById("username").addEventListener("keyup", (e) => {
    let leng = username.value.length;
    // console.log(leng);
    if (leng <= 6) {
        username.classList.add("warning");
        username.classList.remove("success");
    } else {
        username.classList.remove("warning");
        username.classList.add("success");
    }
});
// ^------------------mobile validation-------------------------------
document.getElementById("mobile").addEventListener("keyup", (e) => {
    if (mobile.value.length <= 6) {
        mobile.classList.add("warning");
        mobile.classList.remove("success");
    } else {
        mobile.classList.remove("warning");
        mobile.classList.add("success");
    }
});
// ^------------------Show mobile-------------------------------------
// document.getElementById("showpass").addEventListener("click", () => {
//     let passType = document.getElementById("mobile");
//     let current = passType.getAttribute("type");
//     let newType = (current === "mobile") ? "text" : "mobile";
//     passType.setAttribute("type", newType);
// });
// ^------------------Submit--------------------------------------------
// let arr = [];
// let i=0;
// function storeData(key, value) {
//     arr[i++] = { username : key, mobile : value };
// }

document.addEventListener("submit", (e) => {
    // e.preventDefault();
    let username = document.getElementById("username").value;
    let mobileDDD = document.getElementById("mobile").value;
    if (username == "") {
        alert("Please fill username")
    } else if (mobileDDD == "") {
        alert("Please fill mobile number")
    } else if (username == "" || mobileDDD == "") {
        alert("Please fill username and mobile number");
    } else if (username.length > 6 && mobileDDD.length > 6) {
        // console.log(username);
        // console.log(mobileDDD);
        let tempUser = username.slice(0, 4);
        let tempPass = "" + mobileDDD.slice(0, 4);
        let passNew = "@#" + tempUser + tempPass;
        alert("Registration Done ==> " + passNew)
        localStorage.setItem("UserName", username);
        localStorage.setItem("mobile", passNew);
        window.open("./LoginForm.html");
    }
});
// ^------------------Reset--------------------------------------------
document.getElementById("res").addEventListener("click", (e) => {
    let username = document.getElementById("username");
    let mobile = document.getElementById("mobile");
    // console.log(username);
    // console.log(mobile);
    username.classList.remove("success");
    username.classList.remove("warning");
    mobile.classList.remove("success");
    mobile.classList.remove("warning");
});



// localStorage.clear();





