function myFunction(){
    let element = document.body; //estoy guardando el nodo(body) en la variable element
    element.classList.toggle("light-mode") // lo que hace toggle es que busca en el css un clase que se relacione con el body y lo yo modifiqué en el css (light-mode)
}
let string = location.search;
let data = new URLSearchParams(string);
let id = data.get("id");

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`;

fetch(endpoint)
   .then(function (response) {
       return response.json();``
   })
   .then(function (data) {
       console.log(data);
       let detcancion = document.querySelector(".canciondetail");
       let detalle = `
           <li> 
               <a href="../Html/detalleartista.html?id=${data.artist.id}">
                   <p> Artist: ${data.artist.name} </p>
               </a>
               <p> Song: ${data.title}  </p>
               <img src="${data.album.cover_medium}" alt='' />
               <a href="../Html/detallealbum.html?id=${data.album.id}">
                   <p> Album: ${data.album.title}  </p>
               </a>
           </li>`;

       detcancion.innerHTML = detalle;
   })
   .catch(function (error) {
       console.log(error);
   });

