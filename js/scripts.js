// create html-header
document.write('<div class="page"><div class="header"><h1>Pokédex App</h1><p class="topmargin">written in JavaScript </p></div><div class="main"><h2>Table of Pokémons</h2>');
document.write('<ul>')
// initialise array of pokémons
let pokemonList = [
	{ name: 'Bulbasaur', height: 0.7 , types: ['grass', 'poison']},
	{ name: 'Butterfree', height: 1.1 , types: ['bug', 'flying']},
	{ name: 'Pidgeot', height: 1.5 , types: ['flying', 'normal']}
];
// initialise variable to print note 
let note = '';
// for-loop to iterate over each object (i) in array 
for (let i = 0; i < pokemonList.length; i++) {
	// condition to check the value of the heights and add note conditional to the value
	if (pokemonList[i].height < 1) {
		note = 'This is a small pokemon';
	} else if (pokemonList[i].height > 1 && pokemonList[i].height < 1.5) {
		note = 'This is an average Pokemon';
} else {
	note = "This is a large Pokemon<br> >> <strong>WOW</strong> that's big! <<";
}
// Output from loop write in html 
document.write('<li><img src="img/' + pokemonList[i].name + '.svg" width="270px" /><p><strong class="pokemon' + [i] + '">' + pokemonList[i].name + '</strong> (height: ' + pokemonList[i].height + ')<br>' + note + '<br><br>');
}
// Close html elements
document.write('</ul></div></div>');
