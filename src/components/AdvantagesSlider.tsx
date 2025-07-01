import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

interface Advantage {
	title: string;
	description: string;
	icon: string;
}

const advantages: Advantage[] = [
	{
		title: 'Direct Offers for Maximum Earnings',
		description:
			'Tired of losing 10% to 50% of your profits by working through CPA networks? Partner with us directly and keep more of your hard-earned money!',
		icon: 'assets/icon-1.svg',
	},
	{
		title: 'Flexible Payouts at Your Fingertips',
		description:
			'Earn up to $50 per CPA and up to 45% revenue share and enjoy multiple withdrawal options. Qualifying webmasters can access growth loans!',
		icon: 'assets/icon-2.svg',
	},
	{
		title: 'Comprehensive Statistics at Your Side',
		description:
			'Our advanced tracking ensures you stay informed with every click and conversion, helping you optimize your strategy effectively.',
		icon: 'assets/icon-3.svg',
	},
	{
		title: 'Unique Promo Codes',
		description:
			'Motivate your players to register and enjoy deposit bonuses that keep them coming back for more with unique promo codes!',
		icon: 'assets/icon-4.svg',
	},
	{
		title: 'Tailored Localization for Higher Conversions',
		description:
			'We provide professional localization of dfferent materials to boost your connection with the audience, enhancing conversion rates by up to 30%!',
		icon: 'assets/icon-5.svg',
	},
];

export const AdvantagesSlider = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const cardsContainerRef = useRef<HTMLDivElement>(null);
	const [shouldIntercept, setShouldIntercept] = useState(false);
	const isMobile = useMediaQuery('(max-width: 768px)', {
		initializeWithValue: false,
	});
	const width = isMobile ? 346 + 8 : 390 + 8;

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	});

	const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
	const x = useSpring(
		useTransform(scrollYProgress, [0.3, 0.7], [0, -(advantages.length - 1) * width]), // 390px width + 8px gap
		springConfig,
	);

	useEffect(() => {
		const container = containerRef.current;
		const cardsContainer = cardsContainerRef.current;
		if (!container || !cardsContainer) return;

		const checkShouldIntercept = () => {
			const rect = container.getBoundingClientRect();
			const cardsRect = cardsContainer.getBoundingClientRect();

			// Починаємо перехоплення коли секція в центрі екрану
			const isCentered = rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.7;

			// Перевіряємо, чи не досягли ми кінця прокрутки (остання картка повністю видима)
			const hasReachedEnd = cardsRect.right <= window.innerWidth;

			setShouldIntercept(isCentered && !hasReachedEnd);
		};

		window.addEventListener('scroll', checkShouldIntercept);
		return () => window.removeEventListener('scroll', checkShouldIntercept);
	}, []);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const handleWheel = (e: WheelEvent) => {
			if (!shouldIntercept) return;

			e.preventDefault();
			const newX = x.get() - e.deltaY;
			const maxScroll = -(advantages.length - 3) * width;
			x.set(Math.max(Math.min(newX, 0), maxScroll));
		};

		window.addEventListener('wheel', handleWheel, { passive: false });
		return () => window.removeEventListener('wheel', handleWheel);
	}, [x, shouldIntercept, width]);

	return (
		<div
			ref={containerRef}
			className='flex-1 overflow-hidden max-w-screen'
		>
			<motion.div
				ref={cardsContainerRef}
				className='flex gap-8'
				style={{ x }}
			>
				{advantages.map((advantage) => (
					<motion.div
						key={advantage.title}
						className='flex flex-col items-start gap-6 rounded-2xl border border-white bg-[rgba(236,_142,_244,_0.04)] shadow-[0px_0px_48px_0px_rgba(181,_194,_227,_0.16)_inset] px-8 pb-8 pt-6 w-[390px] max-md:w-[346px] flex-shrink-0'
					>
						<div className='flex p-[10px] justify-center items-center rounded-full bg-[rgba(255,_255,_255,_0.04)]'>
							<img
								src={advantage.icon}
								alt=''
							/>
						</div>
						<div className='flex flex-col items-start gap-[14px]'>
							<p className='text-white text-xl font-semibold uppercase'>{advantage.title}</p>
							<p className='text-[#B6C4E7] text-sm font-normal font-[Inter]'>{advantage.description}</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};
