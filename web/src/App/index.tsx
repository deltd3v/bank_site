import type { Component } from "solid-js";

import styles from "./styles.module.css";
import logo from "../assets/logo/logo.svg";
import HelloWorld from './components/HelloWorld'

const App: Component = () => {
	return (
		<div class={styles.App}>
			<header class={styles.header}>
                <img src={logo} class={styles.logo} alt="logo" />
                <HelloWorld msg="Hello World"  />
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
