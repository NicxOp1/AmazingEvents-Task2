let $tContainer = document.getElementById("tbody")
let $tContainer2 = document.getElementById("tbody2")
let $tContainer3 = document.getElementById("tbody3")
async function fetchApi(){
    try{
      let data = await fetch('https://mh-amazing.herokuapp.com/amazing')
      data = await data.json()
      evento = data.events
      let fechaPresente = data.date
      let eventosPasados = evento.filter(e=> e.date<fechaPresente)
      let eventosFuturos = evento.filter(e=> e.date>fechaPresente)
      console.table(eventosPasados)
      imprimirTr(mayorPercentage(eventosPasados),lowerPercentage(eventosPasados),largerCapacity(eventosPasados),$tContainer)  
      categoriesFilter(eventosFuturos,'estimate',$tContainer2)
      categoriesFilter(eventosPasados,'assistance',$tContainer3)
    }catch(err){
      console.log("no se puede mostrar el contenido debido a un error")
    }
  }
  fetchApi()
function largerCapacity (array){
   let capacidadMayorAmenor =[...array]
   capacidadMayorAmenor.sort(function(a,b){return b.capacity-a.capacity})
   capacidadMayorAmenor.map(e=>e.capacity)
   console.table(capacidadMayorAmenor)
   let capacidadMasAlta = capacidadMayorAmenor[0]
   console.log(capacidadMasAlta)
   return capacidadMasAlta
}

function mayorPercentage(array){
    let arregloNuevo = array.map(e=> ({name:e.name, capacity: e.capacity, assistance:e.assistance, percentageOfAssistance: (e.assistance*100/e.capacity).toFixed(2)}))
    arregloNuevo = [...arregloNuevo]
    let hola =arregloNuevo.sort((a,b)=>b.percentageOfAssistance-a.percentageOfAssistance)
    console.table(hola)
    let mayorPorcentaje = arregloNuevo[0]
    return mayorPorcentaje
}
function lowerPercentage(array){
    let arregloNuevo =array.map(e=> ({name:e.name, capacity: e.capacity, assistance:e.assistance, percentageOfAssistance: (e.assistance*100/e.capacity).toFixed(2)}))
    arregloNuevo = [...arregloNuevo]
    arregloNuevo.sort((a,b)=>a.percentageOfAssistance-b.percentageOfAssistance)
    let menorPorcentaje = arregloNuevo[0]
    return menorPorcentaje
}




function imprimirTr(parametro1,parametro2,parametro3,contenedor){
    contenedor.innerHTML +=
    ` <tr>
    <td>${parametro1.name}   (%${parametro1.percentageOfAssistance})</td>
    <td>${parametro2.name}   (%${parametro2.percentageOfAssistance})</td>
    <td>${parametro3.name}    (${parametro3.capacity} people)</td>
  </tr>`
}

// SEGUNDO FORMULARIO
function categoriesFilter (array,propy,container){
array.map(eventico => {eventico.gain = eventico[propy] * eventico.price})
let categories = new Set(array.map(eventico => eventico.category))
categories = [...categories]
let stats = categories.map(categoria => {
    let filtradoPorCategoria= array.filter(eventico => eventico.category===categoria)
    return reduceStats(filtradoPorCategoria,propy)
})
imprimirTr2(stats,container)
}

function reduceStats (array,prop) {
let initialStat = {
    category: "",
    gain: 0,
    capacity: 0,
    [prop]: 0
}
let stats = array.reduce((element1,element2) => {
    return {
        category: element2.category,
        gain: element1.gain + element2.gain,
        capacity: element1.capacity + element2.capacity,
        [prop]: element1[prop] + element2[prop]
    }
}, initialStat)
stats.prom = (100 * stats[prop] / stats.capacity).toFixed(2)
return stats
}
function imprimirTr2(stats,contenedor){
    stats.forEach(element => {
    contenedor.innerHTML +=
    ` <tr>
    <td>${element.category}</td>
    <td>${element.gain}</td>
    <td>${element.prom}</td>
  </tr>` });
}