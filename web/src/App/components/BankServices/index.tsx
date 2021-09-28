import { Component } from 'solid-js';

import iconA from '../../../assets/illustrations/4.svg';
import iconB from '../../../assets/illustrations/8.svg';
import iconC from '../../../assets/illustrations/9.svg';

import s from './styles.module.scss';

export const BankServices: Component = () => {
	return (
		<div class={s.container} id="services">
			<h1 class={s.title}>Bank Services</h1>

			<section class={s.wrapper}>
				<section className={s.serviceCard}>
					<img class={s.serviceIcon} src={iconA}></img>

					<h2 class={s.serviceTitle}>Reduce Expenses</h2>

					<p class={s.serviceMotto}>
						The best of the best work with us to guarantee your
						security 🔓 and growth 📈
					</p>
				</section>

				<section className={s.serviceCard}>
					<img class={s.serviceIcon} src={iconB}></img>

					<h2 class={s.serviceTitle}>Consultancies</h2>

					<p class={s.serviceMotto}>
						❔ When curious or in doubt do not hesitate to book a
						session ⏳ with one of our consultants 🤙 who can help
						you
					</p>
				</section>

				<section className={s.serviceCard}>
					<img class={s.serviceIcon} src={iconC}></img>

					<h2 class={s.serviceTitle}>Benefits</h2>

					<p class={s.serviceMotto}>
						Unlock a special bonuses and benefits 🏆 by earning
						credit with us
					</p>
				</section>
			</section>
		</div>
	);
};

export default BankServices;
