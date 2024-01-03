// let num = Number(prompt("Enter year : "));
// if (num % 4 == 0 && num % 100 != 0 || num % 400 == 0)
//     console.log(`${num} is a leap year`);
// else
//     console.log(`${num} in not a leap year`);


// if (num % 5 == 0)
//     console.log(`${num} is divisible by 5`);
// else
//     console.log(`${num} is not divisible by 5`)


// let a = Number(prompt("Enter number a : "));
// let a = 16;
// let temp = Math.sqrt(a);
// let res = Math.ceil(temp);
// console.log(temp);
// console.log(res)
// let b = (temp == res) ? "perfect" : "not a perfect";
// console.log(b);

let temp = "MOM";
let res = temp.split("").reverse().join("");
let result = temp == res ? "palindrome" : " Not plalindrome";
console.log(result)