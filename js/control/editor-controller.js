'use strict'

// ------------------------------------------------------------//
//            ------------RENDER-----------                   //



// by clicking an image open it in editor

function renderMeme() {
    const currImg = getCurrImg()

    const memeImg = new Image()
    memeImg.onload = function () {
        gCtx.drawImage(memeImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderText()
    }
    memeImg.src = currImg.url
    document.querySelector('.editor-page').style.display = 'block'

}

// by clicking moving to editor page (the editor is empty 

function renderEditor() {
    document.querySelector('.editor-page').style.display = 'block'
}

// get gMeme and show written text on canvas

function renderText() {

    const meme = getMeme()


    meme.lines.forEach((line) => {
        gCtx.font = line.size + `px ${meme.fontFamily}`
        gCtx.textAlign = line.align
        gCtx.fillStyle = line.color

        gCtx.fillText(line.txt, line.pos.x, line.pos.y)
        gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
    })



}



//----------------------------------------------------------------------//


// control panel buttons and events //



function onTextBar(value) {
  setLineTxt(value)
    renderMeme()


}

function onSwitchLine() {
  switchLine()
  renderMeme()
}

function onAddLine() {
    addLine()
    clearCanvas()
    renderMeme()
}


function onDeleteLine() {
    deleteLine()
    renderMeme()
}




//clear canvas
function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

//canvas controllers
function addListeners() {
    addMouseListeners()
    addTouchListeners()
  }
  function addMouseListeners() {
    gCanvas.addEventListener("mousemove", onMove)
    gCanvas.addEventListener("mousedown", onDown)
    gCanvas.addEventListener("mouseup", onUp)
  }
  function addTouchListeners() {
    gCanvas.addEventListener("touchmove", onMove)
    gCanvas.addEventListener("touchstart", onDown)
    gCanvas.addEventListener("touchend", onUp)
  }
  function onDown(ev) {
    gIsDrag = true
    console.log("ev", ev)
    const { offsetX, offsetY } = ev
    gLastPos.x = offsetX
    gLastPos.y = offsetY
    document.body.style.cursor = "grabbing"
  }
  function onMove(ev) {
    if (!gIsDrag) return
    console.log("ev", ev)
    draw(ev)
    const { offsetX, offsetY } = ev
    gLastPos.x = offsetX
    gLastPos.y = offsetY
    document.body.style.cursor = "grabbing"
  }
  function onUp() {
    gIsDrag = false
    document.body.style.cursor = "pointer"
  }









