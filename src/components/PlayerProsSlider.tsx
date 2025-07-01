import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PlayerProCard } from './PlayerProCard';
import { useMediaQuery } from 'usehooks-ts';

interface PlayerPro {
	title: string;
	description: string;
	image: string;
	mobileImage: string;
}

const playerPros: PlayerPro[] = [
	{
		title: 'Flexible Wagering Options',
		description:
			'We cater to different betting styles with flexible wagering limits, allowing both casual players and high rollers to enjoy their preferred gaming experience.',
		image: 'assets/frame-1.png',
		mobileImage: 'assets/mobileframe-1.png',
	},
	{
		title: 'Safe and Secure Gaming Environment',
		description:
			'Enjoy robust security measures to protect your data and transactions, ensuring a safe and trustworthy gaming experience.',
		image: 'assets/frame-2.png',
		mobileImage: 'assets/mobileframe-2.png',
	},
	{
		title: 'Exceptional Tech Support',
		description:
			'Enjoy 24/7 customer support, making your betting experience smooth and enjoyable. High rollers receive personalized VIP support for an elevated gaming experience.',
		image: 'assets/frame-3.png',
		mobileImage: 'assets/mobileframe-3.png',
	},
	{
		title: 'Extensive Casino and Slot Selection',
		description:
			'Choose from over 9,000 slots powered by 15 of the largest suppliers. This vast library ensures greater engagement and higher average spending for our players!',
		image: 'assets/frame-4.png',
		mobileImage: 'assets/mobileframe-4.png',
	},
	{
		title: 'Educational Resources',
		description:
			'Choose from over 9,000 slots powered by 15 of the largest suppliers. This vast library ensures greater engagement and higher average spending for our players!',
		image: 'assets/frame-5.png',
		mobileImage: 'assets/mobileframe-5.png',
	},
	{
		title: 'Convenient Deposits',
		description:
			'We offer a wide array of local payment solutions, ensuring seamless balance replenishment for our players. The result? Higher deposit conversion rates and a hassle-free experience!',
		image: 'assets/frame-6.png',
		mobileImage: 'assets/mobileframe-6.png',
	},
	{
		title: 'Exciting Bonuses',
		description:
			'Take advantage of an extensive range of promotions designed to enhance your gaming experience. Enjoy generous 100% deposit bonuses, free spins, and "risk-free bets" that keep the excitement going!',
		image: 'assets/frame-7.png',
		mobileImage: 'assets/mobileframe-7.png',
	},
	{
		title: 'Mobile Compatibility',
		description:
			'Enjoy the flexibility of gaming on-the-go with a fully optimized mobile platform, allowing players to place bets and enjoy their favorite games anytime, anywhere.',
		image: 'assets/frame-8.png',
		mobileImage: 'assets/mobileframe-8.png',
	},
	{
		title: 'Loyalty Programs',
		description:
			'We reward players for their continued engagement with exclusive loyalty programs that offer points, milestones, and special rewards as they play.',
		image: 'assets/frame-9.png',
		mobileImage: 'assets/mobileframe-9.png',
	},
];

export const PlayerProsSlider = () => {
	const controls = useAnimationControls();
	const [cards, setCards] = useState(playerPros);
	const isMobile = useMediaQuery('(max-width: 768px)', {
		initializeWithValue: false,
	});
	const width = isMobile ? 346 : 934;

	useEffect(() => {
		const startAnimation = async () => {
			await controls.start({
				x: -(width + 16), // ширина картки + відступ
				transition: {
					duration: 8,
					ease: 'linear',
					repeat: 0,
				},
			});

			// Після завершення анімації переставляємо першу картку в кінець
			setCards((prev) => {
				const newCards = [...prev];
				const firstCard = newCards.shift();
				if (firstCard) newCards.push(firstCard);
				return newCards;
			});

			// Миттєво повертаємо слайдер в початкову позицію
			controls.set({ x: 0 });

			// Запускаємо анімацію знову
			startAnimation();
		};

		startAnimation();
	}, [controls, width]);

	return (
		<div className='overflow-hidden max-w-screen'>
			<motion.div
				className='flex gap-4'
				animate={controls}
			>
				{cards.map((pro, index) => (
					<PlayerProCard
						key={`${index}-${pro.title}`}
						title={pro.title}
						description={pro.description}
						image={isMobile ? pro.mobileImage : pro.image}
					/>
				))}
			</motion.div>
		</div>
	);
};
