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
						React, Typescript, Chakra, Styled-Components, MUI, Bootstrap,
						Sass(SCSS), Netlify
					</p>

					<br />
					<h5>Back-end:</h5>
					<p>
						Node.js, Express.js, REST API, PostgreSQL, OAuth, Heroku, Postman.
					</p>
					<br />
					<h5>Testing Libraries:</h5>
					<p>Jest, SuperTest, React Testing Library, Cypress.</p>
					<h5>Software Development:</h5>
					<p>
						Git & GitHub, Jira, Trello, NPM, Yarn, SPA, TDD, Agile, Scrum, Pair
						programming, VS Code, Figma, Canva, Draw.io.
					</p>
				</section>
			</section>
		</article>
	)
}

export default TechStack
