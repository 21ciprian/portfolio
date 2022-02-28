import React from 'react'
import {ParallaxProvider} from 'react-scroll-parallax'
import Header from '../Header'
import Home from '../Home'
import HorizontalLine from '../HorizontalLine'
import './App.css'

function App() {
	return (
		<ParallaxProvider>
			<div className='app'>
				<Header />
				<Home />
				<HorizontalLine />
			</div>
		</ParallaxProvider>
	)
}

export default App
