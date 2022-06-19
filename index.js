const main = document.querySelector('[data-js="main"]');

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => createPokemonList(data));


function createPokemonList(pokedex){
  const pokemons = pokedex.results;
  const pokemonList = document.createElement('ul');
  pokemonList.classList.add('list');
  main.append(pokemonList);
  pokemons.forEach((pokemon) => {
    const item = document.createElement('li');
    item.className = 'list__item';

    const heading = document.createElement('h2');
    heading.innerText = pokemon.name;
    item.append(heading);
    pokemonList.append(item);

    const measuresList = document.createElement('ul');
    item.append(measuresList);

// weiterführende URL in eigener Funktion aufrufen?

    const heightItem = document.createElement('li');
    heightItem.innerText = `URL: ${pokemon.url}`;
    measuresList.append(heightItem);
  })
}
