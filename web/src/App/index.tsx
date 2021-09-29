import { onMount } from 'solid-js';
import feather from 'feather-icons';
import type { Component } from 'solid-js';

import Index from './pages';
import s from './styles.module.scss';
import NavBar from './components/NavBar';

const App: Component = () => {
	onMount(() => {
		feather.replace();
	});

	return (
		<div class={s['pageContainer']}>
			<NavBar></NavBar>

			<Index></Index>
		</div>
	);
};

export default App;
