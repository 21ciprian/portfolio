import React from 'react'
import styles from './About.module.css'

type Props = {}

function About({}: Props) {
	return (
		<article id='about'>
			<section className={styles.about}>
				<p>
					Hi, I'm Ciprian, a <strong>full-stack developer</strong> and{' '}
					<em>"a man of many trades"</em> as my friends would call me.
				</p>
				<p>
					I am passionate about coding and problem solving and began teaching
					myself how to code while I was working full time in the hospitality
					industry.
				</p>
				<p>
					I have recently graduated from{' '}
					<a
						href='https://www.schoolofcode.co.uk/'
						target='_blank'
						rel='noreferrer'>
						<strong>School of Code</strong> Software Development Bootcamp
					</a>{' '}
					and I am excited to embark on a new career as software developer.
				</p>
			</section>
		</article>
	)
}

export default About
