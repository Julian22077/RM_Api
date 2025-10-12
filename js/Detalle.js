var esFavorito = false;

// Función para agregar o quitar un Pokémon de favoritos
function toggleFavorito(paramid, paramname, paramimage) {

    // Leer favoritos actuales desde localStorage
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let existe = false

    // Verificar si ya está guardado
    for (let i = 0; i < favoritos.length; i++) {
        if (favoritos[i].name === paramname) {
            existe = true;
            break;
        }
    }

    if (existe == true) {
        favoritos = favoritos.filter(per => per.name !== paramname);
        esFavorito = false;
    } else {
        // Si no está, agregarlo
        favoritos.push({
            id: paramid,
            name: paramname,
            image: paramimage
            

        });
        esFavorito = true;
    }

    // Guardar el array actualizado en localStorage
    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    // Actualizar el icono en pantalla (si existe el botón)
    const boton = document.querySelector(`#corazon-${paramid}`);
    if (boton) boton.textContent = esFavorito ? "❤️" : "🤍";
}
async function Personaje(id){
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    var root = document.getElementById("root");

    favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    esFavorito = favoritos.some(per => per.name === data.name);
        
        root.innerHTML = `
            <section class="c-detalle">
                <img src="${data.image}" height="120" width="auto">
                <p>Nombre: ${data.name}</p>
                <p>ID: ${data.id}</p>
                <p>Especie: ${data.species}</p>
                <p>Estado: ${data.status}</p>
                <p>Origen: ${data.origin.name}</p>
                <button onClick="toggleFavorito(${data.id}, '${data.name}','${data.image}')">
        <span id="corazon-${data.id}">${esFavorito ? '❤️' : '🤍'}</span> Favorito
      </button>
            </section>
        `;
}

