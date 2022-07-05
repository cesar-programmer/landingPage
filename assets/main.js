/* eslint-disable prefer-const */
/* eslint-disable no-console */
const API = 'https://poke-info-api.p.rapidapi.com/pokemons';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
  },
};

async function fetchPokemons(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  return data;
}

(async () => { // esta es una funcion anonima auto ejecutable se ejecuta eela sola
  try {
    const pokemons = await fetchPokemons(API);
    let view = `
    ${pokemons.map((pokemon) => `
    <div
    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
    <img src="${pokemon.iconImg}" alt="${pokemon.iconImg}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
      <span aria-hidden="true" class="absolute inset-0"></span>
      ${pokemon.name}
      <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
      <span aria-hidden="true" class="absolute inset-0"></span>
      ${pokemon.types}
      </h3>
    </div>
  </div>
    `).slice(0, 20).join('')}
    `;
    content.innerHTML = view;
  } catch (err) {
    console.error(err);
  }
})();
