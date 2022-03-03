import React from 'react'
import software from '../../assets/software.svg'
import Title from '../Title'
import styles from './TechStack.module.css'

function TechStack() {
	return (
		<article className={styles.tech__wrapper}>
			<section className={styles.tech__container}>
				<div className={styles.image__container}>
					{' '}
					<img src={software} className={styles.software} alt='software' />
				</div>
				<section className={styles.tech__text}>
					<Title title='TECH-STACK' />
					<h5>Languages:</h5>
					<p>Javascript ES6+, CSS3, HTML5</p>
					<br />
					<h5>Front-End:</h5>
					<p>
						React, Typescript, Styled-Components, Material UI, AOS, Sass(SCSS),
						Bootstrap
					</p>

					<br />
					<h5>Back-end:</h5>
					<p>
						Node.js, Express, REST API, Google Firebase, Firestore, MongoDB,
						Hosting
					</p>
					<br />
					<h5>Software Development:</h5>
					<p>
						Git & GitHub, Jira, Trello, NPM, Yarn, Babel, SPA, TDD, Jest,
						Enzyme, OOP, Agile, Scrum, Pair programming, VS Code, Postman,
						Figma, Canva.
					</p>
				</section>
			</section>
		</article>
	)
}

export default TechStack
