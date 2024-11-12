function getComputerChoice() {
    const res = Math.floor(Math.random() * 100) + 1;
    if (res > 66) {
        return 'ножницы'
    }
    else if (res > 33) {
        return 'камень'
    }
    else {
        return 'бумага'
    }
}

function getHumanChoice() {
    let answer = parseInt(prompt("Введите цифру от 1 до 3: 1 - камень, 2 - ножницы 3 - бумага"));
    if (answer == 1) {
        answer = 'камень'
        return answer
    }
    else if (answer == 2) {
        answer = 'ножницы'
        return answer
    }
    else {
        answer = 'бумага'
        return answer
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'камень' && computerChoice === 'бумага') {
        computerScore += 1
        alert(`Вы проиграли! Бумага побеждает камень.Счет: ${humanScore} ${computerScore}`)}
    else if (humanChoice === 'камень' && computerChoice === 'камень') {
        humanScore += 1
        computerScore += 1
        alert(`Ничья! Камень и камень.Счет: ${humanScore} ${computerScore}`)}
    else if (humanChoice === 'камень' && computerChoice === 'ножницы') {
        humanScore += 1
        alert(`Вы выиграли! Камень побеждает ножницы.Счет: ${humanScore} ${computerScore}`)}
    else if (humanChoice === 'ножницы' && computerChoice === 'бумага') {
        humanScore += 1
        alert(`Вы выиграли! Ножницы побеждают бумагу.Счет: ${humanScore} ${computerScore}`)}
    else if (humanChoice === 'ножницы' && computerChoice === 'камень') {
        computerScore += 1
        alert(`Вы проиграли! Камень побеждает ножницы.Счет: ${humanScore} ${computerScore}`)}
    else if (humanChoice === 'ножницы' && computerChoice === 'ножницы') {
        humanScore += 1
        computerScore += 1
        alert(`Ничья! Ножницы и ножницы.Счет: ${humanScore} ${computerScore}`)}
    else if (humanChoice === 'бумага' && computerChoice === 'бумага') {
        humanScore += 1
        computerScore += 1
        alert(`Ничья! Бумага и бумага.Счет: ${humanScore} ${computerScore}`)}
    else if (humanChoice === 'бумага' && computerChoice === 'камень') {
        humanScoree += 1
        alert(`Вы выиграли! Бумага побеждает камень.Счет: ${humanScore} ${computerScore}`)}
    else if (humanChoice === 'бумага' && computerChoice === 'ножницы') {
        computerScore  += 1
        alert(`Вы проиграли! Ножницы побеждает бумагу.Счет: ${humanScore} ${computerScore}`)}
}


let humanScore = 0
let computerScore = 0

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
    console.log(humanScore, computerScore)
    // console.log(computerScore)

}

playGame()
playGame()
playGame()
playGame()
playGame()