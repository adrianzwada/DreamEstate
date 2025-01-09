import React from 'react';
import about from '../assets/about-me.jpg';
import { motion } from 'framer-motion';

function About() {
	const motionProps = {
		initial: { opacity: 0, x: 200 },
		transition: { duration: 1.5 },
		whileInView: { opacity: 1, x: 0 },
		viewport: { once: true },
	};
	return (
		<motion.section
			{...motionProps}
			className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
			id='About'
		>
			<h2 className='text-2xl sm:text-5xl font-bold mb-2'>
				About <span className='underline underline-offset-4 decoration-1 font-light'>Our Company</span>
			</h2>
			<p className='text-gray-500 max-w-80 text-center mb-8'>
				Passionate About Properties, Committed to Your Dream Home
			</p>
			<div className='flex flex-col md:flex-row items-center md:items-start md:gap-10'>
				<img
					src={about}
					alt='An image showing our team working passionately on real estate projects.'
					className='w-full sm:w-1/2 h-86 sm:h-70 object-cover rounded-lg shadow-lg'
				/>
				<div className='flex flex-col items-center md:items-start md:px-4 text-gray-600'>
					<div className='grid grid-cols-2 gap-4 sm:gap-6 md:gap-10 w-full 2xl:pr-28'>
						<div>
							<p className='text-4xl font-medium text-gray-800'>12+</p>
							<p>Years of Experience</p>
						</div>
						<div>
							<p className='text-4xl font-medium text-gray-800'>30+</p>
							<p>Projects Completed</p>
						</div>
						<div>
							<p className='text-4xl font-medium text-gray-800'>30+</p>
							<p>Mn. Sq. Ft. Delivered</p>
						</div>
						<div>
							<p className='text-4xl font-medium text-gray-800'>25+</p>
							<p>Ongoing Projects</p>
						</div>
					</div>
					<p className='my-10 max-w-lg text-left sm:text-justify'>
						At <span className='font-bold'>DreamEstate</span>, we prioritize quality, dedication, and client satisfaction. With over a decade of expertise in the real estate industry, we’ve helped countless families and businesses find their perfect spaces. Our team’s commitment to excellence ensures that each project is handled with precision and care.
					</p>
					<a
						href='#contact'
						className='mt-8 flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition duration-300'
					>
						Contact Us Today
					</a>
				</div>
			</div>
		</motion.section>
	);
}

export default About;
