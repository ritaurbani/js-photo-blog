// http used: https://jsonplaceholder.typicode.com/photos?_limit=6  27-chiamate

const params = {
    _limit: 6
}

const rowElem = document.querySelector(".row");


    
function renderCard(card)  {

    return `<div class="col">
        <div class="card">
            <div class="card-image">
                <img src="${card.url}" alt="" class="">
            </div>
            <div class="card-text">
                <p class="text">${card.title}</p>
            </div>
        </div>
    </div>`;
}


axios.get("https://jsonplaceholder.typicode.com/photos", { params }).then(resp => {
    console.log(resp.data)
    const cards = resp.data;
    console.log(cards);
    cards.forEach((card) => rowElem.innerHTML += renderCard(card))
})


