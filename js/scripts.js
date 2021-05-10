// create array of pokémons
let pokemonList = [
	{ name: 'Bulbasaur', height: 0.7 , types: ['grass', 'poison']},
	{ name: 'Butterfree', height: 1.1 , types: ['bug', 'flying']},
	{ name: 'Pidgeot', height: 1.5 , types: ['flying', 'normal']}
];
// initialise variable to print note 
let note = '';
// for-loop to iterate over each object (i) in array 
for(let i = 0; i < pokemonList.length; i++) {
	// condition to check the value of the heights and add note conditional to the value
	if(pokemonList[i].height < 1) {
		note = 'This is a small pokemon';
	} else if(pokemonList[i].height > 1 && pokemonList[i].height < 1.5) {
		note = 'This is an average Pokemon';
} else {
	note = "This is a large Pokemon -> <strong>WOW</strong> that's big!";
}
	// writes html-code and the response from the array directly into index.html
	document.write('<div><p><strong class="table">' + pokemonList[i].name + '</strong> (height: ' + pokemonList[i].height + ' ) ' + note + '</p></div>');
}
