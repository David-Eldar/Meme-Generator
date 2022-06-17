'use strict'

var gImgs = [
    {
        id: 1,
        url: 'img/1.jpg',
        keywords: ['politics', 'usa']
    },
    {
        id: 2,
        url: 'img/2.jpg',
        keywords: ['dogs', 'puppy']
    },
    {
        id: 3,
        url: 'img/3.jpg',
        keywords: ['dogs', 'babies']
    },
    {
        id: 4,
        url: 'img/4.jpg',
        keywords: ['cats', 'tech']
    },
    {
        id: 5,
        url: 'img/5.jpg',
        keywords: ['strength', 'funny']
    },
    {
        id: 6,
        url: 'img/6.jpg',
        keywords: ['tv', 'history']
    },
    {
        id: 7,
        url: 'img/7.jpg',
        keywords: ['babies', 'funny']
    },
    {
        id: 8,
        url: 'img/8.jpg',
        keywords: ['classic', 'movies']
    },
    {
        id: 9,
        url: 'img/9.jpg',
        keywords: ['babies', 'evil']
    },
    {
        id: 10,
        url: 'img/10.jpg',
        keywords: ['politics', 'evil']
    },
    {
        id: 11,
        url: 'img/11.jpg',
        keywords: ['sports', 'people']
    },
    {
        id: 12,
        url: 'img/12.jpg',
        keywords: ['tv', 'israel']
    },
    {
        id: 12,
        url: 'img/13.jpg',
        keywords: ['usa', 'movies']
    },
    {
        id: 14,
        url: 'img/14.jpg',
        keywords: ['tech', 'movies']
    },
    {
        id: 15,
        url: 'img/15.jpg',
        keywords: ['movies', 'classic']
    },
    {
        id: 16,
        url: 'img/16.jpg',
        keywords: ['tv', 'classic']
    },
    {
        id: 17,
        url: 'img/17.jpg',
        keywords: ['politics', 'russia']
    },
    {
        id: 18,
        url: 'img/18.jpg',
        keywords: ['movies', 'classic']
    },
];

var gSearchFilter = ''

function setSearchFilter(value) {
    gSearchFilter = value.toLowerCase()
}

function showImgs() {
    if (!gSearchFilter) return gImgs
    return gImgs.filter(img => img.keywords.includes(gSearchFilter))
}


function getCurrImg() {
    return  gImgs.find(img => img.id === gMeme.selectedImgId)
    
}


function setCurrImg(imgId) {
    gMeme.selectedImgId = imgId
}





function searchByKeyWord(){
    console.log('check');

    const textSearch = document.querySelector('.text-input').value
    setSearchFilter(textSearch)
    renderGallery()
    // // keywordsCountMapUpdate(textSearch)
    // renderSuggestion(textSearch)
}


    

