// calling an API in javascript using the fetch method
// fetch is asynchronous

getMovies();

async function getMovies() {
    const url = "https://raw.githubusercontent.com/jameswarnerbyui/static-apis/refs/heads/main/movies.json";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Unable to load movies (status ${response.status})`);
        }

        const movies = await response.json();
        displayMovies(movies);
    } catch (error) {
        console.error(error);
    }
}


function displayMovies(movies) {
    const body = document.querySelector("body");
    const movieList = Array.isArray(movies)
        ? movies
        : Array.isArray(movies?.movies)
            ? movies.movies
            : Array.isArray(movies?.results)
                ? movies.results
                : Array.isArray(movies?.data)
                    ? movies.data
                    : movies && typeof movies === "object"
                        ? Object.values(movies).filter((movie) => movie && typeof movie === "object" && "title" in movie)
                        : [];

    if (!movieList.length) {
        console.error("The movie response did not contain a list of movies.", movies);
        return;
    }

    movieList.forEach((movie) => {
        body.innerHTML +=
        `<div>
        <h1>${movie.title}</h1>
        <img src="${movie.imgSrc}" alt="${movie.imgAlt}" />
        </div>`;
    });
}

