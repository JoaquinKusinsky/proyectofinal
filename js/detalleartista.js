function myFunction(){
    let element = document.body; //estoy guardando el nodo(body) en la variable element
    element.classList.toggle("light-mode") // lo que hace toggle es que busca en el css un clase que se relacione con el body y lo yo modifiqué en el css (light-mode)
}


// Obtener el ID del artista de la URL
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');

if (id) {
  let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let arts = document.querySelector(".arts");
      let detalleArtista = `
        <article class="listadoart">
          <img class="imgart" src="${data.picture_medium}" alt="" />
          <p class="part">${data.name}</p>
        </article>
      `;
      arts.innerHTML = detalleArtista;

      let albums = "<ul class='album-list'>";
      if (data.albums && data.albums.data) {
        let albumsData = data.albums.data;
        for (let i = 0; i < albumsData.length && i < 5; i++) {
          albums += `<li>${albumsData[i].title}</li>`;
        }
      }
      albums += "</ul>";
      arts.innerHTML += albums;

      console.log(detalleArtista);
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
} else {
  console.log('No se proporcionó un ID de artista en la URL.');
}




