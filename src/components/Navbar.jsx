import React, { useState } from 'react'
import logo from '../../src/assets/apple-touch-icon-removebg-preview.png'

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<nav className='absolute top-0 left-0 w-full z-10'>
			<div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
				<div className='w-28 md:w-40 '>
					<img src={logo} alt='Logo' className='w-full' />
				</div>

				<ul className='hidden md:flex gap-8 text-black text-lg'>
					<li>
						<a href='#Header' className='cursor-pointer hover:text-gray-400 transition'>
							Home
						</a>
					</li>
					<li>
						<a href='#About' className='cursor-pointer hover:text-gray-400 transition'>
							About
						</a>
					</li>
					<li>
						<a href='#Projects' className='cursor-pointer hover:text-gray-400 transition'>
							Projects
						</a>
					</li>
					<li>
						<a href='#Testimonials' className='cursor-pointer hover:text-gray-400 transition'>
							Testimonials
						</a>
					</li>
					<li>
						<a href='#Contact' className='cursor-pointer hover:text-gray-400 transition'>
							Contact
						</a>
					</li>
				</ul>

				<div className='flex md:hidden'>
					<button
						className='text-black focus:outline-none hover:text-gray-400 transition'
						aria-label='Open menu'
						onClick={toggleMenu}
					>
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

			<div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white p-4 absolute top-16 right-0 `}>
				<ul className='flex flex-col gap-6 text-black text-lg'>
					<li>
						<a href='#Header' className='cursor-pointer hover:text-gray-400 transition' onClick={toggleMenu}>
							Home
						</a>
					</li>
					<li>
						<a href='#About' className='cursor-pointer hover:text-gray-400 transition' onClick={toggleMenu}>
							About
						</a>
					</li>
					<li>
						<a href='#Projects' className='cursor-pointer hover:text-gray-400 transition' onClick={toggleMenu}>
							Projects
						</a>
					</li>
					<li>
						<a href='#Testimonials' className='cursor-pointer hover:text-gray-400 transition' onClick={toggleMenu}>
							Testimonials
						</a>
					</li>
					<li>
						<a href='#Contact' className='cursor-pointer hover:text-gray-400 transition' onClick={toggleMenu}>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
