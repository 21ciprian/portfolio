import Greet from '../Greet.tsx'
import style from './Home.module.css'

function Home() {
	return (
		<div className={style.home}>
			<Greet />
		</div>
	)
}

export default Home
