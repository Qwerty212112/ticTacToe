import FieldLayout from './FieldLayout'


function Field ({field, setField, step, currentPlayer }) {
	return (
		<>
		<FieldLayout field={field} setField={setField} step={step} currentPlayer={currentPlayer}/>
		</>
	)
}

export default Field
