import { Component, For } from 'solid-js';
import Logo from '../Logo';

import s from './styles.module.scss';

const footLink: Component<{
	linkGroupTitle: string;
	links: { link: string; label: string }[];
}> = (props) => {
	return (
		<div class={s.linkItems}>
			<h3 class={s.linkTitle}>{props.linkGroupTitle}</h3>

			<For
				each={props.links}
				fallback={<div>Links are being loaded...</div>}
			>
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
		<div class={s.container}>
			<div class={s.subWrapper}>
				<h2 class={s.subHeading}>
					Join our club to get access to our latest articles and
					offers 😎
				</h2>
				<p class={s.subText}>
					{' '}
					Feel free to unsubscribe from our mailing list at any time.
				</p>
				<form action="#" class={s.form}>
					<input
						class={s.formInpt}
						name="email"
						type="email"
						placeholder="jane_doe@email.com"
					/>
					<button class={s.Button}>Join</button>
				</form>
			</div>

			{/* 
			 
			   	<footLink
						linkGroupTitle="Headquarters"
						links={[
							{ label: 'Branches', link: '#' },
							{ label: 'Managers', link: '#' },
							{ label: 'Investors', link: '#' },
							{ label: 'Customer Relations', link: '#' },
						]}
					></footLink>

*/}

			<div class={s.linkContainer}>
				<ul class={s.linkWrapper}>
					<li class={s.linkItem}>
						<h5 class={s.linkItemTitle}>About Us</h5>
						<a class={s.footLink} href="/#sign-up">
							Info
						</a>
						<a class={s.footLink} href="#">
							Careers
						</a>
						<a class={s.footLink} href="#">
							Stocks
						</a>
						<a class={s.footLink} href="#">
							Investors
						</a>
					</li>
					<li class={s.linkItem}>
						<h5 class={s.linkItemTitle}>Contact Us</h5>
						<a class={s.footLink} href="#">
							Mail
						</a>
						<a class={s.footLink} href="#">
							Chat
						</a>
						<a class={s.footLink} href="#">
							Phone
						</a>
						<a class={s.footLink} href="#">
							Bird Carrier 🦅
						</a>
					</li>
				</ul>
				<ul class={s.linkWrapper}>
					<li class={s.linkItem}>
						<h5 class={s.linkItemTitle}>HQ</h5>
						<a class={s.footLink} href="#">
							Corp
						</a>
						<a class={s.footLink} href="#">
							Branches
						</a>
						<a class={s.footLink} href="#">
							Management
						</a>
						<a class={s.footLink} href="#">
							Visionaries
						</a>
					</li>

					<li class={s.linkItem}>
						<h5 class={s.linkItemTitle}>Socials</h5>
						<a class={s.footLink} href="#">
							Instagram
						</a>
						<a class={s.footLink} href="#">
							Facebook
						</a>
						<a class={s.footLink} href="#">
							Youtube
						</a>
						<a class={s.footLink} href="#">
							Twitter
						</a>
					</li>
				</ul>
			</div>

			<div class={s.socials}>
				<div class={s.socialsWrap}>
					<a class={s.socialsLogos} href="/">
						star
						<Logo strokeWidth={50} width={40} height={40} />
						bank
					</a>
					<pre class={s.WebsiteRights}>ULTRA © 2020</pre>
					<ul class={s.socialsIcons}>
						<a
							class={s.socialsIconLink}
							href="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i data-feather="facebook"></i>
						</a>
						<a
							class={s.socialsIconLink}
							href="/"
							target="_blank"
							aria-label="Instagram"
						>
							<i data-feather="instagram"></i>
						</a>

						<a
							class={s.socialsIconLink}
							href="/"
							target="_blank"
							aria-label="Twitter"
						>
							<i data-feather="twitter"></i>
						</a>
						<a
							class={s.socialsIconLink}
							href="/"
							target="_blank"
							aria-label="LinkedIn"
						>
							<i data-feather="linkedin"></i>
						</a>
					</ul>
				</div>
			</div>
		</div>
	);
	/*return (
		 
		 

				

				

					<footLink
						linkGroupTitle="Platforms"
						links={[
							{ label: 'Mobile', link: '#' },
							{ label: 'Web', link: '#' },
							{ label: 'ATMs', link: '#' },
							{ label: 'Code app', link: '#' },
						]}
					></footLink>
				</div>
			</div>
			<div class={s.socialMediaSection}>
				<section class={s.socialMediaWrap}>
					<a
						href="#"
						class={s.socialMediaLogo}
						style="font-size: 1.2em; align-items:center; font-weight: bolder;"
					>
						star
						<Logo
							class={s.socialMediaIcon}
							width={50}
							height={30}
							strokeColor={'white'}
							strokeWidth={80}
						></Logo>
						bank
					</a>
				</section>

				<div class={s.copyRight}>
					<pre>All rights reserved</pre> ©{' '}
					<pre>{new Date().getFullYear()}</pre>
				</div>

				<div class={s.socialMediaIcons}>
					<a
						class={s.socialMediaIconLink}
						href="#"
						target="_blank"
						aria-label="Facebook"
					>
						<i
							class={s.socialMediaIcon}
							data-feather="facebook"
						></i>
					</a>
					<a
						class={s.socialMediaIconLink}
						href="#"
						target="_blank"
						aria-label="Instagram"
					>
						<i
							class={s.socialMediaIcon}
							data-feather="instagram"
						></i>
					</a>
					<a
						class={s.socialMediaIconLink}
						href="#"
						target="_blank"
						aria-label="Youtube"
					>
						<i class={s.socialMediaIcon} data-feather="youtube"></i>
					</a>
					<a
						class={s.socialMediaIconLink}
						href="#"
						target="_blank"
						aria-label="Twitter"
					>
						<i class={s.socialMediaIcon} data-feather="twitter"></i>
					</a>
					<a
						class={s.socialMediaIconLink}
						href="#"
						target="_blank"
						aria-label="LinkedIN"
					>
						<i
							class={s.socialMediaIcon}
							data-feather="linkedin"
						></i>
					</a>
				</div>
			</div>
		</div>
	);*/
};

export default FooterSection;
