import { useState } from 'react'
import GameLayout from './Components/GameLayout'

function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [isGameEnded, setIsGameEnded ] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [field, setField] = useState([
  '', '', '',
  '', '', '',
  '', '', '',
])

function step (useState, index, currentPlayer) {
	const newState = [...useState]
	newState[index] = currentPlayer
	setField(newState)
	if (currentPlayer === 'X') {
		setCurrentPlayer('O')
	} else {
		setCurrentPlayer('X')
	}
}

  return (
    <>
	<GameLayout field={field} setField={setField} isDraw={isDraw} setIsDraw={setIsDraw} isGameEnded={isGameEnded} setIsGameEnded={setIsGameEnded} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} step={step}></GameLayout>
	</>
  )
}

export default Game
