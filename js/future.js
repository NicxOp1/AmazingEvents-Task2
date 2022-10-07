let containerFuture = document.getElementById("CardContainer")
for(let evento of data.events){
    if(data.currentDate>evento.date){
        let cardFuture = document.createElement("div")
    cardFuture.className = "card"
    cardFuture.style = "width: 17rem; height: auto;"
    cardFuture.innerHTML = `
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
    containerFuture.appendChild(cardFuture)
    }
}