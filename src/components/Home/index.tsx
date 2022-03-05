import {Parallax} from 'react-scroll-parallax'
import Greet from '../Greet.tsx'
import style from './Home.module.css'

function Home() {
	// const {ref} = useParallax({speed: 10})

	return (
		<section id='home' className={style.home}>
			<Parallax translateY={[-30, 35]}>
				<Greet />
			</Parallax>
		</section>
	)
}

export default Home
