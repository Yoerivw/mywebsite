import Image from "next/image";
import React from "react";

const Skills = () => {
	return (
		<div id='skills' className='w-full h-screen p-2 snap-start'>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5'>
					Skills
				</p>
				<h2 className='py-4 text-sm md:text-xl'>What I can do</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-8'>
					<div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={"/../public/assets/skill-icons/html.png"}
									width={64}
									height={64}
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={"/../public/assets/skill-icons/css.png"}
									width={64}
									height={64}
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={"/../public/assets/skill-icons/javascript.png"}
									width={64}
									height={64}
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={"/../public/assets/skill-icons/react.png"}
									width={64}
									height={64}
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>React</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={"/../public/assets/skill-icons/tailwind.png"}
									width={64}
									height={64}
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={"/../public/assets/skill-icons/github.png"}
									width={64}
									height={64}
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Github</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={"/../public/assets/skill-icons/php.png"}
									width={64}
									height={64}
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>PHP</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={"/../public/assets/skill-icons/wordpress.png"}
									width={64}
									height={64}
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>WordPress</h3>
							</div>
						</div>
					</div>
				</div>
				<h2 className='py-6'>What I'm tinkering with</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-8'>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={"/../public/assets/skill-icons/nextjs.png"}
									width={64}
									height={64}
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>NextJs</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={"/../public/assets/skill-icons/prisma.png"}
									width={64}
									height={64}
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Prisma</h3>
							</div>
						</div>
					</div>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src={"/../public/assets/skill-icons/sql-server.png"}
									width={64}
									height={64}
									alt='/'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>SQL</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
