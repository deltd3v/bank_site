import { Component, createEffect, createSignal } from 'solid-js';
import { promoT } from './data';
import s from './styles.module.scss';

// export type PromoProps = {
// 	theme: string;
// 	id: string;
// 	promoTitle: string;
// 	byLine: string;
// 	subTitle: string;
// };

const PromoInfo: Component<promoT> = (props) => {
	const [theme, setTheme] = createSignal(props.theme || 'light');

	return (
		<div
			id={props.id}
			class={`${s.container} ${
				theme() == 'light' ? s.themeLight : s.themeDark
			}`}>
			<div class={s.wrapper}>
				<section
					class={`${s.promoRow} ${
						props.imgStart ? s.gtaImgStart : s.gtaImgEnd
					}`}>
					<div class={s.column1}>
						<article class={s.textWrapper}>
							{props.hasByLine && (
								<pre class={s.byLine}>
									{props.byLine.toUpperCase() || 'BY LINE'}
								</pre>
							)}
							<h2
								class={`${s.title} ${
									theme() == 'light'
										? s.titleDark
										: s.titleLight
								}`}>
								{props.title.toUpperCase() || 'TITLE'}
							</h2>

							{props.subTitle && (
								<h6
									class={`${s.subTitle} ${
										theme() == 'light'
											? s.subTitleDark
											: s.subTitleLight
									}`}>
									{props.subTitle || 'SUB TITLE'}{' '}
								</h6>
							)}

							{props.promoDesc && (
								<p
									class={`${s.promoDesc} ${
										theme() == 'light'
											? s.promoDescDark
											: s.promoDescLight
									}`}>
									{props.promoDesc}
								</p>
							)}

							{props.hasBtn && (
								<a href="#index" class={s.btnWrapper}>
									<button
										tabIndex={props.tabIdx}
										class={`${s.btn} ${
											props.btnSize == 'small'
												? s['btn-small']
												: s['btn-big']
										} ${
											props.btnTheme == 'light'
												? s['btn-light']
												: s['btn-dark']
										}`}>
										{props.promoBtnLabel || 'CLICK'}
									</button>
								</a>
							)}
						</article>
					</div>

					{props.img && (
						<div class={s.column2}>
							<div class={s.imgWrap}>
								<img
									class={s.img}
									src={props.img}
									alt={props.imgAlt}
								/>
							</div>
						</div>
					)}
				</section>
			</div>
		</div>
	);
};

export default PromoInfo;
