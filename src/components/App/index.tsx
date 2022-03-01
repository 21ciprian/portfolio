import React from 'react'
import ReactPlayer from 'react-player'
import {ParallaxProvider} from 'react-scroll-parallax'
import r from '../../assets/r1.mp4'
import projectsData from '../../data/projectsData'
import Header from '../Header'
import Home from '../Home'
import HorizontalLine from '../HorizontalLine'
import './App.css'

console.log('projectsData: ', projectsData)
function App() {
	return (
		<ParallaxProvider>
			<div className='app'>
				<Header />
				<Home />
				<HorizontalLine />
				{projectsData.map(p => {
					return (
						<ReactPlayer
							key={p.id}
							url={p.src}
							loop={true}
							playing={true}
							controls
						/>
						// <video
						// 	key={p.id}
						// 	width='100%'
						// 	height='100%'
						// 	preload='auto'
						// 	autoPlay
						// 	controls
						// 	src={p.src}></video>
					)
				})}
				<ReactPlayer url={r} loop={true} playing={true} controls />
				{/* <video src={r} autoPlay loop width='320' height='240' /> */}
			</div>
		</ParallaxProvider>
	)
}

export default App
