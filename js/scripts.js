// wrap array in an IIFE
let pokemonRepository = (function () {
	// initialise array of pokémons
	let pokemonList = [
		{ name: 'Bulbasaur', height: 0.7 , types: ['grass', 'poison']},
		{ name: 'Butterfree', height: 1.1 , types: ['bug', 'flying']},
		{ name: 'Pidgeot', height: 1.5 , types: ['flying', 'normal']}
	];
	// function to add anything to pokemonList within the repository / check type of item = object
	function add(item){
		if (typeof item === "object") {
			pokemonList.push(item);
		} else alert("not possible")
	};
	
	function getAll() {
		return pokemonList;
	}
	
	return {
		add: add,
		getAll: getAll
	};
})();
// create html-header
document.write('<div class="page"><div class="header"><h1>Pokédex App</h1><p class="topmargin">written in JavaScript </p></div><div class="main"><h2>Table of Pokémons</h2>');
document.write('<ul>');
// initialise variable to print note 
let note = '';
// call function getAll (-> returning pokemonList) to iterate with forEach() loop over each object in array 
pokemonRepository.getAll().forEach(function(item,index) {
	// condition to check the value of the heights and add note conditional to the value
	if (item.height < 1) {
		note = 'This is a small pokemon';
	} else if (item.height > 1 && item.height < 1.5) {
		note = 'This is an average Pokemon';
	} else {
		note = "This is a large Pokemon<br> >> <strong>WOW</strong> that's big! <<";
	};
	document.write('<li><img src="img/' + item.name + '.svg" width="270px" /><p><strong class="pokemon' + index + '">' + item.name + '</strong> (height: ' + item.height + ')<br>' + note + '<br><br>');
});
document.write('</ul></div></div>');