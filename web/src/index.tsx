import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';

import App from './App';
import './styles/global.scss';

const root = document.getElementById('root');

render(
	() => (
		<>
			<Router>
				<App />
			</Router>
		</>
	),
	root
);
