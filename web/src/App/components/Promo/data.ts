import _1 from '../../../assets/illustrations/1.svg';
import _2 from '../../../assets/illustrations/2.svg';
import _3 from '../../../assets/illustrations/3.svg';
import _4 from '../../../assets/illustrations/4.svg';
import _5 from '../../../assets/illustrations/5.svg';
import _6 from '../../../assets/illustrations/6.svg';
import _7 from '../../../assets/illustrations/7.svg';

export type promoT = {
	id: string;
	theme: string;
	tabIdx: number;

	hasByLine: boolean;
	byLine: string;
	title: string;
	subTitle: string;
	promoDesc: string | string[];
	promoBtnLabel: string;
	imgStart: boolean;
	imgAlt: string;
	img: any;

	hasBtn: boolean;
	btnTheme: string;
	btnSize: String;
};

export const promoData: promoT[] = [
	{
		id: 'about',
		theme: 'light',
		tabIdx: 6,
		imgStart: true,
		img: _1,
		imgAlt: 'Star Bank Image',
		hasByLine: true,
		byLine: 'ABOUT US',
		title: 'Who are we ?',
		subTitle: 'A FREE-MIUM BANK',
		promoDesc:
			'We offer premium banking services at an affordable cost to the modern homo-sapien 💰⭐',
		hasBtn: true,
		btnTheme: 'dark',
		btnSize: 'small',
		promoBtnLabel: 'Learn More',
	},
	{
		id: 'security',
		theme: 'dark',
		tabIdx: 7,
		imgStart: false,
		img: _2,
		imgAlt: 'security image',
		hasByLine: true,
		byLine: 'SECURITY',
		title: 'SECURE VAULTS & TRANSACTIONS',
		subTitle: '',
		promoDesc:
			'Trust in our industry leading security team to keep our vaults & transactions secure worldwide and provide you with instant access to what is yours 🔓',
		promoBtnLabel: 'Read More',

		hasBtn: true,
		btnTheme: 'light',
		btnSize: 'small',
	},
	{
		id: 'ease-of-use',
		theme: 'light',
		tabIdx: 7,
		imgStart: false,
		img: _6,
		imgAlt: 'Ease of use image',
		hasByLine: true,
		byLine: 'RELIABILITY',
		title: 'EASY TO USE PLATFORM',
		subTitle: '',
		promoDesc:
			'Our dashboards offer very simple tools for maintaining control over your finances👍',
		promoBtnLabel: 'Read More',

		hasBtn: true,
		btnTheme: 'dark',
		btnSize: 'small',
	},
	{
		id: 'analytics',
		theme: 'dark',
		tabIdx: 7,
		imgStart: true,
		img: _7,
		imgAlt: 'Financial analytics image',
		hasByLine: true,
		byLine: 'PRODUCTIVITY',
		title: 'UNDERSTAND YOUR DATA',
		subTitle: '',
		promoDesc:
			'We provide the tools to analyze spendings and keep track of§ payments 💹. You will also receive charts and graph overviews for your account spending and FREE 🆓 💯 courses on how to invest your savings 😎 ➕ consultancy',
		promoBtnLabel: 'Read More',

		hasBtn: true,
		btnTheme: 'light',
		btnSize: 'small',
	},
];

export default promoData;
