import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FaqItemProps {
	question: string;
	answer: string;
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div
			className='flex flex-col gap-2 w-full'
			initial={false}
		>
			<motion.div
				className={`flex flex-col justify-between items-start p-4 rounded-lg bg-[rgba(255,_255,_255,_0.04)] w-full cursor-pointer gap-5
					${isOpen ? 'border border-white backdrop-blur-lg' : ''}`}
				onClick={() => setIsOpen(!isOpen)}
				whileHover={{ scale: 1.01 }}
				transition={{ duration: 0.2 }}
			>
				<p className={`text-lg font-bold font-[Inter] ${isOpen ? 'text-[#E7D6B6]' : 'text-white'}`}>{question}</p>

				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className='overflow-hidden'
						>
							<div className=''>
								{answer.includes('https://') ? (
									<p className='text-sm text-[#B6C4E7] font-normal font-[Inter]'>
										{answer.split(/(https?:\/\/[^\s,]+)/).map((part, index) => {
											if (part.match(/^https?:\/\/[^\s,]+$/)) {
												return (
													<a
														key={index}
														href={part}
														target='_blank'
														rel='noopener noreferrer'
														className='text-[#E7D6B6] hover:underline'
													>
														{part}
													</a>
												);
											}
											return <span key={index}>{part}</span>;
										})}
									</p>
								) : (
									<p className='text-sm text-[#B6C4E7] font-normal font-[Inter]'>{answer}</p>
								)}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>

			{/* <AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='overflow-hidden'
					>
						<div className='p-4 rounded-lg bg-[rgba(255,_255,_255,_0.02)] text-[#B6C4E7]'>
							<p className='text-base font-normal font-[Inter]'>{answer}</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence> */}
		</motion.div>
	);
};
