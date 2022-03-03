import React from 'react'
import {ParallaxProvider} from 'react-scroll-parallax'
import About from '../About'
import Header from '../Header'
import Home from '../Home'
import HorizontalLine from '../HorizontalLine'
import Projects from '../Projects'
import './App.css'

function App() {
	return (
		<ParallaxProvider>
			<div className='app'>
				<Header />
				<Home />
				<HorizontalLine />
				<Projects />
				<HorizontalLine />
				<About />
				<HorizontalLine />
			</div>
		</ParallaxProvider>
	)
}

export default App
