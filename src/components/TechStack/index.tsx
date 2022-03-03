import React from 'react'
import software from '../../assets/software.svg'
import Title from '../Title'
import styles from './TechStack.module.css'

function TechStack() {
	return (
		<article className={styles.tech}>
			<div className={styles.image__container}>
				{' '}
				<img src={software} className={styles.software} alt='software' />
			</div>
			<Title title='TECH-STACK' />
		</article>
	)
}

export default TechStack
