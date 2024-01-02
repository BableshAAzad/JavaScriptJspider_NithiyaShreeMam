
let a = generator(); // * Hosting is also possible
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());

function * generator(){
    console.log("statement 1");
    yield 5;
    console.log("Statement 2");
    yield 10;
    console.log("Statement 3");
    yield 15;
    console.log("Statement 4")
    return "End";
}

