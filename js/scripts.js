let pokemonRepository = (function () {
	let repository = [
		{ name: 'Bulbasaur', height: 0.7 , types: ['grass', 'poison']},
		{ name: 'Butterfree', height: 1.1 , types: ['bug', 'flying']},
		{ name: 'Pidgeot', height: 1.5 , types: ['flying', 'normal']}
	];
	function add(item){
		if (typeof item === "object" && "name" in item && "height" in item && "types" in item) {
			repository.push(item);
		} else alert("not possible");
	}
	function getAll() {
		return repository;
	}
	function addListItem(pokemon) {
		let pokemonList = document.querySelector('.pokemon-list');
		let listpokemon = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.innerHTML = '<img src="img/' + pokemon.name + '.svg" width="270px" />';
		button.classList.add('button-class', pokemon.name);
		button.addEventListener('click', function (showDetails) {
			console.log(pokemon.name);
		});
		listpokemon.appendChild(button);
		pokemonList.appendChild(listpokemon);
	}
	function showDetails(pokemon) {
		console.log();
	}
	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem
	};
})();
pokemonRepository.add({name: 'Ivysaur', height: 1.0, types: ['grass','poison']});
pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon);
});