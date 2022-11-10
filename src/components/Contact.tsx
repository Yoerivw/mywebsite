import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
	return (
		<div
			id='contact'
			className='w-full h-screen lg:h-screen snap-start flex items-center'>
			<div className='max-w-[1240px] m-auto px-2 pt-16 w-full'>
				<div>
					<h2 className='py-4'>Get In Touch</h2>
				</div>
				<div className=''>
					<div className='lg:py-8 h-full'>
						<div>
							<div className='flex items-center justify-between max-w-[390px] pr-4'>
								<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
									<FaLinkedinIn size={35} />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
									<FaGithub size={35} />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
									<AiOutlineMail size={35} />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
									<BsFillPersonLinesFill size={35} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<p>Made with Next.js from Durbanville, South Africa</p>
			</div>
		</div>
	);
};

export default Contact;
