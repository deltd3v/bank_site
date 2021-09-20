import { onMount } from 'solid-js';
import type { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';

import s from './styles.module.scss';
import NavBar from './components/NavBar';

import feather from 'feather-icons';
import Index from './pages';

import PromoInfo from './components/Promo';

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
