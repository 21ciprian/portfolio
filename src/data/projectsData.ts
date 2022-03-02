import calc from '../assets/calc.png'
import hangman from '../assets/hangman.png'
import morse from '../assets/morse.jpg'
import r from '../assets/r1.mp4'

const projectsData = [
	{
		id: 1,
		name: 'Calculator',
		imageSrc: calc,
		description: 'Calculator made with Vanilla Javascript, HTML and SCSS',
		tech: ['Javascript', 'HTML', 'CSS'],
		gitLink: 'lorem',
		launch: 'lorem',
		src: r,
	},
	{
		id: 2,
		name: 'Morse Code Translator',
		imageSrc: morse,
		description:
			'Morse Code Translator app made with Vanilla Javascript, HTML and SCSS. It allows you to convert english to morse code and morse code to english',
		tech: ['Javascript', 'HTML', 'CSS'],
		gitLink: 'lorem',
		launch: 'lorem',
		src: r,
	},
	{
		id: 3,
		name: 'Hangman Game',
		imageSrc: hangman,
		description: 'Hangman Game made with HTML, SCSS and Vanilla Javascript',
		tech: ['Javascript', 'HTML', 'CSS'],
		gitLink: 'lorem',
		launch: 'lorem',
		src: r,
	},
]

export default projectsData
