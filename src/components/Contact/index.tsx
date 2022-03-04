import React from 'react'
import Title from '../Title'
import styles from './Contact.module.css'

function Contact() {
	return (
		<section className={styles.contact__container}>
			<Title title='CONTACT' />
			<h5>
				PLEASE FEEL FREE TO CONTACT ME VIA THE LINKS BELOW FOR ANY PROJECT
				COLLABORATION
			</h5>
		</section>
	)
}

export default Contact
