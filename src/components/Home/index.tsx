import React from 'react'
import Greet from '../Greet.tsx'
import style from './Home.module.css'

type Props = {}

function Home({}: Props) {
	return (
		<div className={style.home}>
			<h2>Home</h2>
			<Greet />
		</div>
	)
}

export default Home
