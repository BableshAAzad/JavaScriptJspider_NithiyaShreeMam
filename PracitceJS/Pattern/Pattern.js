
function damaroo() {
    let n = 7, space = 0, star = n;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= space; j++)
            document.write("&nbsp&nbsp&nbsp");
        for (let j = 1; j <= star; j++)
            document.write("* ");
        if (i <= n / 2) {
            space++;
            star = star - 2;
        } else {
            space--;
            star = star + 2;
        }
        document.writeln("<br>");
    }
}
damaroo();
// ^------------------------------------------------------------
document.writeln("<br><br>");
function butterFly() {
    let n = 7, x = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if ((j <= x) != false || j >= n - x + 1)
                document.write("* ");
            else
                document.write("&nbsp&nbsp&nbsp");
        }
        if (i <= n / 2)
            x++;
        else
            x--;
        document.writeln("<br>");
    }
}
butterFly();
// ^------------------------------------------------------------
document.writeln("<br><br>");
function piramind123() {
    let n = 9;
    for (let i = 1; i <= (n / 2) + 1; i++) {
        for (let j = 1; j <= n - i; j++)
            document.write("&nbsp&nbsp&nbsp&nbsp&nbsp");
        for (let j = i; j >= 1; j--)
            document.write(j + "&nbsp&nbsp&nbsp");
        for (let j = 2; j <= i; j++)
            document.write(j + "&nbsp&nbsp&nbsp");
        document.writeln("<br>");
    }
}
piramind123();
// ^------------------------------------------------------------
document.writeln("<br><br>");
function triangle() {
    let n = 5;
    for (let i = 1; i <= n; i++) {
        let k = i;
        for (let j = 1; j <= i; j++) {
            document.write(k + "&nbsp&nbsp&nbsp");
            k = k + n - j;
        }
        document.writeln("<br>");
    }
}
triangle();
// ^------------------------------------------------------------
document.writeln("<br><br>");
function trangleDown() {
    let n = 5, b = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++)
        document.write("&nbsp&nbsp&nbsp&nbsp&nbsp");
        for (let j = b; j >= 1; j--) {
            document.write(j + "&nbsp&nbsp&nbsp");
        }
        b++;
        document.writeln("<br>");
    }
}
trangleDown();