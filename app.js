

//SE USA UNA API PUBLICA PARA SIMULAR UN TINDER BUCADOR DE PERSONAS


const contenido = document.querySelector('#contenido')
function traer (){

    fetch('https://randomuser.me/api/')
    .then(rest => rest.json())
    .then(data => {

        console.log(data.results['0']);

        contenido.innerHTML = `
        <img src="${data.results['0'].picture.large}" width="200px"  class="img-fluid rounded-circle">
        <h5>Nombre: ${data.results['0'].name.first} </h5>
        <h5>Apellido: ${data.results['0'].name.last} </h5>
        <h5>Edad: ${data.results['0'].registered.age} </h5>
        <h5>Email: ${data.results['0'].email} </h5>
        <h5>Celular: ${data.results['0'].phone} </h5>
        <button class="btn btn-primary" onclick="traer()" >NEXT</button>

        `
    })

}