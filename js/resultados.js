let string = location.search;
let data = new URLSearchParams(string);
let busqueda = data.get("buscador");
let endpointbusqueda = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${busqueda};`;

if (busqueda === "") {
    alert("Parece que no escribiste nada, inténtalo nuevamente escribiendo algo.");
} else if (busqueda.length < 3) {
    alert("Tu búsqueda debe contener al menos 3 caracteres.");
} else {
    fetch(endpointbusqueda)
        .then(function(response) {
            return response.json();
        })
        .then(function(datos) {
            console.log(datos);
            if (datos.data.length == 0) {
                let noresult = document.querySelector(".algo");
                noresult.innerHTML = "No se encontraron coincidencias con el término buscado";
                noresult.style.color = "red";
            } else {
                let resultados = document.querySelector(".resultsbusqueda");
                let busqul = [];
                for (let i = 0; i < datos.data.length; i++) {
                    busqul += `
                        <li class="resultadosdebusqueda">
                        
                        <a href="./detallecancion.html">
                        <p class="pbusqueda">${datos.data[i].title}</p>
                            <img class="imgbusqueda" src="${datos.data[i].album.cover_medium}" alt=''/>
                            <p class="pbusqueda">Artist: ${datos.data[i].artist.name}</p>
                            <p class="pbusqueda">Album: ${datos.data[i].album.title}</p>
                            </a> 

                        </li>`;
                }
                resultados.innerHTML = busqul;
                let term = document.querySelector(".algo");
                term.innerHTML += busqueda;
                term.style.color = "white";
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}


function myFunction(){
    let element = document.body; //estoy guardando el nodo(body) en la variable element
    element.classList.toggle("light-mode") // lo que hace toggle es que busca en el css un clase que se relacione con el body y lo yo modifiqué en el css (light-mode)
}

