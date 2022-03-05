import projectsData from '../../data/projectsData'
import Button from '../Button'
import Title from '../Title'
import styles from './Projects.module.css'

console.log('projectsData: ', projectsData)
function Projects() {
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
		<section id='projects' className={styles.projects}>
			<Title title='PROJECTS' />
			<section className={styles.projects__container}>
				{projectsData.map(p => {
					return (
						<section key={p.id} className={styles.project__container}>
							<section className={styles.project__left}>
								<div className={styles.project__content}>
									<h4>{p.name}</h4>
									<p>{p.description}</p>
									<h6>Tech Used:</h6>

									<section className={styles.tech}>
										{p.tech.map(t => {
											return <p key={t}>{t}</p>
										})}
									</section>
									<div className={styles.project__btnLinks}>
										<Button link={p.gitLink} name='GitHub' />
										<Button link={p.launch} name='Launch' />
									</div>
								</div>
							</section>
							<video
								key={p.id}
								onMouseOver={playVideo}
								onMouseOut={pauseVideo}
								preload='auto'
								loop
								src={p.src}></video>
						</section>
					)
				})}
			</section>
		</section>
	)
}

export default Projects
