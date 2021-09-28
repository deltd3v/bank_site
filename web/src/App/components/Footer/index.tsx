import { Component } from 'solid-js';
import Logo from '../Logo';

import s from './styles.module.scss';

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
					<div class={s.linkItems}>
						<h2 class={s.linkTitle}>About</h2>
						<a href="#sign-up" class={s.link}>
							Info
						</a>
						<a href="#" class={s.link}>
							Careers
						</a>
						<a href="#" class={s.link}>
							Stocks
						</a>
						<a href="#" class={s.link}>
							Investors
						</a>
						<a href="#" class={s.link}>
							Terms and Conditions
						</a>
					</div>

					<div class={s.linkItems}>
						<h2 class={s.linkTitle}>Contacts</h2>
						<a href="#" class={s.link}>
							Post
						</a>
						<a href="#" class={s.link}>
							Mail
						</a>
						<a href="#" class={s.link}>
							Chat
						</a>
						<a href="#" class={s.link}>
							Phone
						</a>
						<a href="#" class={s.link}>
							Bird Carriers 🦅
						</a>
					</div>

					<div class={s.linkItems}>
						<h2 class={s.linkTitle}>Operations</h2>
						<a href="#sign-up" class={s.link}>
							Headquarters
						</a>
						<a href="#" class={s.link}>
							Branches
						</a>
						<a href="#" class={s.link}>
							Managers
						</a>
						<a href="#" class={s.link}>
							Invistors
						</a>
						<a href="#" class={s.link}>
							Customer Relations
						</a>
					</div>

					<div class={s.linkItems}>
						<h2 class={s.linkTitle}>Platforms</h2>
						<a href="#sign-up" class={s.link}>
							Code app
						</a>
						<a href="#" class={s.link}>
							ATMs
						</a>
						<a href="#" class={s.link}>
							Mobile
						</a>
						<a href="#" class={s.link}>
							Web
						</a>
						<a href="#" class={s.link}>
							Cards
						</a>
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

					<code class={s.copyRight} style="margin: 0 .5em">
						© {new Date().getFullYear()}
					</code>

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
							<i
								class={s.socialMediaIcon}
								data-feather="youtube"></i>
						</a>
						<a
							class={s.socialMediaIconLink}
							href="#"
							target="_blank"
							aria-label="Twitter">
							<i
								class={s.socialMediaIcon}
								data-feather="twitter"></i>
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
		</div>
	);
};

export default FooterSection;
