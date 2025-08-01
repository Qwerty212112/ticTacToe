import InformationLayout from './InformationLayout'


function Information ({isDraw, setIsDraw, isGameEnded, setIsGameEnded, currentPlayer, setCurrentPlayer, repeat}) {

	return (
		<>
		<InformationLayout isDraw={isDraw} setIsDraw={setIsDraw} isGameEnded={isGameEnded} setIsGameEnded={setIsGameEnded} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} repeat={repeat}/>
		</>
	)
}

export default Information

