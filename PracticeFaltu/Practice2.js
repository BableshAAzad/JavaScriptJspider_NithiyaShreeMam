// let bab = "Bablesh";
// let arr = [...bab];
// arr.sirname = "AAzad";
// let cr = JSON.parse(JSON.stringify(arr));
// console.log(cr);
// ^-----------------------------------------
window.add = "Chhattisgarh";
let name = "Durgesh";
let obj = {
    name: "Bablesh",
    mono: 7898300815,
    email: "aazadBablesh@gmail.com",
    add: "Raipur",
    details: {
        age: 30,
        color: "brown",
    },
    fun: function () {
        console.log(this.details.age);
    }
};
// obj.fun();
let arr = [obj];
// for(let i of arr){
//     console.log(i.name);
// }
console.log(arr[0].name);

// ^-----------------------------------------
// let rea = Object.assign({}, obj);
// obj.email = "aazad@mail.com";
// obj.details.age = 21;
// console.log(rea.details.age);
// console.log(rea.details.age);
// console.log(rea.email);
// console.log(obj.email);
// ^-----------------------------------------
// let arr = [48, 63, 2, 53, 6, 2, 11];
// &------------------
// let { ...obj } = arr;
// console.log(obj);
// console.log(obj["0"]);
// &------------------
// let obj = { ...arr };
// console.log(obj);
// console.log(obj["0"]);
// &------------------
// ^-----------------------------------------
// console.log(Boolean("on"));
// ^-----------------------------------------
// let d = new Date(2023, 11, 9, 5, 6, 7, 4, 4, 3, 53, 4);
// console.log(d);
// ^-----------------------------------------
// console.log(Math.ceil(5.1));
// console.log(Math.trunc(-5.7));