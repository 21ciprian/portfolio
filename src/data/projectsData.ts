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
			'Calculator app was one of my first small project made with JavaScript OOP',
		tech: [
			'JavaScript',
			'HTML5',
			'CSS3',
			'Cypress',
			'NPM',
			'Git Bash',
			'GitHub',
		],
		gitLink: 'lorem',
		launch: 'https://matching-cards-js.netlify.app',
		src: r,
	},
	{
		id: 2,
		name: 'Morse Code Translator',
		imageSrc: morse,
		description:
			'I made this Morse Code Translator app after watching the movie "Interstellar". It allows you to convert english to morse code and morse code to english.',
		tech: ['JavaScript', 'HTML5', 'CSS3'],
		gitLink: 'lorem',
		launch: 'lorem',
		src: r,
	},
	{
		id: 3,
		name: 'Hangman Game',
		imageSrc: hangman,
		description: 'Lorem ipsum',
		tech: ['JavaScript', 'HTML5', 'CSS3'],
		gitLink: 'lorem',
		launch: 'lorem',
		src: r,
	},
]

export default projectsData
