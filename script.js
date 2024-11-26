// http used: https://jsonplaceholder.typicode.com/photos?_limit=6  27-chiamate

//Definisco i parametri della mia chiamata API
const params = {
    _limit: 6
}

//Prelevo il necessario dal codice html
const rowElem = document.querySelector(".row");
const overlayElem = document.querySelector(".overlay")
const overlayImgElem = document.querySelector(".overlay-img")
const overlayText = document.querySelector(".overlay p")

/////////////Functions////////////////////

//Creo una card da stampare in pagina
function createCard(card) {
    return `<div class="col">
        <div class="card">
            <img class="pin" src="./img/pin.svg"
                <div class="card-image">
                    <img class="img" src="${card.url}" alt="${card.title}" class="">
                </div>
                <div class="card-text">
                    <p class="text">${card.title}</p>
                </div>
            </div>
        </div>`;
}

//Quando clicco una foto, proprio quella foto e'mostrata all'interno dell’overlay.
const addClickImageListener = () => {
    const imgsElem = document.querySelectorAll(".img") 
    imgsElem.forEach(img => {
        img.addEventListener("click", () => {
            console.log("click", img.src); 
            overlayElem.classList.remove("hide")
            overlayText.innerText = img.alt;
            overlayImgElem.src = img.src; 
        })
    })
}

//Cliccando il button di chiusura, l’overlay scompare.
const clickBtnToRemoveOverlay = () => {
    const closeBtnElem = document.querySelector(".close-btn")
    closeBtnElem.addEventListener("click", () => {
        overlayElem.classList.add("hide")
    });
}

//Chiamata API
axios.get("https://jsonplaceholder.typicode.com/photos", { params }).then(resp => {
    console.log(resp.data)
    const cards = resp.data;
    cards.forEach((card) => rowElem.innerHTML += createCard(card)) 
    addClickImageListener();
    clickBtnToRemoveOverlay();
})





