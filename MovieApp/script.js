let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// Fetching movie data
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
    } else {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                result.innerHTML = `
                    <div class="info">
                        <img src="${data.Poster}" class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="https://image.shutterstock.com/image-vector/star-icon-vector-260nw-1363866818.jpg">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                ${data.Genre.split(",").map(genre => `<div>${genre}</div>`).join('')}
                            </div>
                        </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>
                `;
            })
            .catch(() => {
                result.innerHTML = `<h3 class="msg">Error occurred while fetching data</h3>`;
            });
    }
};

searchBtn.addEventListener("click", getMovie);
