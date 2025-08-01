import { useState } from 'react'
import GameLayout from './Components/GameLayout'

function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [isGameEnded, setIsGameEnded ] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [field, setField] = useState([
  '', '', '',
  '', '', '',
  '', '', '',
])

function repeat () {
  setField([
  '', '', '',
  '', '', '',
  '', '', '',
])
  setCurrentPlayer('X')
  setIsDraw(false)
  setIsGameEnded(false)
  
}




function step (useState, index, currentPlayer) {

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

	const newState = [...useState]

	

  if (newState[index] === 'X' || newState[index] === 'O'){
   return 
  }

  newState[index] = currentPlayer
	setField(newState)

  const result = [];
  let theEnd = false;

  newState.forEach((el, i) => {
    if (el === currentPlayer) {
      result.push(i)
    }
  })

  WIN_PATTERNS.forEach((el) => {
    const allElementsPresent = el.every(item => result.includes(item));
    if (allElementsPresent) {
      theEnd = true
      setIsGameEnded(true)
    }
      let counter = 0
      newState.forEach((el) => {
      if (el) {
      counter= counter + 1
    }
    })
    if (counter === 9 && !allElementsPresent) {
      setIsDraw(true)
      setIsGameEnded(true)
    }
  })
	if (currentPlayer === 'X' && theEnd === false) {
		setCurrentPlayer('O')
	} else if (currentPlayer === 'O' && theEnd === true){
		setCurrentPlayer('O')
	} else {
    setCurrentPlayer('X')
  }



}


  return (
    <>
	<GameLayout field={field} setField={setField} isDraw={isDraw} setIsDraw={setIsDraw} isGameEnded={isGameEnded} setIsGameEnded={setIsGameEnded} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} step={step} repeat={repeat} isButtonDisabled={isButtonDisabled} setIsButtonDisabled={setIsButtonDisabled}></GameLayout>
	</>
  )
}

export default Game
