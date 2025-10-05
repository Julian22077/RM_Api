async function Personaje(id){
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    var root = document.getElementById("root");
    console.log(data);
        
        root.innerHTML = `
            <section class="c-detalle">
                <img src="${data.image}" height="120" width="auto">
                <p>Nombre: ${data.name}</p>
                <p>ID: ${data.id}</p>
                <p>Especie: ${data.species}</p>
                <p>Estado: ${data.status}</p>
                <p>Origen: ${data.origin.name}</p>
            </section>
        `;
}

