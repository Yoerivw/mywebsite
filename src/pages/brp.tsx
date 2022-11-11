import Image from "next/image";
import React from "react";
import brpImage from "../../public/assets/project-img/brp-image.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
	return (
		<div className='w-full overflow-x-hidden'>
			<div className='w-screen h-[30vh] lg:h-[40vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={brpImage}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-6'>
					<h2 className='py-2'>Bergman, Ross & Partners</h2>
					<h3>WordPress, Bootstrap, Javascript</h3>
					<p>
						URL:
						<a
							href='https://bergmanross.co.za/'
							className='underline text-blue-500 pl-2'>
							bergmanross.co.za
						</a>
					</p>
				</div>
			</div>
			<div className='max-w-[1240px] mx-auto px-6 grid md:grid-cols-5 gap-8 py-8'>
				<div className='col-span-4'>
					<h2 className='pb-3'>Objectives</h2>
					<ul className='pl-2'>
						<li className='cursor-text'>
							1. Way for prospective clients to make appointments online
						</li>
						<li className='cursor-text'>
							2. Easy navigation to find contact details and location
						</li>
						<li className='cursor-text'>
							3. Easy access to necessary forms for clients and referring
							doctors
						</li>
						<li className='cursor-text'>4. Advertise Careers available</li>
						<li className='cursor-text'>
							5. Use analytics to make meaningful changes to the website
						</li>
						<li className='cursor-text'>
							6. Simplify routine notifications with email marketing
						</li>
					</ul>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
					<div className='p-2'>
						<p className='text-center front-bold pb-2'>Technologies used</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> HTML
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> CSS(Bootstrap)
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Javascript
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> PHP
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> WordPress
							</p>
						</div>
					</div>
				</div>
				<div className='col-span-4 md:col-span-3'>
					<h2 className='pb-3'>Outcomes</h2>
					<ul className='pl-2'>
						<li className='cursor-text'>
							1. Online booking form which reduced time to appointment by
							aggregating all information upfront.
						</li>
						<li className='cursor-text'>
							2. 1-click away from necessary information to help with locating
							or calling a branch
						</li>
						<li className='cursor-text'>
							3. All necessary documents easily downloadable as pdf's from main
							menu
						</li>
						<li className='cursor-text'>
							4. Notice board above the fold to advertise job openings and
							events
						</li>
						<li className='cursor-text'>
							5. Used data from analytics in the redesign to move away
							unnecessary information from primary intent of user.
							<li className='pl-2 cursor-text'>
								5.1 Increased Monthly visitors by 1000% over the course of
								contract
							</li>
						</li>
						<li className='cursor-text'>
							6. Simplify routine notifications with email marketing
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default property;
