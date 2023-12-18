let putData = document.getElementById("secto");
// ^--------------- async and await -----------------------------
let temp = "";
async function demo() {
    let data = await fetch("https://dummyjson.com/products");
    let finalData = await data.json();
    console.log(finalData.products);
    finalData.products.map((val) => {
        temp += `
        <tr>
            <td>${val.id}</td>
            <td><img src=${val.thumbnail}></img></td>
            <td>${val.title}</td>
            <td>${val.price}</td>
            <td>${val.discountPercentage}</td>
            <td>${val.rating}</td>
            <td>${val.description}</td>
            <td>${val.category}</td>
            <td>${val.stock}</td>
            <td>${val.brand}</td>
        </tr>
        `;
        console.log(val);
    })
    putData.innerHTML = temp;
}
//! demo();

// ^--------------- using then and catch -----------------------------
fetch("https://dummyjson.com/products").then((msg) => {
    msg.json().then((ele) => {
        ele.products.map((val) => {
            console.log(val);
            temp += `
        <tr>
            <td>${val.id}</td>
            <td><img src=${val.thumbnail}></img></td>
            <td>${val.title}</td>
            <td>${val.price}</td>
            <td>${val.discountPercentage}</td>
            <td>${val.rating}</td>
            <td>${val.description}</td>
            <td>${val.category}</td>
            <td>${val.stock}</td>
            <td>${val.brand}</td>
        </tr>
        `;
        })
    putData.innerHTML = temp;
    })
})