// fetch("./Data.json").then((msg) => {
//     msg.json().then((msg) => {
//         msg.map((ele) => {
//             console.log(ele.ename);
//             document.getElementById("secID").innerHTML = `
//             <div>
//             <img src=${ele.epic}></img>
//             </div>`;
//         })
//     }).catch((err)=>{
//         err("hi");
//     })
// });

let diveR = document.getElementById("secID");
async function eDetails() {
    let data = await fetch("./Data.json");
    let finalData = await data.json();
    finalData.map((ele) => {
        diveR.innerHTML += `<div> 
        <img src=${ele.epic}></img>
        <h4> Buyer Name : ${ele.ename}</h4>
        <p> Product ID : ${ele.sid}</p>
        </div>`;
    })
}
eDetails();