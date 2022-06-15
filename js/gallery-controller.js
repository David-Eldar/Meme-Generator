'use strict'
var gElCanvas
var gCtx

function onInit() {
    gElCanvas = document.querySelector('.canvas-editor')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
}

function renderGallery() {
    const imgIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    const elImgGallery = document.querySelector('.gallery-container')
    const elSearch = document.querySelector('.search-bar')
    const elSelectedImg = document.querySelector('.selected-img')
    const elCanvas = document.querySelector('.canvas-container')

    imgIdx.forEach((i) => {
        const elImg = document.querySelector('img')
        elImg.src = `img/${i}.jpg`
        elImg.classList.add('meme-img')

        elImg.addEventListener('click', () => {

            elSelectedImg.src = `img/${i}.jpg`
            renderCanvas()
            elImgGallery.style.display = 'none'
            elSearch.style.display = 'none'
            elCanvas.style.display = 'block'
            elCanvas.style.display = 'block'
            elSelectedImg.style.display = 'none'

        })

        elImgGallery.appendChild(elImg)

    })
}





