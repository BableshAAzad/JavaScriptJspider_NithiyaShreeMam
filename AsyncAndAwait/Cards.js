fetch("./Data.json").then((msg) => {
    msg.json().then((msg) => {
        msg.map((ele) => {
            // console.log(ele.ename);
            document.getElementById("secID").innerHTML = `
            <div>
            <img src=${ele.epic}></img>
            </div>`;
        })
    })
})