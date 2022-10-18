let container = document.getElementById("CardContainer")
console.log(container)
function imprimir (array){
container.innerHTML= " " //aca se borra todo el contenedor asi esta la hoja en blanco para porder cargar los datos nuevos(filtrados)
  array.forEach((e)=>{//recorre el arreglo
    
    let card = document.createElement("div")//crea un div
    card.className = "card"//le da una clase al div 
    card.style = "width: 17rem; height: auto;"//le da un estilo al div 
    card.innerHTML = `
    <div class="inner">
    <img src="${e.image}" class="card-img-top" alt="${e.name}">
  </div>
  <div class="card-body">
    <h5 class="card-title">${e.name}</h5>
    <p class="card-text">${e.description}</p>
    <p><span>Price</span> $ ${e.price}</p>
    <a href="#" class="btn btn-primary">Buy</a>
  </div>
    `//carga los elementos con sus respectivas variables al div 
    container.appendChild(card)//inserta el div dentro del contenedor 
  })}
imprimir(data.events)//carga todas las tarjetas 

let categorias = new Set(data.events.map((cate)=>cate.category))//entra dentro de el objeto de eventos , recorre las categorias y evita repeticiones con new set
console.log(categorias)
let padreCheck = document.getElementById("javaScript-Check")// busca el contenedor de checkboxes
categorias.forEach(element => {//itera sobre las categorias extraidas
  padreCheck.innerHTML +=//inserta dentro del contenedor de checkbox respectivas con sus valores correspondientes que fueron iterados sobre las categorias
  `
  <div class="d-flex p-2">
        <input class="form-check-input p-2 " type="checkbox" value="${element}" id="firstCheckbox">
        <label class="form-check-label" for="firstCheckbox">${element}</label>
      </div>
  `
});
function condicion (array){// en esta linea crea una funcion que recorrera el array de eventos 
  let varia = document.querySelectorAll('input[type="checkbox"]')//extrae todos los input (checkbox)
  let a = Array.from(varia).filter(item=>item.checked).map((e)=>e.value)//convierte los inputs en arreglos , para asi filtrarlos por estado y
  //luego recorrerlos con .map a los valores del checkbox
  if(a.length>0){//condicionamos a que si existe algun valor de checkbox realice la siguiente operacion
    let b= array.filter(e=>a.includes(e.category)) // creo una variable la cual filtra al array de eventos y pregunta si a ( que serian los value de checkbox ) incluye alguna categoria de data[events.category]
    return b //devuelve la operacion que fue cargada en la variable 
  }
}
 padreCheck.addEventListener("change",e=>{//creamos evento( parado sobre el contenedor de checkboxes) que cambie
  let fC= filtrado(data.events,inputSearch.value) //carga en una variable la funcion filtrado que recibe el array y el texto a comparar para cargar las tarjetas 
  imprimir(condicion(fC))//imprime las cards , si es que los valores cargados en fc se trabajan sobre la funcion condicion
 })





let formulario = document.getElementById("searchForm") //buscamos a traves del boton
let inputSearch = document.getElementById("inputSearch")//buscamos al input de search

formulario.addEventListener("click",(e)=>{//creamos evento que dice que cuando clickeemos el boton search, henere esta funcion
  let bar = filtrado(data.events,inputSearch.value) // carga en var el filtrado entre data.events e inputSearch.value
  imprimir(bar)//imprime los resultados de la funcion filtrado
})
function filtrado(array,texto){//creamos una funcion que va a filtrar entre los datos de un arreglo y el texto ingresado en el input de search
  let variable = array.filter((e)=>e.name.toLowerCase().includes(texto.toLowerCase()))
  //en la linea 63 se hace un filter al array ingresado, y busca el nombre del array , lo convierte en minuscula , y pregunta : si ese valor incluye (el texto ingresado pasado a minuscula )
  return variable//devuelve su valor 
}

 



















// CARD ORIGINAL EN HTML
/* <div class="card" style="width: 17rem; height: auto;">
        <div class="inner">
          <img src="./assets/img/Food_Fair.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Festival of the collectivities</h5>
          <p class="card-text">Enjoy your favorite dishes from different countries in a unique event for the whole
            family.</p>
          <p><span>Price</span> $5</p>
          <a href="#" class="btn btn-primary">Buy</a>
        </div>
      </div> */