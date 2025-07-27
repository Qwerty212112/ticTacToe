import styles from './../../App.module.css'

function InformationLayout ({isDraw, isGameEnded, currentPlayer}) {
	return (
		<>
		<div className={styles.text}>{isDraw ? "Ничья" : isGameEnded ? `Победа:${currentPlayer}` : `Ходит ${currentPlayer}`} </div>
		</>
	)
}

export default InformationLayout

