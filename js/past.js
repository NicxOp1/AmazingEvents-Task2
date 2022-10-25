let $containerPast = document.getElementById("CardContainer")
let $padreCheck = document.getElementById("javaScript-CheckPast")
let $inputSearch = document.getElementById("inputSearchPast")

async function fetchApi(){
  try{
    let data = await fetch('https://mh-amazing.herokuapp.com/amazing?time=past')
    evento = await data.json()
    console.log(evento)
    evento = evento.events
    console.log(evento)
    /* CHECKBOX*/
    crearCheckbox(evento,$padreCheck)
    imprimirCards(evento, $containerPast)
    $inputSearch.addEventListener( 'keyup', filtrar )
    $padreCheck.addEventListener( 'change', filtrar )
  }catch(err){
    console.log("no se puede mostrar el contenido debido a un error")
  }
}
fetchApi()
/* FUNCIONESSSSSSS */
function crearCheckbox( array , contenedor ){
  let f = array => array.category
    let categorias = new Set(array.filter(f).map(f))
  categorias.forEach( cate => {
      contenedor.innerHTML += `
          <label class="btn active">
              <input type="checkbox" class="me-2" value="${cate}" name="" id="" checked autocomplete="off"> ${cate}
          </label>
      `
  })
}
function imprimir (array){
      let card = document.createElement("div")//crea un div
      card.className = "card"//le da una clase al div 
      card.style = "width: 17rem; height: auto;"//le da un estilo al div 
      card.innerHTML = `
      <div class="inner">
      <img src="${array.image}" class="card-img-top" alt="${array.name}">
    </div>
    <div class="card-body">
      <h5 class="card-title">${array.name}</h5>
      <p class="card-text">${array.description}</p>
      <p><span>Price</span> $ ${array.price}</p>
      <a href="./details.html?events=${array.id}" class="btn btn-primary">See more details</a>
    </div>
      `
    return card
    }
  
    function filtrar(){
      let checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map( ele => ele.value)
      let filtradosPorCategory = evento.filter( e => checked.includes( e.category ) || checked.length === 0)
      let filtradosPorSearch = filtradosPorCategory.filter( e => e.name.toLowerCase().includes( $inputSearch.value.toLowerCase() ) )
      imprimirCards(filtradosPorSearch, $containerPast)
   }
   function imprimirCards( array, contenedor){
    contenedor.innerHTML = ''
    if(array.length > 0) {
        let fragment = document.createDocumentFragment()
        array.forEach( array => fragment.appendChild( imprimir(array)))
        contenedor.appendChild(fragment)
    }else{
        contenedor.innerHTML = '<h2 class="altura"> No existen eventos que coincidan con su busqueda </h2>'
    }
}
