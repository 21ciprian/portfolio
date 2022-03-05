import React from 'react'
import {Parallax} from 'react-scroll-parallax'
import contact from '../../assets/bgSvg.svg'
import email from '../../assets/email.svg'
import girl from '../../assets/girl.svg'
import github from '../../assets/git.svg'
import linkedin from '../../assets/linkedin.svg'
import man from '../../assets/man.svg'
import woman from '../../assets/woman.svg'
import Title from '../Title'
import styles from './Contact.module.css'

function Contact() {
	return (
		<section className={styles.contact__container}>
			<Title title='CONTACT' />
			<Parallax translateY={[-50, 30]}>
				<h5>
					FEEL FREE TO CONTACT ME VIA THE LINKS BELOW FOR ANY PROJECT
					COLLABORATION
				</h5>
			</Parallax>
			<div className={styles.contactMe}>
				<img src={contact} alt='contact' className={styles.contact} />
				<a
					href='https://github.com/21ciprian'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={github} alt='github' className={styles.github} />
				</a>
				<a
					href='mailto:ciprianoffice10@gmail.com'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={email} alt='email' className={styles.email} />
				</a>
				<a
					href='https://www.linkedin.com/in/ciprian-andrei-8381231b9'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={linkedin} alt='linkedin' className={styles.linkedin} />
				</a>
				<img src={girl} alt='linkedin' className={styles.girl} />
				<img src={man} alt='linkedin' className={styles.man} />
				<img src={woman} alt='linkedin' className={styles.woman} />
			</div>
		</section>
	)
}

export default Contact
