const params {
    _limit: 6
}

axios.get(   , {params}).then(resp =>{
    console.log(resp.data)
    const cards = resp.data;
    cards.forEach((card) =>{
        rowElem.innerHTML += `
        `
    })


})

