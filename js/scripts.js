let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }
  
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
 
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    let pokedexList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokedexList.appendChild(listpokemon);
    button.addEventListener("click", function() {showDetails(pokemon)}
    );
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add (pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  return {
    add:add,
    getAll:getAll,
    addListItem:addListItem,
    showDetails:showDetails,
    loadList:loadList,
    loadDetails: loadDetails
  };
})();

let newPokemonList = pokemonRepository.getAll();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});