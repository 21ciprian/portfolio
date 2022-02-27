import React from 'react'
import {Typewriter} from 'react-simple-typewriter'
import styles from './Greet.module.css'

type Props = {}

function Greet({}: Props) {
	return (
		<article>
			<section className={styles.heading}>
				<section className={styles.main}>
					<div>
						Hi, I am
						<strong> Ciprian,</strong>
						<br />a London based <br />
					</div>
				</section>
				<section className={styles.typewriter}>
					<Typewriter
						words={[
							'Full-Stack Developer',
							'JavaScript Developer',
							'React Developer',
							'TypeScript Developer',
							'Back-End Developer',
							'Front-End Developer',
						]}
						loop={0}
						cursor
						cursorStyle='_'
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={1000}
					/>
				</section>
			</section>
		</article>
	)
}

export default Greet
