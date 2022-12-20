import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import logo from '../assets/image/img_1.svg'
import avatar from '../assets/image/img_2.jpg'

const Nav = () => {
	const [show, handleShow] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true)
			} else handleShow(false)
		})
		return () => {
			window.addEventListener('scroll')
		}
	}, [])

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img src={logo} alt='Netflix Logo' className='nav__logo' />
			<img src={avatar} alt='Profile image' className='nav__avatar' />
			<input className='nav__search' placeholder='Искать фильм...' />
		</div>
	)
}

export default Nav
