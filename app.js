
    const listaPokemon = document.querySelector('#listaPokemon');
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    async function obtenerDatos() { 
      try { 
        for(let i = 1; i <= 35; i++) { 
          const response = await fetch(apiUrl + i); 
          const data = await response.json(); 
          mostrarPokemon(data);
        } 
      } catch (error) {  
        console.error("Error al obtener datos de la API", error);
      } 
    }

    function mostrarPokemon(poke) {
      const div = document.createElement("div");
      div.classList.add("pokemon");
      div.innerHTML = `
        <div class="pokemon-imagen">
          <img src="${poke.sprites.other["official-artwork"].front_default}" alt=${poke.name}>
        </div>
        <div class="pokemon-info">
            <h2 class="pokemon-nombre">${poke.name}</h2>
            <h2 class="pokemon-id">${poke.id}</h2>
        </div>
          `;
          listaPokemon.append(div);
    }
 

    // Función para buscar un Pokémon específico //
    async function buscarPokemon(nombre) {
      listaPokemon.innerHTML = ''; // Limpiar lista de resultados anteriores //
      try {
        const response = await fetch(apiUrl + nombre.toLowerCase());
        if (!response.ok) throw new Error("Pokémon no encontrado");
        const data = await response.json();
        mostrarPokemon(data);
      } catch (error) {
        listaPokemon.innerHTML = `<p>Pokémon no encontrado.</p>`;
        console.error("Error en la búsqueda", error);
      }
    }

    // Evento para el botón de búsqueda //
    document.querySelector('#botonBuscar').addEventListener('click', () => {
      const nombre = document.querySelector('#pokemonBuscar').value;
      if (nombre) {
        buscarPokemon(nombre);
      } else {
        alert('Por favor, ingresa un ID o nombre de Pokémon.');
      }
    });

     // Cargar lista inicial de Pokémon //
     obtenerDatos();

