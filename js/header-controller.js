'use strict'


function toggleHamburger() {
    document.body.classList.toggle('menu-open')
    const elBtn = document.querySelector('.hamburger-btn')
    elBtn.innerText = elBtn.innerText === '☰' ? '✖' : '☰'
}


function onActivePage(el) {
    const elLink = document.querySelector('a.active')
    elLink.classList.remove('active')
    el.classList.add('active')
}

// back to main screan //
function onBackToGallery () {

    document.querySelector('.editor-page').style.display = 'none'
    renderGallery()
    document.querySelector('.gallery-container').style.display = 'block'

}

// go to editor //
function onGoToEditor () {

    document.querySelector('.gallery-container').style.display = 'none'
    renderEmptyEditor()

}