import styles from './../../App.module.css'

function InformationLayout ({isDraw, isGameEnded, currentPlayer, repeat}) {
	return (
		<>
		<div className={styles.text}>{isDraw ? "Ничья" : isGameEnded ? `Победа:${currentPlayer}` : `Ходит ${currentPlayer}`} </div>
		<button className={styles.buttonRepeat} disabled={isDraw ? false : isGameEnded ? false : true} onClick={() => repeat()} > Начать заново</button>
		</>
	)
}

export default InformationLayout

