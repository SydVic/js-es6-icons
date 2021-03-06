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

const iconsContainer = document.querySelector(".container");
const iconTypeSelect = document.getElementById("icons-type");


// creaimo in modo dinamico le option per il select, cosi se vengono inserite nuove tipologie di icone vengono aggiunte in automatico nella selezione
const typesArray = [];
iconsInfo.forEach(element => {
	const currentType = element.type;
	if ( !typesArray.includes(currentType) ) {
		typesArray.push(currentType);
	}
});
console.log(typesArray);

// stampiamo in html le option del select
typesArray.forEach( type => {
	const option =`<option value="${type}">${type}</option>`;
	console.log(option);
	iconTypeSelect.innerHTML += option;
})

// generiamo all'avvio della pagina tutti gli elementi
iconsInfo.forEach((element) => {
	generateIconBox(element);
});

// al cambiamento della selezione del tipo di icona ristampo 
iconTypeSelect.addEventListener("change", function() {

	// prelevo il filtro scelto dall'utente
	const userIconsTypeChoice = this.value;

	// pulisco il container per evitare che le icone scelte si aggiungano a quelle gi?? presenti
	iconsContainer.innerHTML = "";

	// se viene selezionato all stampo tutto
	if (userIconsTypeChoice === "all") {
		iconsInfo.forEach((element) => {
			generateIconBox(element);
		});
	// altrimenti stampo solo quelli della categoria scelta
	} else {
		iconsInfo.filter((element) => {
			if (element.type === userIconsTypeChoice) {
				generateIconBox(element);
			}
		});
	}
});

// FUNCTIONS

/**
 * Description
 * @param {any} object
 * @returns {any}
 */
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

// per fare color dinamico e non dover fare le classi in CSS
// element.style.color = object.color

// oppure anche con template literal
// style="color: ${object.color}"