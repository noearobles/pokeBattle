// const api_key = process.env.PASS_WORD;
const loader = document.querySelector('.loader-wrapper')
const content = document.querySelector('.content')
const main = document.querySelector('.pages')
function init() {
  setTimeout(() => {
    loader.style.display = 'none';
  }, 4000);
  content.style.display = 'none';
}
init();
let pokemons = [];
const poke_card = document.getElementById("pokemonBox");
const url = "https://pokeapi.co/api/v2/pokemon";
const pMon_num = 151;
const search = document.querySelector("#pokemonName");
const input = document.getElementById("form");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function lowerCaseName(string) {
  return string.toLowerCase();
}
function convertHeightAndWeight(num) {
  return num / 10;
}

const pokedex = async () => {
  for (let i = 1; i <= pMon_num; i++) {
    await getAllPMon(i);
  }
  pokemons.forEach((pokemon) => createPMonCard(pokemon));
};

const extractPmon = () => {
  const pMonEls = document.getElementsByClassName("pokemon");
  let possiblePMon = [];
  for (let i = 0; i < pMonEls.length; i++) {
    const pMonEl = pMonEls[i];
    possiblePMon = [...possiblePMon, pMonEl];
  }
  possiblePMon.forEach((possPMon) => possPMon.remove());
};

const getPMon = async (id) => {
  const searchPMons = pokemons.filter((touch) => touch.name === id);
  extractPmon();
  searchPMons.forEach((pmon) => createPMonCard(pmon));
};

const battlePM = async (id1, id2) =>{

}

const getAllPMon = async (id) => {
  const res = await fetch(`${url}/${id}`);
  const pMon = await res.json();
  pokemons = [...pokemons, pMon];
};

pokedex();

function createPMonCard(pokemon) {
  const pMonEl = document.createElement("div");
  pMonEl.classList.add("pokemon");
  const pMonType = pokemon.types.map((el) => el.type.name.toUpperCase()).slice(0, 1);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const height = convertHeightAndWeight(pokemon.height);
  const weight = convertHeightAndWeight(pokemon.weight);
  const pMonStat = pokemon.stats.map((el) => el.stat.name);
  const stats = pMonStat.slice(0, 3);
  const baseValue = pokemon.stats.map((el) => el.base_stat);
  const baseStat = baseValue.slice(0, 3);
  const stat = stats
    .map((stat) => {
      return `<li class="names">${stat}<li>`;
    })
    .join("");
  const base = baseStat
    .map((base) => {
      return `<li class="base">${base}</li>`;
    })
    .join("");
  const pokeInnerHTML = `<div class="img-container">
  <img src="${pokemon.sprites.other["official-artwork"].front_default}" 
  alt = "${name}"/>
  </div>
  <div class="info">
  <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
  <h3 class="name">${name}</h3>
  <small class="type"><span>${pMonType}</span></small>
  </div>
  <div>
  <small class="type"><span>Height: ${height}m</span></small>
  </div>
  <div>
  <small class="type"><span>Weight: ${weight}kg</span></small>
  </div>
  <div class ="stats">
  <h2>Stats</h2>
  <div class="flex">
  <ul>${stat}</ul>
  <ul>${base}</ul>
  <div>
  <button id="battle" placeholder="Battle">
  </div>
  </div>
  </div>
  </div>`;
  pMonEl.innerHTML = pokeInnerHTML;
  poke_card.appendChild(pMonEl);
}


input.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  const seachedPM = searchTerm.toLowerCase().trim();
  if (seachedPM) {
    console.log(seachedPM)
    getPMon(seachedPM);
    prompt()
  } else if (seachedPM === "") {
    pokemons = [];
    extractPmon();
    pokedex();
  }
});

// document.querySelector("#search").addEventListener("click", getPokemon);

// function getPokemon(e) {
//   const name = document.querySelector("#pokemonName").value;
//   const pokemonName = lowerCaseName(name);

//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector(
//         ".pokemonBox"
//       ).innerHTML = `<div><img class="img-container"
//          src="${data.sprites.other["official-artwork"].front_default}" alt="${
//         data.name
//       }">
//         </div><div class="pokemonInfo"><h1 id="name">${capitalizeFirstLetter(
//           data.name
//         )}</h1>
//         <p id="weight">Weight: ${convertHeightAndWeight(data.weight)}kg</p>
//         <p id="height">Height: ${convertHeightAndWeight(
//           data.height
//         )}m</p><p id="type">Type: ${capitalizeFirstLetter(
//         data.types.map((type) => type.type.name).join(", ")
//       )}</p>
//         </div>`;
//     })
//     .catch((err) => {
//       console.log("Pokemon not found", err);
//     });
//   e.preventDefault();
// }
