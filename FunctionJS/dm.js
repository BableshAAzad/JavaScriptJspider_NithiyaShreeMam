// function abc() {
//     console.log("Hello abc fuction");
// }

// def = () => {
//     console.log("Hello def function")
// }
// abc(def(), def());
//!--------------------------------------------
function HOF(a, b, callback){
    console.log("This is HOF function : "+(a+b));
    return callback();
}

 HOF(10, 20, function(){
    console.log("This is callback function")
});

// console.log(a);