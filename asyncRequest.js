//const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
// Async is blocking 

async function getRandomPokemonAsync() {
    let ID = Math.floor(Math.random() * 1010) + 1;

    let response = await fetch(API_BASE_URL + ID);
    let data = await response.json();

    let oneLinerData = await fetch(API_BASE_URL + ID).then(response => response.json()).catch(error => console.log(error))
    console.log(data.name);

    let pkmImage = document.getElementById("pokemonImage");
    pkmImage.src = data.sprites.other["official-artwork"].front_default;
    
    console.log("Result of the API request is : " + oneLinerData);
}