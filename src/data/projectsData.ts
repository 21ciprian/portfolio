import card from '../assets/card54.mp4'
import cardP from '../assets/card_s.png'
import covid from '../assets/covid54.mp4'
import covidP from '../assets/covid_s.png'
import fridge from '../assets/fridge54.mp4'
import fridgeP from '../assets/fridge_s.png'
import poke from '../assets/poke54.mp4'
import pokeP from '../assets/poke_s.png'

const projectsData = [
	{
		id: 1,
		name: 'Matching Cards Game',
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
		gitLink: 'https://github.com/21ciprian/memory-card-game',
		launch: 'https://matching-cards-js.netlify.app',
		img: cardP,
		src: card,
	},
	{
		id: 2,
		name: 'Poke-that-mon',
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
		gitLink: 'https://github.com/21ciprian/poke-that-mon',
		launch: 'https://poke-that-mon.netlify.app',
		img: pokeP,
		src: poke,
	},
	{
		id: 3,
		name: 'Covid-19 tracker',
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
		gitLink: 'https://github.com/21ciprian/corona-virus-tracker',
		launch: 'https://c19tracker22.netlify.app',
		img: covidP,
		src: covid,
	},
	{
		id: 4,
		name: 'Fridgeful',
		description:
			" A React app created for people who have bought food in excess but don't want to waste food by throwing it away. It allows the user to select his/her existing fridge items and generate a recipe based on those ingredients.",
		tech: [
			'React',
			'SCSS',
			'NPM',
			'Postman',
			'SuperTest',
			'React Testing Library',
			'Auth0',
			'Git Bash',
			'GitHub',
			'VSCode',
			'Heroku',
			'Netlify',
		],
		gitLink: 'https://be-fridgeful.netlify.app/',
		launch: 'https://be-fridgeful.netlify.app/',
		img: fridgeP,
		src: fridge,
	},
]

export default projectsData
