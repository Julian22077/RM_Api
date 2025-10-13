function Informativa() {
    document.body.className = ""; 
    document.getElementById("root").innerHTML=`<section class="c-informativa">
    <h2>Acerca de esta aplicación</h2>
    <p>Esta aplicación utiliza la API pública de Rick and Morty para mostrar información sobre los personajes de la serie, se puede obtener información como el nombre, la especie, el género, el estado,etc. Mediante el uso de esta api se implemntaron diferentes funciones como detalle del personaje, añadir a favoritos, una trivia de los personajes aleatorios,etc.</p>
    <p>Desarrollada por Julián Camilo Lozano Hernández</p>
    <p>Fuente de datos: <a href="https://rickandmortyapi.com/api/character">Rick and Morty API</a></p>
    </section>`;
}