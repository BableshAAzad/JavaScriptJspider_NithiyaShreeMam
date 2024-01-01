// ! four digit OTP Generate
function getOTP() {
    while (true) {
        let d = Math.random() * 4000;
        let otp = parseInt(d);
        if ((otp + "").length == 4) {
            return otp;
        }
        else
            continue;
    }
}
function OTP() {
    document.getElementById("demo").innerHTML = getOTP();
}