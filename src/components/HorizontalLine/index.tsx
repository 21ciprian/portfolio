import React from 'react'
import styles from './HorizontalLine.module.css'

type Props = {}

function HorizontalLine({}: Props) {
	return (
		<div className={styles.lineContainer}>
			<hr className={styles.line} />
		</div>
	)
}

export default HorizontalLine
