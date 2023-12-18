let setDataSection = document.getElementById("sect");

async function cardsMake() {
    let data = await fetch("https://api.github.com/users");
    let finalData = await data.json();
    finalData.map((ele) => {
        setDataSection.innerHTML += `
        <div> 
        <img src=${ele.avatar_url}></img>
        <h2> ${ele.login}</h2>
        <h3> ${ele.id}</h3>
        <a href=${ele.url}> ${ele.url}</a>
        </div>
        `
    })
}
cardsMake();