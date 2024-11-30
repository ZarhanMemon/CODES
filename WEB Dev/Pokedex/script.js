function displayAttacks(pok_info) {
    const moves = pok_info.moves
    const maxAttacksToDisplay = 3;
    const displayedAttacks = moves.slice(0, maxAttacksToDisplay);
    const pokemonAttacks = displayedAttacks.map(e => e.move.name).join(', '); // Extract the move name
    document.getElementById('pokemon-attacks').innerText = pokemonAttacks;
}

async function pokemon_img(pokemon_name) {
    const loader = document.getElementById('loading');
    loader.style.display = 'block';

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`);

        if (response.status !== 200) {
            loader.innerText = 'Pokémon not found';
            throw new Error('Pokémon not found');
        }

        const pok_info = await response.json();
        const imgElement = document.getElementById('pokemon-image');
        const pokemon_info = document.getElementById('pokemon-info');

        imgElement.src = pok_info.sprites.front_default;
        imgElement.alt = `${pokemon_name} image`;

        const types = pok_info.types.map(e => e.type.name).join(', '); // Extract and join all types
        const height = pok_info.height / 10;
        const weight = pok_info.weight / 10;
        const id = pok_info.id;

        document.getElementById('pokemon-name').innerHTML = `${pok_info.name.charAt(0).toUpperCase() + pok_info.name.slice(1)} <span id="pokemon-id">[${id}]</span> `;
        document.getElementById('pokemon-type').innerText =types;
        document.getElementById('pokemon-height').innerText =height;
        document.getElementById('pokemon-weight').innerText =weight;

        displayAttacks(pok_info); // Pass the moves data to displayAttacks()

        const imageContainer = document.getElementById('image-container');
        imageContainer.innerHTML = '';
        imageContainer.append(imgElement, pokemon_info);


        setTimeout(() => {
            loader.style.display = 'none';
            imgElement.style.display = 'block';
            pokemon_info.style.display = 'block';
        }, Math.floor(Math.random() * 7) + 1 * 1000);

    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        loader.innerText = 'Error fetching Pokémon data';
    }
}

function Pokémon() {
    const pokemon_name = document.getElementById("input_val").value.trim().toLowerCase();

    if (!pokemon_name) {
        alert('Please enter a Pokémon name.');
        return;
    }

    pokemon_img(pokemon_name);
}
