let dato = data.events 
let contenedorD = document.getElementById("DetailsM")
let filterAssistance = dato.filter(e=>e.assistance) // creamos variable filterA.. para filtrar los eventos con assistencia nomas 
console.log(filterAssistance)
let filterEstimate = dato.filter(e=>e.estimate)//idem al anterior pero con estimados 

function cardsAssistance (datos,contenedor){//creamos funcion para imprimir datos de asistance 
    let div = document.createElement("div")
    div.className= "d-flex flex-row justify-content-center aling-items-center flex-wrap SizeMayor p-2"
    div.style= "height: 60vh"
    div.innerHTML=`
    <div class=" d-flex aling-items-center justify-content-center container-fluid p-2"><img class="img-fluid" src="${datos.image}" alt="${datos.name}"></div>
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
    div.style= "height: 60vh"
    div.innerHTML=`
    <div class=" d-flex aling-items-center justify-content-center container-fluid p-2"><img class="img-fluid" src="${datos.image}" alt="${datos.name}"></div>
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
function cardCharge(){//creamos funcion para enlazar los eventos del location search con el id respectivo 
        console.log(location) 
        console.log(location.search)
        console.log(location.search.slice(8))
        let id = Number(location.search.slice(8))
        let evento = dato.filter(evento => evento._id === id); //comparamos los id extraidos vs los id de eventos genericos
        evento = evento[0] // inicializar el arreglo , el primer valor dentro de los filtrados
        if(evento.assistance){//condicion para decidir que evento filtrar
          cardsAssistance(evento,contenedorD)
        }
        else{
          cardsEstimate(evento,contenedorD)
        }
}

cardCharge()