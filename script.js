// http used: https://jsonplaceholder.typicode.com/photos?_limit=6  27-chiamate


const params = {
    _limit: 6
}

const rowElem = document.querySelector(".row");
const overlayElem = document.querySelector(".overlay")
const overlayImgElem = document.querySelector(".overlay-img")
const overlayText = document.querySelector(".overlay p")

/////////////Functions////////////////////

function renderCard(card) {

    return `<div class="col">
        <div class="card" data-post-id="${card.id}">
            <div class="card-image">
                <img class="img" src="${card.url}" alt="${card.title}" class="">
            </div>
            <div class="card-text">
                <p class="text">${card.title}</p>
            </div>
        </div>
    </div>`;
}

//Cliccando una qualunque foto. L’overlay ricompare.
const addClickImageListener = () => {
    const imgsElem = document.querySelectorAll(".img") //queste posso mettere anche fuori?
    // console.log(imgsElem);
    imgsElem.forEach(img => {
        img.addEventListener("click", () => {
            console.log("click", img.src); //rivedere questa cosa-not too clear
            overlayElem.classList.remove("hide")
            overlayText.innerText = img.alt;
            overlayImgElem.src = img.src; // qui sostituisci il valore di src di overlayImgElem con l'src dell'immagine cliccata
        })
    })
}



//Cliccando il button di chiusura, l’overlay scompare nuovamente.
const clickBtnToRemoveOverlay = () => {
    const closeBtnElem = document.querySelector(".close-btn")
    closeBtnElem.addEventListener("click", () => {
        overlayElem.classList.add("hide")
    });
}

//quando clicco una foto, proprio quella foto e'mostrata all'interno dell’overlay.




axios.get("https://jsonplaceholder.typicode.com/photos", { params }).then(resp => {
    console.log(resp.data)
    const cards = resp.data;
    cards.forEach((card) => rowElem.innerHTML += renderCard(card))
    addClickImageListener();
    clickBtnToRemoveOverlay();
})





