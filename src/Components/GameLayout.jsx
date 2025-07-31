import Information from './Information/Information'
import Field from './Field/Field'

function GameLayout ({field, setField, isDraw, setIsDraw, isGameEnded, setIsGameEnded, currentPlayer, setCurrentPlayer, step, repeat, isButtonDisabled, setIsButtonDisabled}) {
	return (
		<>
			<Information isDraw={isDraw} setIsDraw={setIsDraw} isGameEnded={isGameEnded} setIsGameEnded={setIsGameEnded} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} repeat={repeat}/>
			<Field field={field} setField={setField} step={step} currentPlayer={currentPlayer} isGameEnded={isGameEnded} repeat={repeat} isButtonDisabled={isButtonDisabled} setIsButtonDisabled={setIsButtonDisabled}/>
		</>
	)
}

export default GameLayout
