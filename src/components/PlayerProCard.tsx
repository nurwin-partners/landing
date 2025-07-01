interface PlayerProCardProps {
	title: string;
	description: string;
	image: string;
}

export const PlayerProCard = ({ title, description, image }: PlayerProCardProps) => {
	return (
		<div
			className='w-[934px] max-md:w-[346px] h-[420px] max-md:h-[491px] flex items-end flex-shrink-0 max-md:rounded-2xl bg-cover bg-center bg-no-repeat max-md:bg-contain max-md:bg-top'
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<div className='flex max-md:flex-col px-16 max-md:pl-8 max-md:pr-4 max-md:py-4 h-[118px] max-md:h-[202px] items-center max-md:items-start bg-[rgba(32,_41,_53,_0.74)] backdrop-blur-xl gap-10 max-md:gap-[10px] w-full justify-between max-md:justify-start max-md:rounded-b-2xl'>
				<p
					className='text-white text-xl font-semibold uppercase max-w-[320px] shrink-0 max-md:text-start'
					style={{
						letterSpacing: '1px',
					}}
				>
					{title}
				</p>
				<p className='text-white text-sm font-normal font-[Inter]'>{description}</p>
			</div>
		</div>
	);
};
