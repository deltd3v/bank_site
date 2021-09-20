import { Component, createSignal } from 'solid-js';

import s from './styles.module.scss';
import video from '../../../assets/videos/video.mp4';

export const Hero: Component = () => {
	const [heroCtaHover, setHeroCtaHover] = createSignal(false);

	const toggleCtaHover = () => {
		setHeroCtaHover(!heroCtaHover());
	};

	return (
		<div id="hero" class={s.container}>
			<section class={s.heroBg}>
				<video class={s.videoBg} autoplay loop muted src={video} />
			</section>
			{/*  */}
			<article id="heroContent" class={s.heroContent}>
				<h1 class={s.heroTitle}>Premium banking</h1>
				<p class={s.heroMotto}>
					Begin your journey with us today to receive <br />
					credits + bonuses today ! 💓{' '}
				</p>
			</article>
			{/*  */}
			<section class={s.heroCtaBtnContainer}>
				<a
					class={s.heroCtaBtnLink}
					href="#sign-up"
					onMouseEnter={toggleCtaHover}
					onMouseLeave={toggleCtaHover}>
					<button
						tabIndex={8}
						class={`${s.heroCtaBtn} ${
							heroCtaHover()
								? `${s.iconChevRight}`
								: `${s.iconRight}`
						}`}>
						<b>Join Us</b>
						<i
							class={`${s.heroCtaBtnIcon} ${s.heroCtaBtnIconA}`}
							data-feather={'arrow-right'}></i>
						<i
							class={`${s.heroCtaBtnIcon} ${s.heroCtaBtnIconB}`}
							data-feather={'chevrons-right'}></i>
					</button>
				</a>
			</section>
		</div>
	);
};

export default Hero;
