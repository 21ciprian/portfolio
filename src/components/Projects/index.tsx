import projectsData from '../../data/projectsData'
import Project from '../Project'
import Title from '../Title'
import styles from './Projects.module.css'

console.log('projectsData: ', projectsData)
function Projects() {
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
