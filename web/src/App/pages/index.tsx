import { Component, createSignal, For } from 'solid-js';
import Hero from '../components/Hero';
import PromoInfo from '../components/Promo';
import promoData from '../components/Promo/data';

const Index: Component = () => {
	const [promos, setPromos] = createSignal(promoData);

	return (
		<div id="index" class="page" style="width:100%;">
			<Hero></Hero>

			<For each={promos()}>
				{(promo, i) => {
					return (
						<>
							<PromoInfo {...promo} />
						</>
					);
				}}
			</For>
		</div>
	);
};

export default Index;
