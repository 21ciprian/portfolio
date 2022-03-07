import calc from '../assets/calc.png'
import hangman from '../assets/hangman.png'
import morse from '../assets/morse.jpg'
import r from '../assets/r1.mp4'

const projectsData = [
	{
		id: 1,
		name: 'Matching Cards Game',
		imageSrc: calc,
		description:
			'Fruits memory card game built with Javascript. It has score keeping functionality, timer and every time the game is reset, the fruits cards get randomized',
		tech: [
			'JavaScript',
			'HTML5',
			'CSS3',
			'Cypress',
			'NPM',
			'Git Bash',
			'GitHub',
			'VSCode',
			'Netlify',
		],
		gitLink: 'lorem',
		launch: 'https://matching-cards-js.netlify.app',
		src: r,
	},
	{
		id: 2,
		name: 'Poke-that-mon',
		imageSrc: morse,
		description:
			'Pokemon app that allows you to search for your favourite pokemon in PokeAPI database and displays its stats. ',
		tech: [
			'TypeScript',
			'HTML5',
			'CSS3',
			'NPM',
			'Git Bash',
			'GitHub',
			'VSCode',
			'Netlify',
		],
		gitLink: 'lorem',
		launch: 'https://poke-that-mon.netlify.app',
		src: r,
	},
	{
		id: 3,
		name: 'Covid-19 cases tracker',
		imageSrc: hangman,
		description:
			'Covid-19 tracker app that allows you see the latest covid cases worldwide or in a specific country.',
		tech: [
			'JavaScript',
			'HTML5',
			'CSS3',
			'NPM',
			'Leaflet.js',
			'Chart.js',
			'Git Bash',
			'GitHub',
			'VSCode',
			'Netlify',
		],
		gitLink: 'lorem',
		launch: 'https://c19tracker22.netlify.app',
		src: r,
	},
]

export default projectsData
