import styles from '../../App.module.css'
function FieldLayout ({field, step, currentPlayer, isGameEnded, isButtonDisabled, setIsButtonDisabled}) {
	return (
		<>
			<div className={styles.containerCell}>
				<ul className={styles.listCell}>
					{field.map ((position, index) => (
						<li className={styles.listItem} key={index}>
						<button className={styles.button} disabled={isButtonDisabled || isGameEnded} onClick={() => step(field, index, currentPlayer, position)} >{position}</button>
					</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default FieldLayout