import { onMount } from 'solid-js';
import feather from 'feather-icons';
import type { Component } from 'solid-js';

import Index from './pages';
import s from './styles.module.scss';
import NavBar from './components/NavBar';
import FooterSection from './components/Footer';

const App: Component = () => {
	onMount(() => {
		feather.replace();
	});

	return (
		<>
			<NavBar></NavBar>

			<div class={s['pageContainer']} style="height:100vh;">
				<Index></Index>
			</div>
		</>
	);
};

export default App;
