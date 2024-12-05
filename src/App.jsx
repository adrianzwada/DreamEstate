import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'
import { Testimontials } from './components/Testimontials'
function App() {
	return (
		<div className='w-full overflow-hidden'>
			<Header />
			<About />
			<Projects />
			<Testimontials />
		</div>
	)
}

export default App
