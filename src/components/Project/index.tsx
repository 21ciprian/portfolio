import React from 'react'
import Button from '../Button'
import styles from './Project.module.css'

type ProjectProps = {
	project: {
		id: number
		name: string
		description: string
		tech: string[]
		gitLink: string
		launch: string
		img: string
		src: string
	}
}

function Project({project}: ProjectProps) {
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
		<section key={project.id} className={styles.project__container}>
			<section className={styles.project__left}>
				<div className={styles.project__content}>
					<h4>{project.name}</h4>
					<p>{project.description}</p>
					<h6>Tech Used:</h6>

					<section className={styles.tech}>
						<ul>
							{project.tech.map(t => {
								return <li key={t}>{t}</li>
							})}
						</ul>
					</section>
					<div className={styles.project__btnLinks}>
						<Button link={project.gitLink} name='GitHub' />
						<Button link={project.launch} name='Launch' />
					</div>
				</div>
			</section>
			<section className={styles.media}>
				<img src={project.img} alt={project.name} />
				<video
					key={project.id}
					onMouseOver={playVideo}
					onMouseOut={pauseVideo}
					preload='auto'
					loop
					src={project.src}></video>
			</section>
		</section>
	)
}

export default Project
