let computerChoiceEl = document.getElementById("computer-choice")
const userChoiceEl = document.getElementById("user-choice")
const resultEl = document.getElementById('result')
const selections = document.querySelectorAll('button')
let userSelection;
let computerChoice;
let result ;

let wins = 0;
let losses = 0; 

// get user choice , start game 
selections.forEach( selection => selection.addEventListener('click', (event) => {
  userSelection = event.target.id
  userChoiceEl.innerHTML =`Your choice : ${userSelection}`
  console.log(`user choice : ${userSelection}`)
  getComputerChoice()
  checkWin()
}))

// get computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() *3) + 1 
  
  if (randomNumber === 1 ){
    computerChoice = 'rock'
  } else if (randomNumber = 2){
    computerChoice = 'scissors'
  } else if (randomNumber = 3){
    computerChoice = 'paper'
  }
  computerChoiceEl.innerHTML = `Computer choice : ${computerChoice}`
  console.log(`computer choice : ${computerChoice}`)
}

// check winner
function checkWin(){
  if (computerChoice ===  userSelection ){
    result = "It's a draw 😐"
  } else if ( computerChoice === "paper" && userSelection === "rock"){
    result = "Computer wins 😟"
    losses +=1
  } else if (computerChoice === "rock" &&  userSelection  === "scissors"){
    result = "Computer wins 😟"
    losses +=1
  } else if (computerChoice === "scissors" &&  userSelection  === "paper"){
      result = "Computer wins 😟 "
      losses +=1
  } else {
     result = "you win! 😀"
     wins += 1 
  }
  resultEl.innerHTML = result;
  console.log(`winner :  ${result}`)
  console.log(`winnes : ${wins} | losses ${losses} `)
}