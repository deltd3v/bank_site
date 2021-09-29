import { Component } from 'solid-js';

import s from './styles.module.scss';

export const SignUpSection: Component = () => {
	return (
		<div id="sign-up" class={s.container}>
			<label htmlFor="sign-up-form" class={s.formLabel}>
				Create An Account <br /> ➕⭐
			</label>

			<form id="sign-up-form" action="#" class={s.form}>
				<section>
					<label htmlFor="email" class={s.inputLabel}>
						Email
					</label>
					<input
						type="text"
						id="email"
						class={s.input}
						placeholder="jane_doe@email.com"
					/>
				</section>
				<section>
					<label htmlFor="username" class={s.inputLabel}>
						Username
					</label>
					<input
						type="text"
						id="username"
						class={s.input}
						placeholder="jane_doe"
					/>
				</section>
				<section>
					<label htmlFor="password" class={s.inputLabel}>
						Password
					</label>
					<input
						type="password"
						id="password"
						class={s.input}
						placeholder="xxxxxx"
					/>
				</section>

				<button class={s.SignUpBtn} onClick={(e) => e.preventDefault()}>
					Sign Up
				</button>
			</form>
		</div>
	);
};
