import { Component } from 'solid-js';

import s from './styles.module.scss';

const FooterSection: Component = () => {
	return (
		<div id="footer" class={s.container}>
			<div class={s.wrapper}>
				<div class={s.linksContainer}>
					<div class={s.linksWrapper}>
						<div class={s.linkItems}>
							<div class={s.linkTitle}>
								<a href="#" class={s.footerLink}>
									Home
								</a>
								<a href="#" class={s.footerLink}>
									About Us
								</a>
								<a href="#" class={s.footerLink}>
									Services
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterSection;
