// &------------------username length-----------------------------
document.getElementById("username").addEventListener("keyup", () => {
    document.getElementById("userNameLen").innerHTML = "Length : " + username.value.length;
})
// ^------------------Login Validation----------------------------
document.addEventListener("submit", (e) => {
    e.preventDefault();
    let userName = document.getElementById("username").value;
    let inputPass = document.getElementById("password").value;
    // console.log(userName, inputPass);
    let passW = localStorage.getItem(userName);
    if (inputPass == passW) {
        alert("Login Successfully Done......");
        window.open("https://bableshaazad.com");
    } else {
        let formBG = document.getElementById("form");
        formBG.classList.add("warning");
        alert("Invalid credential")
    }
});
// ~------------------form color change---------------------------
document.getElementById("username").addEventListener("keydown", () => {
    let foram = document.getElementById("form");
    foram.classList.remove("warning");
})
document.getElementById("password").addEventListener("keydown", () => {
    let foram = document.getElementById("form");
    foram.classList.remove("warning");
})
// TODO------------Show Password----------------------------------
document.getElementById("showpassword").addEventListener("click", () => {
    let inputPass = document.getElementById("password");
    let temp = (inputPass.type === "password") ? "text" : "password";
    inputPass.type = temp;
    // console.log(temp);
});
// * ----------- reset form-------------------------------------------
document.addEventListener("reset", () => {
    let foram = document.getElementById("form");
    foram.classList.remove("warning");
})

// ^----------------------footer option------------------------------
function forgotPassword() {
    window.open("./FogotPassword.html");
}
function registrationForm() {
    window.open("./RegisterUser.html");
}