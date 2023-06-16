let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"

fetch (url)
.then(function(response){
    return response.json ()
})
.then (function (data){
    console.log(data.data)
    let listadoart = document.querySelector (".listadoart")
    let listaartistas = []
    for (let i = 1; i < data.data.length; i++){
        listaartistas +=
        `<article class= "listadoart">
        <a href="./detalleartista.html">
        <img class="imgart" src= "${data.data[i].picture_medium}" alt="" />
        <p class="part" >  ${data.data[i].name}  </p>
        </a>
        </article>`
        
        
    }
    listadoart.innerHTML= listaartistas
    console.log(listaartistas);
})
.catch (function (error){
    alert (error)
})

let url2 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums"

fetch (url2)
.then(function(response){
    return response.json ()
})
.then (function (data){
    console.log(data.data)
    let listadoalb = document.querySelector (".listadoalb")
    let listaartistas = []
    for (let i = 1; i < data.data.length; i++){
        listaartistas +=
        `<article class= "listadoalb">
        <a href="./detallealbum.html">
        <img class="imgalb" src= "${data.data[i].cover_medium}" alt="" />
        <p class="palb">  ${data.data[i].title}  </p>
        </a>
        </article>`
    }
    listadoalb.innerHTML= listaartistas
    console.log(listaartistas);
})
.catch (function (error){
    alert (error)
})

let url3 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"

fetch (url3)
.then(function(response){
    return response.json ()
})
.then (function (data){
    console.log(data)
    let listadocan = document.querySelector (".listadocan")
    let listaartistas = []
    for (let i = 1; i < data.data.length; i++){
        listaartistas +=
        `<article class= "listadocan">
        <a href="./detallecancion.html">
        <img class="imgcan" src= "${data.data[i].album.cover_medium}" alt="" />
        <p class="pcan">  ${data.data[i].title}  </p>
        </a>
        </article>`
    }
    listadocan.innerHTML= listaartistas
    console.log(listaartistas);
})
.catch (function (error){
    alert (error)
})

