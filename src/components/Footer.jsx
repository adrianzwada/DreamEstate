import React from 'react';
import logo from '../../src/assets/apple-touch-icon-removebg-preview.png';

export const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-800 overflow-hidden" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-gray-400">
          <img src={logo} alt="Company logo" className="h-50" />
          <p className="mt-2 mb-6">"Real Stories from Those Who Found Home"</p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="text-gray-400 flex flex-col gap-3">
            <li><a href="#Header" className="hover:text-blue-600">Home</a></li>
            <li><a href="#About" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#Contact" className="hover:text-blue-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-8 text-gray-400">
          <h3 className="text-white text-lg font-bold">More Info:</h3>
          <p className="mt-4">This is my side project to demonstrate my frontend skills.</p>
          <p className="mt-1">
            Please check my portfolio page: 
            <a href="https://adrianzwada.vercel.app/" className="text-white hover:underline"> Adrian Zwada</a>
          </p>
          <p className="mt-1">
            Or check my GitHub account: 
            <a href="https://github.com/adrianzwada" className="text-white hover:underline"> GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
};
