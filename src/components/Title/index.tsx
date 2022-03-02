import React from 'react'
import styles from './Title.module.css'
type TProps = {
	title: string
}

function Title({title}: TProps) {
	return <h2 className={styles.title}>{title}</h2>
}

export default Title
