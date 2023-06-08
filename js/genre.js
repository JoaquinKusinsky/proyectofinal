let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

fetch (url)
.then(function(response){
    return response.json ()
})
.then (function (data){
    console.log(data)
    let generos = document.querySelector (".generos")
    let listageneros = []
    for (let i=0; i < data.data.length; i++){
        listageneros +=
        `<article>
        <img src= "${data.data[i].picture}" alt="" />
        <p>Name:  ${data.data[i].name}  </p>
        </article>`
    }
    generos.innerHTML= listageneros
    console.log(listageneros);
})
.catch (function (error){
    alert (error)
})