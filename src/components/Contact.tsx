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
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>
					Contact
				</p>
				<h2 className='py-4'>Get In Touch</h2>
				<div className=''>
					<div className='lg:p-4 h-full'>
						<div>
							<p className='uppercase pt-8'>Connect With Me</p>
							<div className='flex items-center justify-between max-w-[390px] m-auto py-4'>
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
				<p className='text-center'>Made with love</p>
			</div>
		</div>
	);
};

export default Contact;
