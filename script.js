// http used: https://jsonplaceholder.typicode.com/photos?_limit=6  27-chiamate

const params = {
    _limit: 6
}

const rowElem = document.querySelector(".row");


axios.get("https://jsonplaceholder.typicode.com/photos", { params }).then(resp => {
    console.log(resp.data)
    const card = resp.data;
    const [title, url] = card // array
    console.log(card);
    let cardResult = "";
    card.forEach((curItem) => {
        cardResult += `
    <div class="col">
        <div class="card">
            <div class="card-image">
                <img src="${curItem.url}" alt="" class="">
            </div>
            <div class="card-text">
                <h4 class="text">${curItem.title}</h4>
            </div>
        </div>
    </div>`;

    })

    rowElem.innerHTML = cardResult

})

