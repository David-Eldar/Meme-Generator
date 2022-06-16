'use strict'




const elGallery = document.querySelector('.img-gallery')

function onInit() {
    renderGallery()
}


//render main view//

function renderGallery() {

    const imgs = showImgs()
    const strHtmls = imgs.map(img =>
        `<img onClick="onImgSelect(${img.id})"src=${img.url} alt="meme">`)
    elGallery.innerHTML = strHtmls.join('')

}




// when image is clicked //

function onImgSelect(imgId) {
    setCurrImg(imgId)
    document.querySelector('.gallery-container').style.display = 'none'
    renderEditor()
    // goToEditor()
}







