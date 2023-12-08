let obj = Object.create({
    name: "Bablesh",
    add: "Raipur",
});
Object.getPrototypeOf(obj).name = "AAzad";
console.log(Object.getPrototypeOf(obj).name);