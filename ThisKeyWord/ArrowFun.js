// ! With Arrow function constructor not working
// var Demo = (name, id) => {
//     this.name = name;
//     this.id = id;
// }
function Demo(name, id) {
    this.name = name;
    this.id = id;
}
let d1 = new Demo("Bablesh", 123);
console.log(d1);