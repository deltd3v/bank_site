import { Component, createSignal, For } from 'solid-js';
import BankServices from '../components/BankServices';
import FooterSection from '../components/Footer';
import Hero from '../components/Hero';
import PromoInfo from '../components/Promo';
import promoData from '../components/Promo/data';
import { SignUpSection } from '../components/SignUp';

const Index: Component = () => {
	const [promos, _setPromos] = createSignal(promoData);

	return (
		<div id="index">
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
			<SignUpSection></SignUpSection>
			<FooterSection></FooterSection>
		</div>
	);
};

export default Index;
