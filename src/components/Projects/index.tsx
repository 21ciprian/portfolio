import React from 'react'
import projectsData from '../../data/projectsData'

type Props = {}
console.log('projectsData: ', projectsData)

function Projects({}: Props) {
	function playVideo(e: React.MouseEvent<HTMLVideoElement>) {
		console.log('play')
		e.preventDefault()
		e.currentTarget.play()
	}
	function pauseVideo(e: React.MouseEvent<HTMLVideoElement>) {
		console.log('pause')
		e.preventDefault()
		e.currentTarget.pause()
	}
	return (
		<div>
			Projects
			{projectsData.map(p => {
				return (
					<video
						className='gray'
						onMouseOver={playVideo}
						onMouseOut={pauseVideo}
						key={p.id}
						width='320'
						height='240'
						preload='auto'
						// autoPlay
						// controls
						src={p.src}></video>
				)
			})}
		</div>
	)
}

export default Projects
