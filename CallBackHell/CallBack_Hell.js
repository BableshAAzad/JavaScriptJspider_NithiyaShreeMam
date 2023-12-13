// ! Callback Function
function addtion(val, Callback) {
    Callback(val + 10, false);
}
function substraction(val, Callback) {
    Callback(val - 10, false);
}
function multiplication(val, Callback) {
    Callback(val * 10, false);
}
function division(val, Callback) {
    Callback(val / 10, false);
}

addtion(10, (add, err) => {
    if (!err) {
        console.log(add);
        substraction(add, (sub, err) => {
            if (!err) {
                console.log(sub);
                multiplication(sub, (mul, err) => {
                    if (!err) {
                        console.log(mul);
                        division(mul, (div, err) => {
                            console.log(div);
                        })
                    }
                })
            }
        })
    }
})
