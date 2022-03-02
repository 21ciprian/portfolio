import React from 'react'
import styles from './Button.module.css'

export type BProps = {
	name: string
	link: string
}

function Button({name, link}: BProps) {
	return (
		<button className={styles.button}>
			<a href={link} target='_blank' rel='noreferrer'>
				{name}
			</a>
		</button>
	)
}

export default Button
