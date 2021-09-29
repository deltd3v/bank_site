import { Component, createEffect, createSignal } from 'solid-js';

import Logo from '../Logo';

import s from './styles.module.scss';

const NavBar: Component = () => {
	const [menuToggle, setMenuToggle] = createSignal(false);
	const [button, setButton] = createSignal(false);

	const handleMenuToggle = () => setMenuToggle(!menuToggle());

	const closeMobileMenu = () => setMenuToggle(false);

	const showButton = () => {
		setButton();
		setMenuToggle();
	};

	createEffect(() => {
		showButton();
	});

	window.addEventListener('load', (_) => {
		handleMenuToggle();
	});

	window.addEventListener(
		'keydown',
		(e) => e.key == 'Escape' && closeMobileMenu()
	);

	window.addEventListener('scroll', () => {
		setMenuToggle(true);
		setButton(true);
	});

	window.addEventListener('resize', showButton);
	return (
		<nav id="nav" class={s['Nav']}>
			<div id="NavbarContainer" class={s['NavbarContainer']}>
				<a
					tabIndex={1}
					href="#index"
					class={s['NavLogoLink']}
					onClick={closeMobileMenu}
				>
					star
					<Logo
						width={20}
						height={20}
						strokeColor={'white'}
						class={'NavLogoIcon'}
						strokeWidth={75}
					></Logo>
					bank
				</a>

				<div
					tabIndex={2}
					class={`${s['MobileIcon']} ${
						s[!menuToggle() ? 'close' : 'open']
					}`}
					onClick={handleMenuToggle}
				>
					<i
						class={s['menu-open']}
						style={`color: white;stroke-width:.12em`}
						data-feather="menu"
					></i>

					<i
						class={s['menu-close']}
						style={`color: white;stroke-width:.12em`}
						data-feather="x"
					></i>
				</div>

				<ul
					onClick={handleMenuToggle}
					id="NavMenu"
					class={`${s['NavMenu']} 
						${s[`${!menuToggle() ? 'NavMenu-open' : 'NavMenu-close'}`]}`}
				>
					<li class={s['NavItem']}>
						<a tabIndex={3} href="#index" class={s['NavLink']}>
							<b onClick={closeMobileMenu}>Home</b>
						</a>
					</li>
					<li class={s['NavItem']}>
						<a tabIndex={4} href="#about" class={s['NavLink']}>
							<b onClick={closeMobileMenu}>About</b>
						</a>
					</li>
					<li class={s['NavItem']}>
						<a tabIndex={4} href="#services" class={s['NavLink']}>
							<b onClick={closeMobileMenu}>Services</b>
						</a>
					</li>

					<li class={s['NavItemBtn']}>
						{button ? (
							<a href="#sign-up" class={`${s['NavBtnLink']}`}>
								<button
									tabIndex={7}
									class={`${s['Button']} ${s['padBig']} ${s['bgPrimary']}`}
								>
									<b>Sign Up</b>
									<i data-feather="user-plus"></i>
								</button>
							</a>
						) : (
							<a href="#sign-up" class={`${s['NavBtnLink']}`}>
								<button
									tabIndex={8}
									class={`${s['Button']} ${s['bgPrimary']}  ${s['padBig']} ${s['fontBig']}`}
									onClick={closeMobileMenu}
								>
									<b>Sign Up</b>
								</button>
							</a>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
