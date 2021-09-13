import { createSignal, lazy, onMount } from 'solid-js';
import type { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';

import styles from './styles.module.scss';
import NavBar from './components/NavBar';
// import logo from '../assets/logo/logo.svg';

import feather from 'feather-icons';

const Index = lazy(() => import('../App/pages/index'));
const About = lazy(() => import('../App/pages/about'));
const Products = lazy(() => import('../App/pages/products'));
const SignUp = lazy(() => import('../App/pages/sign-up'));
const Services = lazy(() => import('../App/pages/services'));

const App: Component = () => {
	onMount(() => {
		feather.replace();
	});

	return (
		<div class={styles.App}>
			<header class={styles.header}>
				<NavBar />
			</header>

			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Products />} />
				<Route path="/services" element={<Services />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</div>
	);
};

export default App;
