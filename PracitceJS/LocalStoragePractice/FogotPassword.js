// * ------- generate new password----------------------------------------------
document.getElementById("forgotForm").addEventListener("submit", generaterPassword);
function generaterPassword(e) {
    e.preventDefault();
    // ~ got user entered value
    let userId = document.getElementById("userID").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    if (userId == "" || email == "" || mobile == "") {
        alert("Please fill properly");
    } else if (userId != "" && email != "" && mobile != "") {
        // ~ retrive data through local storage
        let localID = localStorage.getItem(userId);
        let localPass = localStorage.getItem(email);
        let localMobile = localStorage.getItem(mobile);
        if (localID == localPass && localPass == localMobile) {
            //~ ---------- generate password------------
            let newpass = passWordGen(userId, mobile);
            localStorage.setItem(userId, newpass);
            localStorage.setItem(email, newpass);
            localStorage.setItem(mobile, newpass);
            alert("New Passoword is : " + newpass);
            window.open("./LoginUser.html");
        } else {
            alert("Entered Data not match in database ....!!!")
        }
    }
}
// &------------Password Generate-----------------------------------------------
function passWordGen(useNameValue, moNoValue) {
    if (useNameValue.length > 6 && moNoValue.length == 10) {
        let monoLastTree = ("" + moNoValue).substring(7, 11);
        let userNameTree = useNameValue.slice(0, 3);
        while (true) {
            let d = Math.random() * 1000;
            let otp = parseInt(d);
            if ((otp + "").length == 3) {
                return monoLastTree + userNameTree + otp;
            }
            else
                continue;
        }
    }
}
// ^----------- footer section-----------------------------------------------
function registrationForm() {
    window.open("./RegisterUser.html");
}

function loginForm() {
    window.open("./LoginUser.html");
}
// *-------------check length------------------------------------------------
document.getElementById("userID").addEventListener("keyup", function () {
    let userId = document.getElementById("userID");
    let userInID = document.getElementById("userInID");
    userInID.innerHTML = `Length : ${userID.value.length}`;
});
document.getElementById("email").addEventListener("keyup", function () {
    let email = document.getElementById("email");
    let userInEmail = document.getElementById("userInEmail");
    userInEmail.innerHTML = `Length : ${email.value.length}`;
});
document.getElementById("mobile").addEventListener("keyup", function () {
    let mobile = document.getElementById("mobile");
    let userInMobile = document.getElementById("userInMobile");
    userInMobile.innerHTML = `Length : ${mobile.value.length}`;
});
