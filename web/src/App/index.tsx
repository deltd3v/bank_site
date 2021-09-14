import { createSignal, lazy, onMount } from 'solid-js';
import type { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';

import styles from './styles.module.scss';
import NavBar from './components/NavBar';
// import logo from '../assets/logo/logo.svg';

import feather from 'feather-icons';
import Index from './pages';
import About from './pages/about';
import Products from './pages/products';
import Services from './pages/services';
import SignUp from './pages/sign-up';
import { style } from 'solid-js/web';

// const Index = lazy(() => import('../App/pages/index'));
// const About = lazy(() => import('../App/pages/about'));
// const Products = lazy(() => import('../App/pages/products'));
// const SignUp = lazy(() => import('../App/pages/sign-up'));
// const Services = lazy(() => import('../App/pages/services'));

const App: Component = () => {
	onMount(() => {
		feather.replace();
	});

	return (
		<div class={styles.App}>
			<NavBar />
			<div style="width:100vw;height:100vh;">
				<Index></Index>
				<About></About>
				<Products></Products>
				<Services></Services>
				<SignUp></SignUp>
			</div>

			{/* <Routes>
				<Route path="/" element={<Index />} />
				<Route path="/about" element={<About />} />
				<Route path="/products" element={<Products />} />
				<Route path="/services" element={<Services />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes> */}
		</div>
	);
};

export default App;
