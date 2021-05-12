// initialise array of pokémons
let pokemonList = [
	{ name: 'Bulbasaur', height: 0.7 , types: ['grass', 'poison']},
	{ name: 'Butterfree', height: 1.1 , types: ['bug', 'flying']},
	{ name: 'Pidgeot', height: 1.5 , types: ['flying', 'normal']}
];
// create html-header
document.write('<div class="page"><div class="header"><h1>Pokédex App</h1><p class="topmargin">written in JavaScript </p></div><div class="main"><h2>Table of Pokémons</h2>');
document.write('<ul>');
// initialise variable to print note 
let note = '';
// forEach() loop to iterate over each object (user) in array 
pokemonList.forEach(function(user,index) {
	// condition to check the value of the heights and add note conditional to the value
	if (user.height < 1) {
		note = 'This is a small pokemon';
	} else if (user.height > 1 && user.height < 1.5) {
		note = 'This is an average Pokemon';
	} else {
		note = "This is a large Pokemon<br> >> <strong>WOW</strong> that's big! <<";
	};
	document.write('<li><img src="img/' + user.name + '.svg" width="270px" /><p><strong class="pokemon' + index + '">' + user.name + '</strong> (height: ' + user.height + ')<br>' + note + '<br><br>');
});
document.write('</ul></div></div>');