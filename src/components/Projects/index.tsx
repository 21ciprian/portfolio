import projectsData from '../../data/projectsData'
import Project from '../Project'
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
				{projectsData.map(p => (
					<Project project={p} key={p.id} />
				))}
			</section>
		</section>
	)
}

export default Projects
