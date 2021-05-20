// wrap array in an IIFE
let pokemonRepository = (function () {
	// initialise empty array to push pokémon items into
	let pokemonList = [];
	// search input
	let searchInput = document.querySelector("#filter_pokemons");
	// API Url to fetch data from
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; 
	// function to add anything to pokemonList within the repository / check type of item = object
	function add(pokemon){
		// Validation of item
		if (
			typeof pokemon === 'object') {
			pokemonList.push(pokemon);
		}
		else alert("not possible");
	}
	// function to return list
	function getAll() {
		return pokemonList;
	}
	
	// function to create html-tree of pokemon-List with button to add items
	function addListItem(pokemon) {
		let pokemonList = document.querySelector('.pokemon-list');
		let listpokemon = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add('button-class');
		listpokemon.appendChild(button);
		pokemonList.appendChild(listpokemon);
		
		// add event listener to each newly created button for each Pokémon in the list and call function passing pokemon object when button clicked 
		button.addEventListener('click', function() {
					showDetails(pokemon);
		});
	}
	
	// Add loadList() function as a return key 
	function loadList() {
		return fetch(apiUrl).then(function (response) {
			return response.json();
		}).then(function (json) {
			json.results.forEach(function (item) {
				let pokemon = {
					name: item.name,
					detailsUrl: item.url
				};
				add(pokemon);
			});
		}).catch(function (e) {
			console.error(e);
		})
	}
	
	// loadDetails function GET pokemon (item) details from object on URL
	function loadDetails(pokemon) {
		let url = pokemon.detailsUrl;
		return fetch(url).then(function (response) {
			return response.json();
		}).then(function (details) {
			// add details to item pokemon
			pokemon.imageUrl = details.sprites.front_default;
			pokemon.height = details.height;
			pokemon.types = details.types;
		}).catch(function (e) {
			console.error(e);
		});
	}
	
	// function showDetails with then to return JSON response
	function showDetails(pokemon) {
		loadDetails(pokemon).then(function () {
			console.log(pokemon);
		});
	}

	//add event listener to search bar
	 searchInput.addEventListener('input', function(){
			let listPokemon = document.querySelectorAll('li');
			let value = searchInput.value.toUpperCase();
	
			listPokemon.forEach(function(pokemon){
					if(pokemon.innerText.toUpperCase().indexOf(value) > -1){
							pokemon.style.display = '';
					}else{
							pokemon.style.display = 'none';
					}
			})
	});

	// return all functions
	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails
	};

})();

// Load data from API
pokemonRepository.loadList().then(function() {
	// forEach loop to iterate over array / repository
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon);
	})
});