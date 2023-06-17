function myFunction(){
    let element = document.body; //estoy guardando el nodo(body) en la variable element
    element.classList.toggle("light-mode") // lo que hace toggle es que busca en el css un clase que se relacione con el body y lo yo modifiqué en el css (light-mode)
}

let string = location.search
let data = new URLSearchParams(string);
let id = data.get("id")


let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`


fetch(url)
   .then(function (response) {
       return response.json()


   })
   .then(function (data) {
       console.log(data);
       let detartistas = document.querySelector(".detalle_artista")
       let detalleart =
           ` <li> 
               <p>${data.name}  </p>
               <img src= "${data.picture_medium}" alt='' />
               </li>`;
               fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/albums`)
               .then(function (response) {
                   return response.json()


               })
               .then(function (data) {
                   console.log(data);
                   let topalbum = document.querySelector(".albumes")
                   let albums = [];
                   for (let i = 0; i < 5; i++) {
                       albums += `<li>
                       <a href="../detallealbum.html?id=${data.data[i].id}"> <p> ${i+1}: ${data.data[i].title}</p> </a>
                              
                               </li>`;
                   }


                   topalbum.innerHTML = albums


               })
          
           


       detartistas.innerHTML = detalleart
   })
   .catch(function (error) {
       console.log(error);
   })



