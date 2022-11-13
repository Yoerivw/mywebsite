import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import brpImage from "../../public/assets/project-img/brp-image.png";
import jadeImage from "../../public/assets/project-img/jadetavern-image.png";
import cwaImage from "../../public/assets/project-img/cwa-screenshot.png";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Projects = () => {
	const [activeProject, setActiveProject] = useState("brp");
	const [projectText, setProjectText] = useState({
		title: "Bergman Ross & partners",
		text: "Bergman Ross and Partners is a large radiological company.  Their main goal was to create an online booking functionality on their website.  The project included the development the of their entire website, including the booking functionality, as well as the maintenance thereof.",
		link: "www.bergmanross.co.za",
		image: brpImage,
	});
	const onJadeClick = async (event) => {
		setActiveProject("jade");

		await delay(150);

		setProjectText({
			title: "Jade Tavern",
			text: "This is Jade text This is Jade text This is Jade text This is Jade text This is Jade text This is Jade text This is Jade text This is Jade text This is Jade text This is Jade text This is Jade text",
			link: "www.jadetavern.co.za",
			image: jadeImage,
		});
	};

	const onBrpClick = async (event) => {
		setActiveProject("brp");
		await delay(150);

		setProjectText({
			title: "Bergman Ross & partners",
			text: "Bergman Ross and Partners is a large radiological company.  Their main goal was to create an online booking functionality on their website.  The project included the development the of their entire website, including the booking functionality, as well as the maintenance thereof.",
			link: "www.bergmanross.co.za",
			image: brpImage,
		});
	};
	const onCwaClick = async (event) => {
		setActiveProject("cwa");
		await delay(150);

		setProjectText({
			title: "CW Attorneys",
			text: "This is cwa text This is cwa text This is cwa text This is cwa text This is cwa text This is cwa text This is cwa text This is cwa text This is cwa text This is cwa text This is cwa text This is cwa text",
			link: "https://www.chriswentzelattorneys.co.za/",
			image: cwaImage,
		});
	};

	return (
		<div
			id='projects'
			className='w-full md:h-screen snap-start flex items-center text-gray-700'>
			<div className='max-w-[1240px] w-screen mx-auto px-2 py-14'>
				<h2 className='mb-10'>Websites I've built</h2>

				<div className='flex flex-column justify-between'>
					<div>
						<ul className='text-lg leading-loose min-w-[160px]'>
							<li
								id='brp'
								onClick={onBrpClick}
								className={`${
									activeProject == "brp"
										? "underline rounded p-2 text-indigo-500 transition ease-in-out delay-450"
										: "p-"
								}`}>
								BRP Radiologists
							</li>
							<li
								id='jade'
								onClick={onJadeClick}
								className={`${
									activeProject == "jade"
										? "underline p-2 text-indigo-500 rounded-md transition ease-in-out delay-250"
										: "p-2"
								}`}>
								Jade Tavern
							</li>
							<li
								id='cwa'
								onClick={onCwaClick}
								className={`${
									activeProject == "cwa"
										? "underline text-indigo-500 rounded-xl p-2 transition ease-in-out delay-50"
										: "p-2"
								}`}>
								CW Attorneys
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-2xl mb-5 b-5 transition-transform'>
							{projectText.title}
						</h3>
						<p className='transition-opacity max-w-[550px] pb-8 '>
							{projectText.text}
						</p>
						<p>Tools Used:</p>
						<div>
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
							<a
								href={`"${projectText.link}"`}
								className='underline text-blue-600 font-bold text-xl transition-all'>
								View Site
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
