'use strict'

const gElCanvas = document.querySelector('.canvas-editor')
const gCtx = gElCanvas.getContext('2d')


var  gTxtColor = document.querySelector("[name=fill-color]").style.color
var gStrkColor = document.querySelector("[name=stroke-color]").style.color




var gMeme =
{
    selectedImgId: 1,
    selectedLineIdx: 0,

    lines: [

        {
            txt: 'I sometimes eat Falafel',
            size: 30,
            align: 'center',
            color: 'black',
            font: 'Impact',
            pos: {
                x: gElCanvas.width / 2,
                y: 40,
            }

        },

    ]

}



// ------------------MODAL------------------//


// set valeus for current meme edit// 

function getMeme() {
    return gMeme
}

function setLineTxt(value) {

    gMeme.lines[gMeme.selectedLineIdx].txt = value

}


// SET TEXT COLORS //

// txt
function setTextColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

// strk
function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = color
}


// add new line to canvas
function addLine() {

    const newLine = createNewLine()
    gMeme.lines.splice(1, 0, newLine)
    console.log(newLine);
}

function createNewLine() {
    return {
        txt: "don't stop meme...",
        size: 40,
        align: 'center',
        color: 'black',
        font: 'Impact',
        pos: {
            x: gElCanvas.width / 2,
            y: gElCanvas.width / -80
        }
    }
}



//stwich between the lines

function switchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0

}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}


// function getLineWidth() {
//     return gMeme.lines[gMeme.selectedLineIdx].width
// }

