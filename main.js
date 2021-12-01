// vars

const $board = document.querySelector('.board')
const $score = document.querySelector('#score')
const cards = [
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    }   
]

let flippedCards = []
let flippedCardsIds = []
let matchedCards = []

// Create table/board

function newBoard() {
    // Shuffle cards
    cards.sort(() => .5 - Math.random())
    
    for (let card in cards) {
        let img = document.createElement('img')
        img.setAttribute('src','./images/card-top.png')
        img.setAttribute('data-id',card)
        img.addEventListener('click',flipCard)
        $board.appendChild(img)
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    flippedCards.push(cards[cardId].name)
    flippedCardsIds.push(cardId)
    this.setAttribute('src',cards[cardId].img)
    if (flippedCards.length === 2) {
        setTimeout(isMatch, 500)
    }
}

function isMatch() {
    let cards = document.querySelectorAll('img') 
    const firstCardId = flippedCardsIds[0]
    const secondCardId = flippedCardsIds[1]

    if (flippedCards[0] === flippedCards[1]){
        alert(`It's a match!`)
        cards[firstCardId].setAttribute('src','./images/blank.png')
        cards[firstCardId].classList.add('unclickable')
        cards[secondCardId].setAttribute('src','./images/blank.png')
        cards[secondCardId].classList.add('unclickable')
        matchedCards.push(flippedCards)
    } else {
        alert(`Try again!`)
        cards[firstCardId].setAttribute('src','./images/card-top.png')
        cards[secondCardId].setAttribute('src','./images/card-top.png')
    }

    flippedCards = []
    flippedCardsIds = []
    $score.textContent = matchedCards.length

    if (matchedCards.length === cards.length / 2){
        $score.textContent = `You've matched every card! Nice job!`
        matchedCards = []
        const $btn = document.createElement('button')
        $btn.textContent = 'Play Again?'
        $score.appendChild($btn)
        $btn.addEventListener('click',() => {
            $board.innerHTML = null
            $score.textContent = null
            newBoard()
        })
        
    }

}

newBoard()


