let arr = [];
let i = 0;
function storeData(key, value) {
    arr[i++] = { username: key, password: value };
}

// let y = localStorage.getItem("array");
// console.log(y)

function abc() {
    while (true) {
        let x = Number(prompt("Enter more data then enter 1 otherwise 2 : "));
        if (x == 1) {
            let useName = prompt("Enter your username : ")
            let passWord = prompt("Enter your mobile number : ");
            storeData(useName, passWord);
        } else
            break;
    }
}
let temp = JSON.stringify(arr);
localStorage.setItem("array", temp);
console.log(temp);