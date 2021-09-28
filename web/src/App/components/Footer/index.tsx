import { Component, For } from 'solid-js';
import Logo from '../Logo';

import s from './styles.module.scss';

const FooterLink: Component<{
	linkGroupTitle: string;
	links: { link: string; label: string }[];
}> = (props) => {
	return (
		<div class={s.linkItems}>
			<h3 class={s.linkTitle}>{props.linkGroupTitle}</h3>

			<For
				each={props.links}
				fallback={<div>Links are being loaded...</div>}>
				{(l, _index) => (
					<a href={l.link} class={s.link}>
						{l.label}
					</a>
				)}
			</For>
		</div>
	);
};

const FooterSection: Component = () => {
	return (
		<div id="footer" class={s.container}>
			<div class={s.subscription}>
				<section class={s.subHeading}>
					<pre class="margin: .6em 0em">
						Wanna know what we're upto ?
					</pre>
					<h3>Great ! ⭐Subscribe to our weekly newsletter 📰</h3>
				</section>
				<p class={s.subText}>You can cancel it any time</p>
				<form action="#" class={s.form}>
					<input
						type="email"
						name="email"
						id="email"
						class={s.formInput}
						placeholder="email@email.com"
					/>
					<button class={s.Button}>Subscribe</button>
				</form>
			</div>

			<div class={s.linksContainer}>
				<div class={s.linksWrapper}>
					<FooterLink
						linkGroupTitle="Info"
						links={[
							{ label: 'Careers', link: '#' },
							{ label: 'Stocks', link: '#' },
							{ label: 'Investors', link: '#' },
							{ label: 'Terms and Codes', link: '#' },
						]}></FooterLink>

					<FooterLink
						linkGroupTitle="Contacts"
						links={[
							{ label: 'Mail', link: '#' },
							{ label: 'Chat', link: '#' },
							{ label: 'Phone', link: '#' },
							{ label: 'Bird Carriers 🦅', link: '#' },
						]}></FooterLink>

					<FooterLink
						linkGroupTitle="Headquarters"
						links={[
							{ label: 'Branches', link: '#' },
							{ label: 'Managers', link: '#' },
							{ label: 'Investors', link: '#' },
							{ label: 'Customer Relations', link: '#' },
						]}></FooterLink>

					<FooterLink
						linkGroupTitle="Platforms"
						links={[
							{ label: 'Mobile', link: '#' },
							{ label: 'Web', link: '#' },
							{ label: 'ATMs', link: '#' },
							{ label: 'Code app', link: '#' },
						]}></FooterLink>
				</div>
			</div>
			<div class={s.socialMediaSection}>
				<section class={s.socialMediaWrap}>
					<a
						href="#"
						class={s.socialMediaLogo}
						style="font-size: 1.2em; align-items:center; font-weight: bolder;">
						star
						<Logo
							class={s.socialMediaIcon}
							width={50}
							height={30}
							strokeColor={'white'}
							strokeWidth={80}></Logo>
						bank
					</a>
				</section>

				<div class={s.copyRight}>
					© <pre>{new Date().getFullYear()}</pre>
				</div>

				<div class={s.socialMediaIcons}>
					<a
						class={s.socialMediaIconLink}
						href="#"
						target="_blank"
						aria-label="Facebook">
						<i
							class={s.socialMediaIcon}
							data-feather="facebook"></i>
					</a>
					<a
						class={s.socialMediaIconLink}
						href="#"
						target="_blank"
						aria-label="Instagram">
						<i
							class={s.socialMediaIcon}
							data-feather="instagram"></i>
					</a>
					<a
						class={s.socialMediaIconLink}
						href="#"
						target="_blank"
						aria-label="Youtube">
						<i class={s.socialMediaIcon} data-feather="youtube"></i>
					</a>
					<a
						class={s.socialMediaIconLink}
						href="#"
						target="_blank"
						aria-label="Twitter">
						<i class={s.socialMediaIcon} data-feather="twitter"></i>
					</a>
					<a
						class={s.socialMediaIconLink}
						href="#"
						target="_blank"
						aria-label="LinkedIN">
						<i
							class={s.socialMediaIcon}
							data-feather="linkedin"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default FooterSection;
