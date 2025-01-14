import React from 'react'
import logo from '../../src/assets/apple-touch-icon-removebg-preview.png'

export const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-800 overflow-hidden 'id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0 '>
               <img  src={logo} alt='Company logo 'clasname='h-10'/>
               <p className='text-gray-400 mt-4'>This is my side project to prove my front end skills</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='text-white'>
                    <a href="#Header" className='hover:text-blue-600'>Home</a>
                    <a href="#About" className='hover:text-blue-600'>About us</a>
                    <a href="#Contact" className='hover:text-blue-600'>Contact us</a>
                    <a href="#" className='hover:text-blue-600'>Privacy polity</a>
                </ul>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}
