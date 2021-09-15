import { render } from 'solid-js/web';

import NavBar from './App/components/NavBar';
import App from './App';
import './styles/global.scss';

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

/* scroll up magic should reveal the sticky NavBar */
let prevScroll = 0;

window.addEventListener('scroll', (e) => {
	const crntScroll = window.scrollY;

	if (crntScroll <= 0 /* at the top */) {
		root.classList.remove('scroll-up'); // remove this class
	}

	if (
		crntScroll > prevScroll /* while scrolling down */ &&
		!root.classList.contains('scroll-down')
	) {
		root.classList.remove('scroll-up');
		root.classList.add('scroll-down');
	}
	if (
		crntScroll < prevScroll /* while scrolling down */ &&
		root.classList.contains('scroll-down')
	) {
		root.classList.remove('scroll-down');
		root.classList.add('scroll-up');
	}

	if (crntScroll == 60)
		root.classList.contains('scroll-up') && window.scrollTo({ top: 0 });

	prevScroll = crntScroll;
});

render(() => <App />, root);
