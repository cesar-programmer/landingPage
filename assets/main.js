/* eslint-disable prefer-const */
/* eslint-disable no-console */
const API = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&sortBy=ranking&sortOrder=asc';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '30e295e8cdmsh78dced76fff328bp141b4djsndfac3d77b95f',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
  },
};

async function fetchAnimes(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  return data;
}

(async () => { // esta es una funcion anonima auto ejecutable se ejecuta eela sola
  try {
    const animes = await fetchAnimes(API);
    let view = `
    ${animes.data.map((anime) => `
    <div
    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
    <img src="${anime.image}" alt="${anime.image}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
      <span aria-hidden="true" class="absolute inset-0"></span>
      title ${anime.title}
      <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
      <span aria-hidden="true" class="absolute inset-0"></span>
      Ranking ${anime.ranking}
      <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
      <span aria-hidden="true" class="absolute inset-0"></span>
      Episodes ${anime.episodes}
      </h3>
      </div>
    </div>
  </div>
    `).slice(0, 20).join('')}
    `;
    content.innerHTML = view;
  } catch (err) {
    console.error(err);
  }
})();
