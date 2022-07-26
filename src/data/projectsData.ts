import cardP from '../assets/card_s.png'
import catz from '../assets/catz.png'
import covidP from '../assets/covid.png'
import exp from '../assets/exps.png'
import fridgeP from '../assets/fridge_s.png'
import news from '../assets/news.png'
import pass from '../assets/pass.png'
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
			'Netlify'
		],
		gitLink: 'https://github.com/21ciprian/memory-card-game',
		launch: 'https://matching-cards-js.netlify.app',
		img: cardP
	},
	{
		id: 2,
		name: 'Password Generator Tool',
		description:
			'A React TypeScript web app that allows you to generate very secure password up to 50 characters. You can choose to have lowercase , uppercase letters as well as numbers and symbols.',
		tech: [
			'React',
			'TypeScript',
			'CSS Modules',
			'NPM',
			'Git Bash',
			'GitHub',
			'VSCode',
			'Netlify'
		],
		gitLink: 'https://github.com/21ciprian/password-generator',
		launch: 'https://pass-g.netlify.app/',
		img: pass
	},
	{
		id: 3,
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
			'Netlify'
		],
		gitLink: 'https://github.com/21ciprian/poke-that-mon',
		launch: 'https://poke-that-mon.netlify.app',
		img: pokeP
	},
	{
		id: 4,
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
			'Netlify'
		],
		gitLink: 'https://github.com/21ciprian/corona-virus-tracker',
		launch: 'https://c19tracker22.netlify.app',
		img: covidP
	},
	{
		id: 5,
		name: 'PE3-News',
		description:
			'A React web app that displays the latest news from a news API. You can choose to see different news topic on a click of a button or search for particular news by typing in the input field.',
		tech: [
			'JavaScript',
			'React',
			'CSS Modules',
			'NPM',
			'React Testing Library',
			'Git Bash',
			'GitHub',
			'VSCode',
			'Netlify'
		],
		gitLink: 'https://github.com/21ciprian/news-page',
		launch: 'https://pe3-news.netlify.app',
		img: news
	},
	{
		id: 6,
		name: 'Catz.Nation',
		description:
			'A React, Next.js, TypeScript web app that displays cats data from a cats API. You can filter through the cats collection by origin, lifespan, weight by spimply choosing an option from the dropdown menus or search for particular cat breed by typing in the input field.',
		tech: [
			'JavaScript',
			'React',
			'Next.js',
			'TypeScript',
			'Styled Components',
			'NPM',
			'React Testing Library',
			'Git Bash',
			'GitHub',
			'VSCode',
			'Vercel'
		],
		gitLink: 'https://github.com/21ciprian/catz-nation',
		launch: 'https://catz-nation.vercel.app/',
		img: catz
	},
	{
		id: 7,
		name: 'Fridgeful',
		description:
			" A PERN app created for people who have bought food in excess but don't want to waste food by throwing it away. It allows the user to select his/her existing fridge items and generate a recipe based on those ingredients.",
		tech: [
			'React',
			'PostgreSQL',
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
			'Netlify'
		],
		gitLink: 'https://be-fridgeful.netlify.app/',
		launch: 'https://be-fridgeful.netlify.app/',
		img: fridgeP
	},
	{
		id: 8,
		name: 'Expense-Tracker',
		description:
			" A MERN app created for people who don't have the possibility of doing transactions online or contactless and they want to keep track of their income and daily expenses.",
		tech: [
			'React',
			'TypeScript',
			'CSS Modules',
			'MongoDB',
			'NPM',
			'Postman',
			'SuperTest',
			'React Testing Library',
			'Auth0',
			'Git Bash',
			'GitHub',
			'VSCode',
			'Heroku',
			'Netlify'
		],
		gitLink: 'https://github.com/21ciprian/expense-tracker',
		launch: 'https://mern-budget-tracker.netlify.app',
		img: exp
	}
]

export default projectsData
