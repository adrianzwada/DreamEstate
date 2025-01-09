import React from 'react'
import Navbar from './Navbar'
import headerImage from '../../src/assets/header-large2.jpg'
import { motion } from 'framer-motion'

function Header() {
	return (
		<header
			className='min-h-screen mb-0 bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden relative'
			style={{ backgroundImage: `url(${headerImage})` }}
			id='Header'
		>
			<Navbar />
			<motion.div
			initial={{opacity:0, y:100}}
			transition={{duration:1.5}}
			whileInView={{opacity:1, y:0}}
			viewport={{once:true}}
			className='container text-center text-black text-lg p-4 absolute top-[20%]' style={{ transform: 'translateY(-50%)' }}>
				<h2 className='text-4xl font-bold mb-4'>"The ache for home lives in all of us."</h2>
				<p className='text-lg font-light'>Let us help you feel it.</p>
		

			<div className='space-x-6 mt-5'>
				<a href='#projects' className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
					Projects
				</a>
				<a href='#contact' className='px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition'>
					Contact Us
				</a>
			</div>
			</motion.div>
		</header>
	)
}

export default Header
