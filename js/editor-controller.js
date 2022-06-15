'use strict'


function renderCanvas() {
    var elImg = document.querySelector('.selected-img')
    
    elImg.onload = () => {

        gCtx.drawImage (elImg,0,0, gElCanvas.width, gElCanvas.hight )
    }

}