import { Link } from 'solid-app-router';
import {
	Component,
	createEffect,
	createSignal,
	createComputed,
	Match,
	createMemo,
} from 'solid-js';

import Logo from '../Logo';
import styles from './styles.module.scss';

const NavBar: Component = () => {
	const [menuToggle, setMenuToggle] = createSignal(false);
	const [button, setButton] = createSignal(false);

	const handleMenuToggle = () => setMenuToggle(!menuToggle());

	const closeMobileMenu = () => setMenuToggle(false);

	const showButton = () => {
		if (window.innerWidth >= 960) {
			setButton(true);
		} else {
			setMenuToggle(true);
			setButton(false);
		}
	};

	createEffect(() => {
		showButton();
	});

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav class={styles['Nav']}>
				<div class={styles['NavbarContainer']}>
					<a
						tabIndex={1}
						href="#index"
						class={styles['NavLogoLink']}
						onClick={closeMobileMenu}>
						star
						<Logo
							width={20}
							height={20}
							strokeColor={'white'}
							class={'NavLogoIcon'}
							strokeWidth={75}></Logo>
						bank
					</a>

					<div
						class={`${styles['MobileIcon']} ${
							styles[!menuToggle() ? 'close' : 'open']
						}`}
						onClick={handleMenuToggle}>
						<i
							class={styles['menu-open']}
							style={`color: white;stroke-width:.12em`}
							data-feather="menu"></i>

						<i
							class={styles['menu-close']}
							style={`color: white;stroke-width:.12em`}
							data-feather="x"></i>
					</div>

					<ul
						onClick={handleMenuToggle}
						class={`${styles['NavMenu']} 
						${styles[`${!menuToggle() ? 'NavMenu-open' : 'NavMenu-close'}`]}`}>
						<li class={styles['NavItem']}>
							<a tabIndex={2} href="/" class={styles['NavLink']}>
								<b onClick={closeMobileMenu}>Home</b>
							</a>
						</li>
						<li class={styles['NavItem']}>
							<a
								tabIndex={3}
								href="#about"
								class={styles['NavLink']}>
								<b onClick={closeMobileMenu}>About</b>
							</a>
						</li>
						<li class={styles['NavItem']}>
							<a
								tabIndex={4}
								href="#products"
								class={styles['NavLink']}>
								<b onClick={closeMobileMenu}>Products</b>
							</a>
						</li>
						<li class={styles['NavItem']}>
							<a
								tabIndex={5}
								href="#services"
								class={styles['NavLink']}>
								<b onClick={closeMobileMenu}>Services</b>
							</a>
						</li>

						<li class={styles['NavItemBtn']}>
							{button ? (
								<a
									href="#sign-up"
									class={`${styles['NavBtnLink']}`}>
									<button
										tabIndex={6}
										class={`${styles['Button']} ${styles['padBig']} ${styles['bgPrimary']}`}>
										<b>Sign Up</b>
									</button>
								</a>
							) : (
								<a
									href="#sign-up"
									class={`${styles['NavBtnLink']}`}>
									<button
										tabIndex={6}
										class={`${styles['Button']} ${styles['bgPrimary']}  ${styles['padBig']} ${styles['fontBig']}`}
										onClick={closeMobileMenu}>
										<b>Sign Up</b>
									</button>
								</a>
							)}
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
