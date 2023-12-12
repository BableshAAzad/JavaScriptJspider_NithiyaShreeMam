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
// ^------------------Password validation-------------------------------
document.getElementById("password").addEventListener("keyup", (e) => {
    if (password.value.length <= 6) {
        password.classList.add("warning");
        password.classList.remove("success");
    } else {
        password.classList.remove("warning");
        password.classList.add("success");
    }
});
// ^------------------Show Password-------------------------------------
document.getElementById("showpass").addEventListener("click", () => {
    let passType = document.getElementById("password");
    let current = passType.getAttribute("type");
    let newType = (current === "password") ? "text" : "password";
    passType.setAttribute("type", newType);
});
// ^------------------Submit--------------------------------------------
document.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let passwordDDD = document.getElementById("password").value;
    if (username == "" || passwordDDD == "") {
        alert("Please Enter usename and password morethan 6 charactors");
    }
    else if (username > 6 && passwordDDD > 6) {
        localStorage.setItem("UserName", username);
        localStorage.setItem("PassWord", passwordDDD);
        // console.log(username);
        // console.log(passwordDDD);
        alert("Registration Done......")
    } else {
        alert("Please enater valid details....!!!");
    }
});
// ^------------------Reset--------------------------------------------
document.getElementById("res").addEventListener("click", (e) => {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    // console.log(username);
    // console.log(password);
    username.classList.remove("success");
    username.classList.remove("warning");
    password.classList.remove("success");
    password.classList.remove("warning");
});








