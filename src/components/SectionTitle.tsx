export const SectionTitle = ({ children }: { children: string }) => {
	return (
		<div className='flex justify-center items-center'>
			<h2 className='text-[41px] max-md:text-[21px] font-semibold uppercase text-center text-gradient'>{children}</h2>
		</div>
	);
};
