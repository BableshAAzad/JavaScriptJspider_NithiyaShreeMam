let putDataInSec = document.getElementById("sect");
// console.log(putDataInSec);
async function showsCard() {
    let data = await fetch("./Data.json");  //* fetch the data 
    // console.log(data); // * return response
    // Response {type: 'basic', url: 'http://127.0.0.1:5501/AsyncAndAwait/Data.json', redirected: false, status: 200, ok: true, …}
    let finalData = await data.json(); //* convert response to array of Object
    // console.log(finalData); // (5) [{…}, {…}, {…}, {…}, {…}]
    finalData.map((e) => {
          putDataInSec.innerHTML += `<h2>${e.ename}</h2>`;
        // console.log(e.ename);
    })
}
showsCard();