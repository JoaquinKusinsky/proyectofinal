function myFunction(){
    let element = document.body; //estoy guardando el nodo(body) en la variable element
    element.classList.toggle("light-mode") // lo que hace toggle es que busca en el css un clase que se relacione con el body y lo yo modifiqué en el css (light-mode)
}

let string = location.search
let data = new URLSearchParams(string);
let id = data.get("id")


let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`


fetch(endpoint)
   .then(function (response) {
       return response.json()


   })
   .then(function (data) {
       console.log(data);
       let detalbum = document.querySelector(".albumesdetalle")
       let detalle =
           ` <li> 
           <a href="../Html/detalleartista.html?id=${data.artist.id}"> <p> Artist: ${data.artist.name}  </p> </a>
           <a href="../Html/detallegenero.html?id=${data.genre_id}"><p> Genre: ${data.genres.data[0].name}  </p> </a>
               <img src= "${data.cover_medium}" alt='' />
               <p> Album: ${data.title}  </p>
               <p> Release Date: ${data.release_date}  </p>
               </li>`


              
               let lista = document.querySelector(".albumcanciones");
               let tracks = "";
               for (let i = 0; i < data.tracks.data.length; i++) {
                 tracks +=
                   `<li>
                     <a href="../html/detallecancion.html?id=${data.tracks.data[i].id}">
                       <p>${i}: ${data.tracks.data[i].title}</p>
                     </a>
                   </li>`;
               }
               lista.innerHTML = tracks;
          
            ;


       detalbum.innerHTML = detalle
   })
   .catch(function (error) {
       console.log(error);
   })
