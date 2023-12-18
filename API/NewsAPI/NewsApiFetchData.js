// ^ Your API key is: f4aa3b9bcab643459a3b9bdf617b024d
// ^ https://newsapi.org/v2/everything?q=tesla&from=2023-11-18&sortBy=publishedAt&apiKey={}

let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-11-18&sortBy=publishedAt&apiKey=f4aa3b9bcab643459a3b9bdf617b024d";
let outerSec = document.getElementById("outerSec");
let imgDiv = document.getElementById("imgDiv");
let titleL = document.getElementById("titleL");
let i = 0;
let contai = "";
fetch(url).then((msg) => {
    msg.json().then((ele) => {
        console.log(ele);
        ele.articles.map((val) => {
            console.log(val);
            if (i < 20) {
                i++;
                let tit = (val.title).slice(0, 90);
                let des = (val.description).slice(0, 150);
                contai += `
                <div id="innerSec">
                <img src=${val.urlToImage} alt="picture"></img>
                 <p>${tit}...</p>
                 <p id="contentN">${des}...</p>
                </div>
                `;
            } else {
                console.log("done......................")
            }
        })
        outerSec.innerHTML = contai;
    })
})