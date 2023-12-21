
// &------------------Submit---------------------------
let tbody = document.getElementById("tbody");
let container = "";
document.getElementById("sbmt").addEventListener("click", (e) => {
  e.preventDefault();
  let subjcet = document.getElementById("subjcet");
  let time = document.getElementById("time");
  if (subjcet.value != "" && time.value != "") {
    container += `
      <tr>
        <td>${subjcet.value}</td>
        <td>${time.value}</td>
      </tr>
      `;
    subjcet.value = "";
    time.value = "";
    tbody.innerHTML = container;
    let a = document.getElementById("tableSub");
    a.style = "display:block"
  } else {
    alert("Please fill both field...!!!")
  }

})

// ^-----------------onload-------------
// document.getElementById("tableSub").addEventListener("onLoad", ()=>{
//     let a = document.getElementById("tableSub");
//     a.classList.add("hide");
// })