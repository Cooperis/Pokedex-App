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

  return {
    add:add,
    getAll:getAll
  };
})();

let newPokemonList = pokemonRepository.getAll();

newPokemonList.forEach (function(pokemon) {
  document.write(pokemon.name + " (height: " + pokemon.height + ")");
  if(pokemon.height>=5) {
    document.write (" - Wow, that's a big Pokemon!" + "<br>");
  } else {
    document.write ("<br>");
  }
});