import React, { useEffect, useState } from 'react'
import leftarrow from '../../src/assets/left-arrow.png'
import rightarow from '../../src/assets/right-arrow.png'
import { assets, projectsData } from '../../src/assets/assets.js'
function Projects() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [cardsToShow, setCardsToShow] = useState(1)

	useEffect(() => {
		const updateCards = () => {
			if (window.innerWidth >= 1024) {
				setCardsToShow(projectsData.length)
			} else setCardsToShow(1)
		}
		updateCards()
		window.addEventListener('resize', updateCards)
		return () => window.removeEventListener('resize', updateCards)
	}, [])
	const nextCard = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % projectsData.length)
	}
	const prevCard = () => {
		setCurrentIndex(prevIndex => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1))
	}

	return (
		<div className='container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hiden' id='Projects'>
			<h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
				Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span>
			</h1>
			<p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
				Crafting Spaces,building Legacies-explore Our Portfoli
			</p>

			<div className='flex justify-end items-center mb-8'>
				<button onClick={prevCard} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
					<img className='h-8' src={leftarrow} alt='Preious' />
				</button>
				<button onClick={nextCard} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
					<img className='h-8' src={rightarow} alt='Next' />
				</button>
			</div>
			<div className='overflow-hidden'>
				<div
					className=' flex gap-4 transition-transform duration-500 ease-in-out'
					style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
				>
					{projectsData.map((projectData, index) => (
						<div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
							<img src={projectData.image} alt={projectData.title} className='h-[250px] w-full object-cover' />
							<div className=' absolute left-0 right-0 bottom-5 flex justify-center'>
								<div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
									<h2 className='text-xl font-semibold text-gray-800'>{projectData.title}</h2>
									<p className='text-gray-500 text-sm'>
										{projectData.price} <span>|</span> {projectData.location}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Projects
