
const XPLAYER = 'X'
const OPLAYER = 'O'

let boxes = Array.from(document.getElementsByClassName('box'))
let currentPlayer = XPLAYER
let spaces = Array(9).fill(null)

var resetButton = document.querySelector('.resetBtn')

boxes.forEach(boxes => boxes.addEventListener('click', boxClicked))

function boxClicked(e){
    const id = e.target.id
    if(spaces[id] === null) {
        e.target.innerText = currentPlayer  
        
        if (playerHasWon !== false) {
            //alert(`${currentPlayer} player has WON`)
        }  
        currentPlayer = currentPlayer == XPLAYER? OPLAYER:XPLAYER
    }        
};

const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

function playerHasWon(){
    for ( const combo of winningCombination) {
       let [a,b,c] = combo
    }
    if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
        return [a,b,c]
    }
    
    return false
   
}

resetButton.addEventListener('click', resetFunc);

function resetFunc(){
    spaces.fill(null);
    boxes.forEach(boxes => boxes.innerText = '')
}
//this file is incomplete 
