
let $contenedorD = document.getElementById("DetailsM")


async function fetchApi(){
  try{
    let data = await fetch('https://mh-amazing.herokuapp.com/amazing')
    evento = await data.json()
    console.log(evento)
    dato = evento.events
    cardCharge(dato)
  }catch(err){
    console.log("no se puede mostrar el contenido debido a un error")
  }
}
fetchApi()

function cardsAssistance (datos,contenedor){//creamos funcion para imprimir datos de asistance 
    let div = document.createElement("div")
    div.className= "d-flex flex-row justify-content-center aling-items-center flex-wrap SizeMayor p-2"
    div.style= "height: 500px;"
    div.innerHTML=`
    <div class=" d-flex aling-items-center justify-content-center container-fluid p-2"><img style="height:250px; width:400px; " src="${datos.image}" alt="${datos.name}"></div>
<div class=" d-flex justify-content-center aling-items-center gap-3 Size p-2 container-fluid">
  <div ><h2 class="border-bottom border-warning">${datos.name}</h2></div>
  <div class="d-flex flex-column  SizeP text-aling">
    <p><span class="fw-bold border-bottom border-warning">DATE:</span>${datos.date}</p>
    <p><span class="fw-bold border-bottom border-warning">DESCRIPTION:</span>${datos.description}</p>
    <p><span class="fw-bold border-bottom border-warning">PLACE:</span>${datos.place}</p>
    <p><span class="fw-bold border-bottom border-warning">CAPACITY:</span>${datos.capacity}</p>
    <p><span class="fw-bold border-bottom border-warning">ASSISTANCE:</span>${datos.assistance}</p>
    <p><span class="fw-bold border-bottom border-warning">PRICE:</span> ${datos.price}</p>
  </div>
</div>
    `
    contenedor.appendChild(div)
}   
/* console.log(cardsAssistance(filterAssistance,contenedorD)) */

function cardsEstimate (datos,contenedor){//creamos funcion para los datos que son de estimados 
    let div = document.createElement("div")
    div.className= "d-flex flex-row justify-content-center aling-items-center flex-wrap SizeMayor p-2"
    div.style= "height: 100vh"
    div.innerHTML=`
    <div class=" d-flex aling-items-center justify-content-center container-fluid p-2"><img style="height:250px; width:400px; " src="${datos.image}" alt="${datos.name}"></div>
<div class=" d-flex justify-content-center aling-items-center gap-3 Size p-2 container-fluid">
  <div ><h2 class="border-bottom border-warning">${datos.name}</h2></div>
  <div class="d-flex flex-column  SizeP text-aling">
    <p><span class="fw-bold border-bottom border-warning">DATE:</span>${datos.date}</p>
    <p><span class="fw-bold border-bottom border-warning">DESCRIPTION:</span>${datos.description}</p>
    <p><span class="fw-bold border-bottom border-warning">PLACE:</span>${datos.place}</p>
    <p><span class="fw-bold border-bottom border-warning">CAPACITY:</span>${datos.capacity}</p>
    <p><span class="fw-bold border-bottom border-warning">ESTIMATE:</span>${datos.estimate}</p>
    <p><span class="fw-bold border-bottom border-warning">PRICE:</span> ${datos.price}</p>
  </div>
</div>
    `
    contenedor.appendChild(div)
}   
function cardCharge(data){//creamos funcion para enlazar los eventos del location search con el id respectivo 
        let id = location.search.slice(8)
        let eventoi = data.filter(evento => evento.id === id); //comparamos los id extraidos vs los id de eventos genericos
        eventoi = eventoi[0] // inicializar el arreglo , el primer valor dentro de los filtrados
        if(eventoi.assistance){//condicion para decidir que evento filtrar
          cardsAssistance(eventoi,$contenedorD)
        }
        else{
          cardsEstimate(eventoi,$contenedorD)
        }
}