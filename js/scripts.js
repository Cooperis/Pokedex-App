let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Charizard",
      height: 5,
      type: ["Fire", "Flying"]
    },
    {
      name: "Ivysaur",
      height: 3,
      type: ["Poison", "Grass"]
    },
    {
      name: "Pidgeot",
      height: 4,
      type: ["Normal", "Flying"]
    }
  ];

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
    button.addEventListener("click", showDetails);
  }

  return {
    add:add,
    getAll:getAll,
    addListItem:addListItem,
    showDetails:showDetails
  };
})();

let newPokemonList = pokemonRepository.getAll();

newPokemonList.forEach (function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});


