// const api_key = process.env.PASS_WORD;
let input = document.querySelector("#pokemonName");
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    document.querySelector("#search").click();
  }
});
document.querySelector("#search").addEventListener("click", getPokemon);
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function lowerCaseName(string) {
  return string.toLowerCase();
}
function convertHeightAndWeight(num) {
  return num / 10;
}
function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(
        ".pokemonBox"
      ).innerHTML = `<div><img class="img-container"
         src="${data.sprites.other["official-artwork"].front_default}" alt="${
        data.name
      }">
        </div><div class="pokemonInfo"><h1 id="name">${capitalizeFirstLetter(
          data.name
        )}</h1>
        <p id="weight">Weight: ${convertHeightAndWeight(data.weight)}kg</p>
        <p id="height">Height: ${convertHeightAndWeight(
          data.height
        )}m</p><p id="type">Type: ${capitalizeFirstLetter(
        data.types.map((type) => type.type.name).join(", ")
      )}</p>
        </div>`;
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });
  e.preventDefault();
}
