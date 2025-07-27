import styles from '../../App.module.css'
function FieldLayout ({field, step, currentPlayer}) {
	return (
		<>
			<div className={styles.containerCell}>
				<ul className={styles.listCell}>
					{field.map ((position, index) => (
						<li className={styles.listItem} key={index}>
						<button className={styles.button} onClick={() => step(field, index, currentPlayer)}>{position}</button>
					</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default FieldLayout

// <li className={styles.listItem} key={field}>
						// <button className={styles.button}></button>
					// </li>
