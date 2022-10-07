let container = document.getElementById("CardContainer")
console.log(container)
for(let evento of data.events){
    let card = document.createElement("div")
    card.className = "card"
    card.style = "width: 17rem; height: auto;"
    card.innerHTML = `
    <div class="inner">
    <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
  </div>
  <div class="card-body">
    <h5 class="card-title">${evento.name}</h5>
    <p class="card-text">${evento.description}</p>
    <p><span>Price</span> $ ${evento.price}</p>
    <a href="#" class="btn btn-primary">Buy</a>
  </div>
    `
    container.appendChild(card)
}







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