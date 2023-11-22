let email = prompt("Enter your email id : ");
let mob = parseInt(prompt("Enter your mobile number : "));

if ((mob + "").length < 10) {
    alert("please Enter full mobile number");
}
else {
    let mob1 = mob + "";
    alert(
        "@#$".concat(email
            .trim()
            .toLowerCase()
            .slice(0, 4)
            + mob1
                .substring(6, 11))
    )
}

/* 
1. take email id using prompt
2. tanke mobile number using promt and convert number using parseInt()
3. check to moblie number if mobile number is lesser than 10 digit then return false
4. other wise mobile number == 10 digit then convert string 
5. in alert box concate with "@#$"
6. trim to email id
7. convert email to lowerCase 
8. using slice method get starting 4th charactor
9. after got last digit of mobile number using substring();
10. print new generated password where
11. "@#$" + email first 4 char + mobile no. last 4 digit
*/