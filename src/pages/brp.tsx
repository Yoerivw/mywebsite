import Image from "next/image";
import React from "react";
import brpImage from "../../public/assets/project-img/brp-image.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
	return (
		<div className='w-full'>
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
			<div className='max-w-[1240px] mx-auto px-6 grid md:grid-cols-5 gap-8 pt-8'>
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
							3. Easy Access to necessary forms for Clients and Referring
							doctors
						</li>
						<li className='cursor-text'>4. Advertise Careers available</li>
						<li className='cursor-text'>
							5. Look at Google Analytics to make meaningful changes to the
							website
						</li>
						<li className='cursor-text'>6. Email Marketing with MailChimp</li>
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
				<Link href='/#projects'>
					<p className='underline cursor-pointer'>Back</p>
				</Link>
			</div>
		</div>
	);
};

export default property;
