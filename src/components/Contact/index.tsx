import React from 'react'
import contact from '../../assets/contact.svg'
import email from '../../assets/e.svg'
import github from '../../assets/g.svg'
import linkedin from '../../assets/i.svg'
import Title from '../Title'
import styles from './Contact.module.css'

function Contact() {
	return (
		<section className={styles.contact__container}>
			<Title title='CONTACT' />
			<h5>
				FEEL FREE TO CONTACT ME VIA THE LINKS BELOW FOR ANY PROJECT
				COLLABORATION
			</h5>
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
			</div>
		</section>
	)
}

export default Contact
