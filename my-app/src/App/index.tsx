import type { Component } from "solid-js";

import logo from "../assets/logo.svg";
import styles from "./styles.module.css";
import HelloWorld from './components/HelloWorld'

const App: Component = () => {
	return (
		<div class={styles.App}>
			<header class={styles.header}>
                <img src={logo} class={styles.logo} alt="logo" />
                <HelloWorld />
				<p>
					Edit <code>src/App/index.tsx</code> and save to reload.
				</p>
				<a
					target="_blank"
					class={styles.link}
					rel="noopener noreferrer"
					href="https://github.com/solidjs/solid"
				>
					Learn Solid
				</a>
			</header>
		</div>
	);
};

export default App;
