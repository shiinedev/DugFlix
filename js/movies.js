const api_Key = "fbdf5eb466056940e361a8ac2c9212dd";
const IMG_URL = "https://image.tmdb.org/t/p/w500/";

document.addEventListener("DOMContentLoaded" , async () =>{

    getTrendMovies();
    getRenderMovies();
   
})

//get trended movies
const getTrendMovies = async () =>{

    try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_Key}`);
        const data = await response.json();
        
        setHero(data);
        
    } catch (error) {
        console.log("fetching trending error ",error);
        
    }
}

// set hero of the page 
const setHero = (data) =>{
    
    const heroImg = document.querySelector("#hero-img");
    const heroTitle = document.querySelector("#hero-title");
    const heroDes = document.querySelector("#hero-description");
    const user = document.querySelector("#user");

    const onlineUser = JSON.parse(localStorage.getItem("onlineUser"));
    
    const rondomIndex = Math.floor(Math.random() * data.results.length);

    const poster_Path = `${IMG_URL}${data.results[rondomIndex].poster_path}` ;
   
    heroImg.src = poster_Path;
    heroTitle.textContent = data.results[rondomIndex].title;
    heroDes.textContent = data.results[rondomIndex].overview;
    user.textContent = onlineUser.username;
}

const fetchMovies = async (endPoint) =>{

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${endPoint}?api_key=${api_Key}`);

        const data = await response.json();
         return data.results;
        
    } catch (error) {
        console.log("error from fetching data", error);
        
    }
}

//getRender Movies 

const getRenderMovies = async () =>{
    const nowPlaying = await fetchMovies("now_playing");
    const popular = await fetchMovies("popular");
    const topRated = await fetchMovies("top_rated");
    const upcoming = await fetchMovies("upcoming");
    displayMovies("now-playing",nowPlaying)
    displayMovies("popular",popular)
    displayMovies("top-rated",topRated)
    displayMovies("upcoming",upcoming)
}

//display Movies 
const displayMovies = (movieId, movies) => {
    console.log(movies);
    
    const movieGrid = document.getElementById(movieId);
 
    
    movies.map(movie => {
        movieGrid.innerHTML +=`
        <div class="movie-card">
      <img src="${IMG_URL}${movie.poster_path}" alt="${movie.title}">
      <div class="movie-card-overlay">
        <div class="overlay-buttons">
          <button class="button" onclick="handlePlay(${movie.id})">▶</button>
          <button class="button" >
           +
          </button>
        </div>
      </div>
    </div>
        `
    })

}

const scrollRightSection = (sectionId) =>{
    const movieGrid = document.getElementById(sectionId);

    movieGrid.scrollBy({left:300, behavior:"smooth" } )
}
const scrollLeftSection = (sectionId) =>{
    const movieGrid = document.getElementById(sectionId);

    movieGrid.scrollBy({left: -300, behavior:"smooth" } )
}