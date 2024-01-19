async function getMovieName() {
    let movie = document.getElementById("movie");
    console.log(movie.value)

    // let fetApi = await fetch(`http://www.omdbapi.com/?apikey=1f3af220&t=${movie.value}`);
    let fetApi = await fetch(`http://www.omdbapi.com/?s=${movie.value}&apikey=1f3af220`);
    fetApi = await fetApi.json();
    console.log(fetApi)


    let divtag = document.getElementById("movieData");

    fetApi.Search.map((val) => {
        // console.log(val.Poster)
        divtag.innerHTML += `
    <h1>Movie Name : ${val.Title}</h1>
    <img src=${val.Poster === 'N/A' ? 'https://bableshaazad.com/static/media/bob.a2ca1510718f08b5313d.jpg' : val.Poster} 
       alt="movivPic" width="200px" height="200px" />
    `
    })


}