
async function Trivia() {
  document.body.style.backgroundColor="";
  document.body.className = ""; 
    
    document.getElementById("root").innerHTML = `<section class='c-trivia'><h2>Cargando Personaje...</h2></section>`;
    // Genera un id aleatorio entre 1 y 826
    const id = Math.floor(Math.random() * 826) + 1;
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const personaje = await res.json();
    // Mostrar la trivia en el root
    document.getElementById("root").innerHTML = `
        <section class="c-trivia">
            <h2>¿Este personaje en que estado se encuentra?</h2>
            <img src="${personaje.image}" height="120" width="auto">
            <h3>${personaje.name}</h3>
            <div>
                <button onclick="verificarEstado('${personaje.status}', 'Alive')">Alive</button>
                <button onclick="verificarEstado('${personaje.status}', 'Dead')">Dead</button>
                <button onclick="verificarEstado('${personaje.status}', 'unknown')">Unknown</button>
            </div>
            <p id="resultado-estado"></p>
            <br>
             <h2>¿Qué especie es ${personaje.name}?</h2>
            <div>
            <button onClick="verificarEspecie('${personaje.species}', 'Human')">Human</button>
            <button onClick="verificarEspecie('${personaje.species}', 'Alien')">Alien</button>
            <button onClick="verificarEspecie('${personaje.species}', 'Robot')">Robot</button>
            <button onClick="verificarEspecie('${personaje.species}', 'Animal')">Animal</button>
            <button onClick="verificarEspecie('${personaje.species}', 'unknown')">Unknown</button>
            <button onClick="verificarEspecie('${personaje.species}', 'Humanoid')">Humanoid</button>
            <button onClick="verificarEspecie('${personaje.species}', 'Mythological Creature')">Mythological Creature</button>
            <button onClick="verificarEspecie('${personaje.species}', 'Disease')">Disease</button>
            <button onClick="verificarEspecie('${personaje.species}', 'Cronenberg')">Cronenberg</button>
            <button onClick="verificarEspecie('${personaje.species}', 'Poopybutthole')">Poopybutthole</button>
            </div>
            <p id="resultado-especie"></p>
            <br>
            <button onclick="Trivia()">Nuevo Personaje</button>
        </section>
    `;
    
}


function verificarEstado(status, seleccion) {
    const resultado = document.getElementById("resultado-estado");
  if((status===seleccion)){
    resultado.textContent="¡Correcto!";
  }else{
    resultado.textContent="Incorrecto. El estado del personaje es: "+status;
  }
}
function verificarEspecie(species, seleccion) {
     const resultado = document.getElementById("resultado-especie");
    if (species === seleccion) {
     resultado.textContent = "¡Correcto!";
    } else {
       resultado.textContent = "Incorrecto. La especie del personaje es: " + species;
    }
}