import React from 'react'
import {Parallax} from 'react-scroll-parallax'
import programmer from '../../assets/dev.svg'
import TechStack from '../TechStack'
import Title from '../Title'
import styles from './About.module.css'

function About() {
	return (
		<article id='about' className={styles.about__wrapper}>
			<section className={styles.about__container}>
				<Parallax translateY={[-10, 20]}>
					<section className={styles.about__text}>
						<Title title='ABOUT ME' />
						<p>
							Hi, I'm Ciprian, a <strong>full-stack developer</strong> and{' '}
							<em>"a man of many trades"</em> as my friends would call me.
						</p>
						<p>
							I am passionate about coding and problem solving and began
							teaching myself how to code while I was working full time in the
							hospitality industry.
						</p>
						<p>
							I have recently graduated from{' '}
							<a
								href='https://www.schoolofcode.co.uk/'
								target='_blank'
								rel='noreferrer'>
								<strong>School of Code</strong>
							</a>{' '}
							Software Development Bootcamp and I am excited to embark on a new
							career as software developer.
						</p>
					</section>
				</Parallax>

				<div className={styles.image__container}>
					{' '}
					<img
						src={programmer}
						className={styles.programmer}
						alt='programmer'
					/>
				</div>
			</section>
			<TechStack />
		</article>
	)
}

export default About
