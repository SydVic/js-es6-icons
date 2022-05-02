const iconsInfo = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
const iconsContainer = document.querySelector(".container");
console.log("iconsContainer", iconsContainer);

iconsInfo.forEach((element) => {
	generateIconBox(element);
});

const iconTypeSelect = document.getElementById("icons-type");
iconTypeSelect.addEventListener("change", function() {

	// prelevo il filtro scelto dall'utente
	const userIconsTypeChoice = document.getElementById("icons-type").value;
	console.log("userIconsTypeChoice", userIconsTypeChoice);

	// pulisco il container per evitare che le icone scelte si aggiungano a quelle già presenti
	iconsContainer.innerHTML = "";

	// con filter aggiungo solo gli elementi della categoria scelta
	//const filteredIcons = 
	iconsInfo.filter((element) => {
		if (element.type === userIconsTypeChoice) {
			generateIconBox(element);
		}
	});

	if (userIconsTypeChoice === "all") {
		iconsInfo.forEach((element) => {
			generateIconBox(element);
		});
	}

});


// FUNCTIONS

function generateIconBox(object) {
	iconsContainer.innerHTML += `
	<div class="icon-box">
		<div class="icon-img ${object.color}">
			<i class="${object.family} ${object.prefix}${object.name}"></i>
		</div>
		<div class="icon-text">
			<span class="upper-case">${object.name}</span>
		</div>
	</div>`;
}