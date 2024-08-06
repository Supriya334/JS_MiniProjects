let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    console.log(finalURL);

    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            // <!-- made by supriya -->
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);

            console.log(data[0].currencies[Object.keys(data[0].currencies)[0]].name);
            console.log(Object.values(data[0].languages).toString().split(",").join(", "));
            
            result.innerHTML = `
                <img src="${data[0].flags.svg}" class="flag-img">
                <h2>${data[0].name.common}</h2>
                <div class="wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
                <div class="wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
                <div class="wrapper">
                    <h4>Currency:</h4>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)[0]].name}</span>
                </div>
                <div class="wrapper">
                    <h4>Languages:</h4>
                    <span>${Object.values(data[0].languages).join(", ")}</span>
                </div>
            `;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            result.innerHTML = `<h3>An error occurred. Please try again.</h3>`;
        });
});
