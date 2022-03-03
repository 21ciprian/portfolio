import React from 'react'
import styles from './Footer.module.css'

function Footer() {
	const currentTime = new Date().getUTCFullYear()
	return (
		<footer className={styles.footer}>
			<p>
				<span>&copy;</span> Designed by Ciprian Andrei{' '}
				<span>{currentTime}</span>
			</p>
		</footer>
	)
}

export default Footer
