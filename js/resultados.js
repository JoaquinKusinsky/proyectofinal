let string = location.search;
let data = new URLSearchParams(string);
let busqueda = data.get("buscador");
let endpointbusqueda = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${busqueda};`;

if (busqueda === "") {
    alert("Parece que no escribiste nada, inténtalo nuevamente escribiendo algo.");
} else if (busqueda.length < 3) {
    alert("Tu búsqueda debe contener a`l menos 3 caracteres.");
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
                        <li>
                            <p>${datos.data[i].title}</p>
                            <img src="${datos.data[i].album.cover_medium}" alt=''/>
                            <p>Artist: ${datos.data[i].artist.name}</p>
                            <p>Album: ${datos.data[i].album.title}</p>
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
