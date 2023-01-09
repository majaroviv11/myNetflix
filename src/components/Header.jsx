import React, { useState, useEffect } from 'react'
import '../styles/_header.scss'
import logo from '../assets/logo-full.png'
import avatar from '../assets/avatar.jfif'

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
		</div>
	)
}

export default Nav
