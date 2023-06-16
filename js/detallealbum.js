function myFunction(){
    let element = document.body; //estoy guardando el nodo(body) en la variable element
    element.classList.toggle("light-mode") // lo que hace toggle es que busca en el css un clase que se relacione con el body y lo yo modifiqué en el css (light-mode)
}

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');

if (id) {
  let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let albumDetails = document.querySelector(".album-details");

      let albumListHTML = '';

      for (let i = 0; i < data.data.length; i++) {
        let album = data.data[i];

        let songListHTML = generateSongList(album.tracks.data);

        albumListHTML += `
          <div>
            <img class="album-cover" src="${album.cover_medium}" alt="Album Cover" />
            <h2 class="album-title">${album.title}</h2>
            <h3 class="artist-name">${album.artist.name}</h3>
            <h4 class="genre-name">${album.genre.name}</h4>
            <p class="release-date">Fecha de publicación: ${album.release_date}</p>
            <h4>Canciones del disco:</h4>
            <ul class="song-list">
              ${songListHTML}
            </ul>
          </div>
        `;
      }

      albumDetails.innerHTML = albumListHTML;
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
}
