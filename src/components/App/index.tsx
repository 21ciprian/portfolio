import React from 'react'
// import ReactPlayer from 'react-player'
import {ParallaxProvider} from 'react-scroll-parallax'
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
			</div>
		</ParallaxProvider>
	)
}

export default App
