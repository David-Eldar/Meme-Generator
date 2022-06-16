'use strict'

// const elImgGallery = document.querySelector('.gallery-container')
// const elEditor =  document.querySelector('.editor-page')

const elCanvas = document.querySelector('.canvas-editor')
const gCtx = elCanvas.getContext('2d')





function renderEditor() {
    const currImg = getCurrImg()

    const memeImg = new Image()
    memeImg.onload = function () {
        gCtx.drawImage(memeImg, 0, 0, elCanvas.width, elCanvas.height)
        // renderText()
    }
    memeImg.src = currImg.url
    console.log(currImg);
    document.querySelector('.editor-page').style.display = 'block'


}


function renderEmptyEditor() {
    document.querySelector('.editor-page').style.display = 'block'
}





