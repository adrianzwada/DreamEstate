import React from 'react'
import Navbar from './Navbar'
import headerImage from '../../src/assets/header-large.jpg'

function Header() {
	return (
		<header
			className='min-h-screen mb-0 bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden relative'
			style={{ backgroundImage: `url(${headerImage})` }}
			id='Header'
		>
			<Navbar />
			<div className='text-center text-white p-4'>
				<h2 className='text-4xl font-bold mb-4'>"The ache for home lives in all of us."</h2>
				<p className='text-lg font-light'>Let us help you feel it.</p>
			</div>
			<div className='mt-6 flex gap-4'>
				<a href='#projects' className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
					Projects
				</a>
				<a href='#contact' className='px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition'>
					Contact Us
				</a>
			</div>
		</header>
	)
}

export default Header
