var personajes=[];
 async function Conexion(filtrotipo){
    if(filtrotipo == "All"){
        let url = `https://rickandmortyapi.com/api/character`;
        let personajes = [];
        let next = url;
        while (next) {
            const res = await fetch(next);
            const data = await res.json();
            personajes = personajes.concat(data.results);
            next = data.info.next;
        }
        return personajes;
    } else {
        let url = `https://rickandmortyapi.com/api/character?species=${filtrotipo}`;
        let personajes = [];
        let next = url;
        while (next) {
            const res = await fetch(next);
            const data = await res.json();
            personajes = personajes.concat(data.results);
            next = data.info.next;
        }
        return personajes;
    }
}
async function General() {
  if (personajes.length === 0) {
    personajes = await Conexion("All");
  }
  Home();
}

async function FiltroConexion(Elfiltro){
  document.getElementById("la-lista").innerHTML = "";
  personajes = await Conexion(Elfiltro);
  const listaHTML = generarLista(personajes);
  document.getElementById("la-lista").innerHTML = listaHTML;
}