let putData = document.getElementById("tbodyData");
let temp = "";
async function demo(){
    let data = await fetch("AsynAwaitTable.json");
    let finalData = await data.json();
    // console.log(finalData);
    finalData.map((ele)=>{
        console.log(ele)
        temp += `
           <tr>
              <td>${ele.bid}</td>
              <td>${ele.bname}</td>
              <td>${ele.bage}</td>
              <td>${ele.address}</td>
              <td><img src=${ele.bimg}></img></td>
           </tr>
        `;
    })
    putData.innerHTML = temp;
}
demo();