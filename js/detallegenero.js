let genreDetail = document.querySelector('#genre-detail');
let queryStringObj = new URLSearchParams(window.location.search);
let id = queryStringObj.get('id');
let genreUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + id;
let artistsUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + id + '/artists';

fetch(genreUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        let genreName = document.querySelector('#nombregen');
        genreName.innerText = data.name;
    })
    .catch(function(error) {
        console.log(error);
    });

fetch(artistsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        let genreArtists = document.querySelector('.artistasgen');
        let artistsHTML = '';

        for (let i = 0; i < data.data.length; i++) {
            let artist = data.data[i];
            artistsHTML += `
                <li class="artistasgenero">
                    <a href="detalleartista.html?id=${artist.id}">
                    <img class="imgenero" src="${artist.picture_medium}" alt="${artist.name}">
                    <h2 class="pgen">${artist.name}</h2>
                    </a>
                </li>
            `;
        }

        genreArtists.innerHTML = artistsHTML;
    })
    .catch(function(error) {
        console.log(error);
    });


    function myFunction(){
        let element = document.body; //estoy guardando el nodo(body) en la variable element
        element.classList.toggle("light-mode") // lo que hace toggle es que busca en el css un clase que se relacione con el body y lo yo modifiqué en el css (light-mode)
    }