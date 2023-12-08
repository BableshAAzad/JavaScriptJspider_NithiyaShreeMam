function* demo() {
    console.log("Statement 1");
    yield 1;
    console.log("Statement 2");
    yield 2;
    console.log("Statement 3");
    return "Hello";
};
let a = demo();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());





