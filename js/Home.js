function generarLista(arraypersonajes) {
    let listaHTML = "";
        for (let i = 0; i < arraypersonajes.length; i++) {
            let id = arraypersonajes[i].id;
                listaHTML += `
                <div class="c-lista-personaje per-${id}" onclick="Personaje('${id}')">
                    <p>${id}</p>
                    <img src="${arraypersonajes[i].image}"  loading="lazy">
                    <p>${arraypersonajes[i].name}</p>
                </div>`;
        }
    console.log(listaHTML);
    return listaHTML;
}


function buscadorfuncion(sza){
    if(sza.length >= 3){
        const filtrados = [];
        for (let i = 0; i < personajes.length; i++) {
            const nombre = personajes[i].name.toLowerCase();
            if (nombre.includes(sza.toLowerCase())) {
                filtrados.push(personajes[i]);
            }
        }
        let listaHTML = generarLista(filtrados)
        document.getElementById("la-lista").innerHTML = listaHTML;
    }else{
        let listaHTML = generarLista(personajes)
        document.getElementById("la-lista").innerHTML = listaHTML;
    }
}


function Home(){
    document.body.className = ""; 
    document.getElementById("root").innerHTML = "";
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Personaje...";
    buscador.addEventListener("input", () => {
            buscadorfuncion(buscador.value);
    });

   
    const species = [
        "Human", "Alien", "Humanoid", "Poopybutthole", "Mythological Creature", "Animal", "Robot", "Cronenberg", "Disease", "unknown"
    ];

    const contenedorFiltro = document.createElement("section");
    contenedorFiltro.classList.add("tipos-container");

    for (let i = 0; i < species.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = species[i];
        btn.addEventListener("click", () => {
            FiltroConexion(species[i]);
        });
        contenedorFiltro.appendChild(btn);
    }
    const listaHTML = generarLista(personajes);
    var contenedorP =document.createElement("section");
    contenedorP.id="la-lista"
    contenedorP.innerHTML=listaHTML;


    document.getElementById("root").appendChild(buscador);
    document.getElementById("root").appendChild(contenedorFiltro);
    document.getElementById("root").appendChild(contenedorP);
}