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

for (let i=0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
  if(pokemonList[i].height>=5) {
    document.write (" - Wow, that's a big Pokemon!" + "<br>");
  } else {
    document.write ("<br>");
  }
}
