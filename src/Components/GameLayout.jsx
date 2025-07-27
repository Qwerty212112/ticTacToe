import Information from './Information/Information'
import Field from './Field/Field'

function GameLayout ({field, setField, isDraw, setIsDraw, isGameEnded, setIsGameEnded, currentPlayer, setCurrentPlayer, step}) {
	return (
		<>
			<Information isDraw={isDraw} setIsDraw={setIsDraw} isGameEnded={isGameEnded} setIsGameEnded={setIsGameEnded} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}/>
			<Field field={field} setField={setField} step={step} currentPlayer={currentPlayer}/>
		</>
	)
}

export default GameLayout
