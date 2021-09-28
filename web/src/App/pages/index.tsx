import { Component, createSignal, For } from 'solid-js';
import BankServices from '../components/BankServices';
import FooterSection from '../components/Footer';
import Hero from '../components/Hero';
import PromoInfo from '../components/Promo';
import promoData from '../components/Promo/data';

const Index: Component = () => {
	const [promos, _setPromos] = createSignal(promoData);

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
			<BankServices></BankServices>
			<div id="sign-up" style="width:100%;height: 100%;">
				<h1>sign up</h1>
			</div>
			<FooterSection></FooterSection>
		</div>
	);
};

export default Index;
