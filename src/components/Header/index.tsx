import React, {useEffect, useState} from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import logo from '../../assets/logo.svg'
import styles from './Header.module.css'

type Props = {}

function Header({}: Props) {
	const [navbar, setNavbar] = useState(true)
	useEffect(() => {
		let prevScrollpos = window.pageYOffset
		window.onscroll = () => {
			let currentScrollPos = window.pageYOffset
			if (prevScrollpos > currentScrollPos) {
				setNavbar(true)
			} else {
				setNavbar(false)
			}
			prevScrollpos = currentScrollPos
		}
	}, [])
	return (
		<Navbar
			collapseOnSelect
			fixed='top'
			className={navbar ? `${styles.navbar}` : `${styles.hidden}`}
			expand='sm'
			variant='dark'>
			<Navbar.Brand href='#home'>
				<img src={logo} className={styles.logo} alt='logo' />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse className='justify-content-end'>
				<Nav defaultActiveKey='#home'>
					<Nav.Item>
						<Nav.Link className={styles.navLinks} href='#home'>
							HOME
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className={styles.navLinks} href='#projects'>
							PROJECTS
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className={styles.navLinks} href='#about'>
							ABOUT
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className={styles.navLinks} href='#contact'>
							CONTACT
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Header
