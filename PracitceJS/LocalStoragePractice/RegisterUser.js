// TODO ----------------- user Name Length validation----------------------
document.getElementById("username").addEventListener("keyup", () => {
    let useNLen = username.value.length;
    let foram = document.getElementById("form");
    document.getElementById("userNameLen").innerHTML = "UserName length is : " + useNLen;
    let sbmt = document.getElementById("submit");
    // console.log(useNLen);
    if (useNLen <= 6) {
        foram.classList.add("warning");
        foram.classList.remove("success");
        sbmt.disabled = true;
    } else {
        foram.classList.add("success");
        foram.classList.remove("warning");
        sbmt.disabled = false;
    }
});
// * ----------------- Mobile Number Length validation----------------------
document.getElementById("mono").addEventListener("keyup", () => {
    let monoLen = mono.value.length;
    let foram = document.getElementById("form");
    document.getElementById("monoLength").innerHTML = "Mobile Number Length :" + monoLen;
    let sbmt = document.getElementById("submit");
    // console.log(monoLen);
    if (monoLen != 10) {
        foram.classList.add("warning");
        foram.classList.remove("success");
        sbmt.disabled = true;
    } else {
        foram.classList.add("success");
        foram.classList.remove("warning");
        sbmt.disabled = false;
    }
});
// ^---------------------Form Submit validation-------------------------------
document.addEventListener("submit", (e) => {
    // e.preventDefault();
    let useNameValue = document.getElementById("username").value;
    let moNoValue = document.getElementById("mono").value;
    let emailVaue = document.getElementById("email").value;

    let existOrNot = checkKey();
    // console.log(existOrNot);
    if (useNameValue.length > 6 && moNoValue.length == 10 && existOrNot == "") {
        let password = passWordGen();
        localStorage.setItem(useNameValue, password);
        localStorage.setItem(moNoValue, password);
        localStorage.setItem(emailVaue, password);
        alert("Registration Successfull... Password : " + password)
        window.open("LoginUser.html")
    } else if (existOrNot == useNameValue || existOrNot == moNoValue || existOrNot == emailVaue) {
        if (existOrNot == useNameValue) {
            alert("UserName already exist");
        }
        else if (existOrNot == moNoValue) {
            alert("Mobile number already exist")
        }
        else {
            alert("Email id already exist")
        }
    }
});
// localStorage.clear();
// &------------Password Generate-----------------------------------------------
function passWordGen() {
    let useNameValue = document.getElementById("username").value;
    let moNoValue = document.getElementById("mono").value;
    // let emailVaue = document.getElementById("email").value;
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
// !----------------------Check key is allready present or not------------------
function checkKey() {
    let useNameValue = document.getElementById("username").value;
    let moNoValue = document.getElementById("mono").value;
    let emailVaue = document.getElementById("email").value;
    let i = 0;
    while (true) {
        let temp = localStorage.key(i);
        if (temp == useNameValue) {
            return useNameValue;
        } else if (temp == ("" + moNoValue)) {
            return moNoValue;
        } else if (temp == emailVaue) {
            return emailVaue;
        } else if (temp == null) {
            return "";
        } else {
            i++;
        }
    }
}
// * ----------- reset form-------------------------------------------
document.addEventListener("reset", () => {
    let foram = document.getElementById("form");
    foram.classList.remove("success");
    foram.classList.remove("warning");
})