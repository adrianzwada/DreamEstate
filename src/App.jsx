import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'
import Testimontials from './components/Testimontials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from './components/Footer'
function App() {
	return (
		<div className='w-full overflow-hidden'>
			<ToastContainer />
			<Header />
			<About />
			<Projects />
			<Testimontials />
			<Contact />
			<Footer/>
		</div>
	)
}

export default App
