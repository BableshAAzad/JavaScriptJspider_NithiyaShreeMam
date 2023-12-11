
document.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let passwordDDD = document.getElementById("password").value;
    if (username == "" || passwordDDD == "") {
        alert("Please Enter usename and password properly");
    }
    else if (username != "" && passwordDDD != "") {
        localStorage.setItem(username, passwordDDD);
        console.log(username);
        console.log(passwordDDD);
        alert("Registration Done......")
    }
});
// function showpass() {
//     document.getElementById("password").innerHTML = password;
//     console.log(passwordDDD);
// }
// localStorage.clear();
