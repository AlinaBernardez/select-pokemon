const selector = document.getElementById('pokemon-select');
const boton = document.getElementById('get-pokemon');
const botonReset = document.querySelector('.botonReset');
const pokemonContainer = document.querySelector('.pokemon')

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'

pokemonContainer.style.display = 'none'

boton.addEventListener('click', () => {
    const pokemon = selector.value;
    pokemonContainer.style.display = 'flex'
    getPokemon(pokemon);
});

botonReset.addEventListener('click', () => {
    pokemonContainer.innerHTML = ''
})

function getPokemon(nombre) {
    fetch(`${ENDPOINT}${nombre}`)
    .then(response => {
        if(!response.ok) {
            console.log('No hemos encontrado el Pokemon que buscas')
        }
        return response.json();
    }) .then(data => {
        const pokemonInfo = `
        <div class='card'>
            <h2>${data.name}</h2>
            <img class='pokemon-image' src="${data.sprites.front_default}" alt="${data.name}">
            <p>Altura: ${data.height} dm</p>
            <p>Peso: ${data.weight} hectogramos</p>
            <p>Tipo(s): ${data.types.map(type => type.type.name).join(', ')}</p>
        </div>

            `
            pokemonContainer.innerHTML += pokemonInfo
        });
};