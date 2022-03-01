import React from 'react'
import styles from './HorizontalLine.module.css'

type Props = {}

function HorizontalLine({}: Props) {
	return (
		<div className={styles.lineContainer}>
			<div className={styles.line}></div>
		</div>
	)
}

export default HorizontalLine
