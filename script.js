function getComputerChoice() {
    const res = Math.floor(Math.random() * 100) + 1;
    if (res > 66) {
        const compObj = document.querySelector('.comp-obj')
        const img = document.createElement('img');
        img.src = 'img/scissors.png'; 
        img.width = '550'
        compObj.textContent = ''
        compObj.appendChild(img);
        return 'ножницы'
    }
    else if (res > 33) {
        const compObj = document.querySelector('.comp-obj')
        compObj.textContent = ''
        const img = document.createElement('img');
        img.src = 'img/emma-stone.png';
        img.width = '550'
        img.height = '550'

        compObj.appendChild(img); 
        return 'камень'
    }
    else {
        const compObj = document.querySelector('.comp-obj')
        compObj.textContent = ''
        const img = document.createElement('img');
        img.src = 'img/paper.png';
        img.width = '550'
        compObj.appendChild(img); 
        return 'бумага'
    }
}


function playRound(humanChoice, computerChoice) {
    const parMessage = document.querySelector('.p-msg')
    if (humanChoice === 'камень' && computerChoice === 'бумага') {
        computerScore += 1
        parMessage.textContent = `You've lost! Paper defeats stone.`}
    else if (humanChoice === 'камень' && computerChoice === 'камень') {
        parMessage.textContent = `It's a tie! Stone and stone.`}
    else if (humanChoice === 'камень' && computerChoice === 'ножницы') {
        humanScore += 1
        parMessage.textContent = `You've won! Stone defeats scissors.`}
    else if (humanChoice === 'ножницы' && computerChoice === 'бумага') {
        humanScore += 1
        parMessage.textContent = `You've won! Scissors beat paper.`}
    else if (humanChoice === 'ножницы' && computerChoice === 'камень') {
        computerScore += 1
        parMessage.textContent = `You've lost! Stone defeats scissors.`}
    else if (humanChoice === 'ножницы' && computerChoice === 'ножницы') {
        parMessage.textContent = `It's a tie! Scissors and scissors.`}
    else if (humanChoice === 'бумага' && computerChoice === 'бумага') {
        parMessage.textContent = `It's a tie! Paper and paper.`}
    else if (humanChoice === 'бумага' && computerChoice === 'камень') {
        humanScore += 1
        parMessage.textContent = `You've won! Paper defeats stone.`}
    else if (humanChoice === 'бумага' && computerChoice === 'ножницы') {
        computerScore  += 1
        parMessage.textContent = `You've lost! Scissors beat paper.`}
}


let humanScore = 0
let computerScore = 0

function playGame(e) {
    const imgElement = e.target
    const humanSelection = getHumanChoice(imgElement);
    const computerSelection = getComputerChoice();
    const yourScore = document.querySelector('.p-score-you')
    const compScore = document.querySelector('.p-score-comp')
    
    playRound(humanSelection, computerSelection)
    yourScore.textContent = `${humanScore}`
    compScore.textContent = `${computerScore}`
    console.log(humanScore, computerScore)
    if (humanScore > 4) {
        const parMessage = document.querySelector('.p-msg')
        parMessage.textContent = "You've won the round. You are the best."
        setTimeout(function() {
            location.reload();
        }, 5000);
        images.forEach((image) =>{
            image.removeEventListener('click', playGame)
        }) 
    }
    if (computerScore > 4) {
        const parMessage = document.querySelector('.p-msg')
        parMessage.textContent = "Computer has won"
        setTimeout(function() {
            location.reload();
        }, 5000);
        images.forEach((image) =>{
            image.removeEventListener('click', playGame)
        }) 
    }
    }
    // console.log(computerScore)
    



const images =  document.querySelectorAll('.img')

function  getHumanChoice(elem) {
    
    
    const imgDataObject = elem.getAttribute("data-object")
    console.log(imgDataObject)
    return imgDataObject
}

images.forEach((image) =>{
    image.addEventListener('click', playGame)
}) 