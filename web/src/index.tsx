import { render } from 'solid-js/web';

import { onMount } from 'solid-js';
import feather from 'feather-icons';

import Index from './App/pages';
import NavBar from './App/components/NavBar';
import './styles/global.scss';
const root = document.getElementById('root');

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

console.clear();

render(() => {
	onMount(() => {
		feather.replace();
	});
	return (
		<div style="width: 100%;height:auto; color:black;">
			<NavBar></NavBar>
			<Index></Index>
		</div>
	);
}, root);
