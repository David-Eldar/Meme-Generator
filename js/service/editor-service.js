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
            size: 30,
            align: 'center',
            color: 'black',
            // fontSize: '50px',
            pos: {
                x: gElCanvas.width / 2,
                y: 40
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

    const line = gMeme.lines[gMeme.selectedLineIdx]
    line.txt = value

}

//stwich between the lines

// function switchLine() {
//     gMeme.selectedLineIdx++
//     if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0

// }




// function addLine() {

//     const newLine = createNewLine()
//     gMeme.lines.splice(1, 0, newLine)
// }

// function createNewLine() {
//     return {
//         txt: "don't stop meme...",
//         size: 40,
//         align: 'center',
//         color: 'black',
//         font: 'Impact',
//         // pos: {
//         //     x: gElCanvas.width / 2,
//         //     y: gElCanvas.width / -80
//         // }
//     }
// }

// function deleteLine() {
//     gMeme.lines.splice(gMeme.selectedLineIdx, 1)
// }


// function getLineWidth() {
//     return gMeme.lines[gMeme.selectedLineIdx].width
// }

