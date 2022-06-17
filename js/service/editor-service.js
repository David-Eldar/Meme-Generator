'use strict'

const gElCanvas = document.querySelector('.canvas-editor')
const gCtx = gElCanvas.getContext('2d')



var gMeme =
{
    selectedImgId: 1,
    selectedLineIdx: 0,
    
    fontFamily: 'Impact',
    
    lines: [
        
        {
            txt: 'I sometimes eat Falafel',
            size: 40,
            align: 'center',
            color: 'black',
            // fontSize: '50px',
            pos: {
                x: gElCanvas.width / 2,
                y: 80
            }

        },

    ]

}


// set valeus for current meme edit// 

function getMeme() {
    return gMeme
}

function setTextLine(value) {

    const line = gMeme.lines[gMeme.selectedLineIdx]
    line.txt = value

}