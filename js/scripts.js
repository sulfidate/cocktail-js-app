// wrap array in an IIFE
let pokemonRepository = (function () {
	// initialise array of pokémons
	let repository = [
		{ name: 'Bulbasaur', height: 0.7 , types: ['grass', 'poison']},
		{ name: 'Butterfree', height: 1.1 , types: ['bug', 'flying']},
		{ name: 'Pidgeot', height: 1.5 , types: ['flying', 'normal']}
	];
	// function to add anything to pokemonList within the repository / check type of item = object
	function add(item){
		if (typeof item === "object" && "name" in item && "height" in item && "types" in item) {
			repository.push(item);
		} else alert("not possible");
	}
	function getAll() {
		return repository;
	}
	// function to create html-tree of pokemon-List with button to add items
	function addListItem(pokemon) {
		let pokemonList = document.querySelector('.pokemon-list');
		let listpokemon = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.innerHTML = '<img src="img/' + pokemon.name + '.svg" width="270px" />';
		button.classList.add('button-class', pokemon.name);
		// add event listener to each newly created button for each Pokémon in the list and call function passing pokemon object when button clicked  
		button.addEventListener('click', function showDetails() {
			console.log(pokemon.name);
		});
		listpokemon.appendChild(button);
		pokemonList.appendChild(listpokemon);
	}
	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem
	};
})();
// add new item to repository
pokemonRepository.add({name: 'Ivysaur', height: 1.0, types: ['grass','poison']});
// forEach loop to iterate over array / repository
pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon);
});