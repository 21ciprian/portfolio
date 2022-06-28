import {Parallax} from 'react-scroll-parallax'
import programmer from '../../assets/dev.svg'
import Title from '../Title'
import styles from './About.module.css'

function About() {
	return (
		<article id='about' className={styles.about__wrapper}>
			<section className={styles.about__container}>
				<Parallax translateY={[-10, 10]}>
					<section className={styles.about__text}>
						<Title title='ABOUT ME' />
						<p>
							<strong style={{fontSize: '2rem'}}>Hi, I'm Ciprian,</strong> a
							London based <strong>full-stack developer</strong>.
						</p>
						<p>
							I am passionate about coding and problem solving and began
							teaching myself the core languages of Web Development while I was
							working full time as a Bar Manager.
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
						<p>
							In terms of technologies, I am specialized in HTML, CSS,
							JavaScript, React on the Frontend, but I am pretty comfortable
							with Node.JS, Express, PostgreSQL, MongoDB, etc. in order to
							create full-stack applications.
						</p>
						<p>
							<a href='#contact'>
								<span>Get in touch</span>
							</a>{' '}
							and I will bring your ideas to life!
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
		</article>
	)
}

export default About
