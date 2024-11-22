import React, { useState } from 'react'
import logonobackgroundv2 from '../../src/assets/logo-no-background-v2.png'

export const Navbar = () => {
	// State to manage the mobile menu visibility
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Toggle the menu visibility
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<nav className='absolute top-0 left-0 w-full z-10'>
			<div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
				{/* Logo */}
				<div className='w-28 md:w-40'>
					<img src={logonobackgroundv2} alt='Logo' className='w-full' />
				</div>

				{/* Desktop Menu */}
				<ul className='hidden md:flex gap-8 text-black text-lg'>
					<li>
						<a href='#Header' className='cursor-pointer hover:text-gray-400 transition'>
							Home
						</a>
					</li>
					<li>
						<a href='#about' className='cursor-pointer hover:text-gray-400 transition'>
							About
						</a>
					</li>
					<li>
						<a href='#projects' className='cursor-pointer hover:text-gray-400 transition'>
							Projects
						</a>
					</li>
					<li>
						<a href='#testimonials' className='cursor-pointer hover:text-gray-400 transition'>
							Testimonials
						</a>
					</li>
				</ul>

				{/* Mobile Menu Button */}
				<div className='flex md:hidden'>
					<button
						className='text-black focus:outline-none hover:text-gray-400 transition'
						aria-label='Open menu'
						onClick={toggleMenu}
					>
						{/* Hamburger Icon */}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-8 h-8'
						>
							<path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5' />
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white p-4 absolute top-16 right-0 `}>
				<ul className='flex flex-col gap-6 text-black text-lg'>
					<li>
						<a
							href='#Header'
							className='cursor-pointer hover:text-gray-400 transition'
							onClick={toggleMenu} // Close menu on link click
						>
							Home
						</a>
					</li>
					<li>
						<a href='#about' className='cursor-pointer hover:text-gray-400 transition' onClick={toggleMenu}>
							About
						</a>
					</li>
					<li>
						<a href='#projects' className='cursor-pointer hover:text-gray-400 transition' onClick={toggleMenu}>
							Projects
						</a>
					</li>
					<li>
						<a href='#testimonials' className='cursor-pointer hover:text-gray-400 transition' onClick={toggleMenu}>
							Testimonials
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
