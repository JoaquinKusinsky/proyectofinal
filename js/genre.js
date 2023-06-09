let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

fetch (url)
.then(function(response){
    return response.json ()
})
.then (function (data){
    console.log(data)
    let listadogen = document.querySelector (".listadogen")
    let listageneros = []
    for (let i=0; i < data.data.length; i++){
        listageneros +=
        `<article>
        <img class= "imgenero" src= "${data.data[i].picture_medium}" alt="" />
        <p class= "pgen">  ${data.data[i].name}  </p>
        </article>`
    }
    listadogen.innerHTML= listageneros
    console.log(listageneros);
})
.catch (function (error){
    alert (error)
})