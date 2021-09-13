import { NavLink } from 'solid-app-router';
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
	const [button, setButton] = createSignal(true);

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
					<NavLink
						href="/"
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
					</NavLink>

					<div
						class={`${styles['MobileIcon']} ${
							styles[menuToggle() ? 'close' : 'open']
						}`}
						onClick={handleMenuToggle}>
						<i
							class={styles['menu-open']}
							style={`color: white;`}
							data-feather="menu"></i>

						<i
							class={styles['menu-close']}
							style={`color: white;`}
							data-feather="x-square"></i>
					</div>

					<ul
						onClick={handleMenuToggle}
						class={`${styles['NavMenu']} 
						${styles[`${menuToggle() ? 'NavMenu-open' : 'NavMenu-close'}`]}`}>
						<li class={styles['NavItem']}>
							<NavLink href="/" class={styles['NavLink']}>
								<b onClick={closeMobileMenu}>Home</b>
							</NavLink>
						</li>
						<li class={styles['NavItem']}>
							<NavLink href="/about" class={styles['NavLink']}>
								<b onClick={closeMobileMenu}>About</b>
							</NavLink>
						</li>
						<li class={styles['NavItem']}>
							<NavLink href="/products" class={styles['NavLink']}>
								<b onClick={closeMobileMenu}>Products</b>
							</NavLink>
						</li>
						<li class={styles['NavItem']}>
							<NavLink href="/services" class={styles['NavLink']}>
								<b onClick={closeMobileMenu}>Services</b>
							</NavLink>
						</li>

						<li class={styles['NavItemBtn']}>
							{button ? (
								<NavLink
									href="/sign-up"
									class={`${styles['NavBtnLink']}`}>
									<button
										class={`${styles['Button']} ${styles['padBig']} ${styles['bgPrimary']}`}>
										<b>Sign Up</b>
									</button>
								</NavLink>
							) : (
								<NavLink
									href="/sign-up"
									class={`${styles['NavBtnLink']}`}>
									<button
										class={`${styles['Button']} ${styles['bgPrimary']}  ${styles['padBig']} ${styles['fontBig']}`}
										onClick={closeMobileMenu}>
										<b>Sign Up</b>
									</button>
								</NavLink>
							)}
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
