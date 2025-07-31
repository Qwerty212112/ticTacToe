import FieldLayout from './FieldLayout'


function Field ({field, setField, step, currentPlayer, isGameEnded, isButtonDisabled, setIsButtonDisabled}) {
	return (
		<>
		<FieldLayout field={field} setField={setField} step={step} currentPlayer={currentPlayer} isGameEnded={isGameEnded} isButtonDisabled={isButtonDisabled} setIsButtonDisabled={setIsButtonDisabled}/>
		</>
	)
}

export default Field
