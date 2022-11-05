import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../../public/assets/project-img/property.jpg";
import cryptoImg from "../../public/assets/project-img/crypto.jpg";
import netflixImg from "../../public/assets/project-img/netflix.jpg";
import twitchImg from "../../public/assets/project-img/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id='projects' className='md:h-screen snap-start'>
			<div className='max-w-[1240px] mx-auto px-2 py-16'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>
					Projects
				</p>
				<h2 className='py-4'>What I've Built</h2>
				<div className='grid md:grid-cols-2 gap-x-20 gap-y-3'>
					<ProjectItem
						title='Property Finder'
						backgroundImg={propertyImg}
						projectUrl='/property'
					/>
					<ProjectItem
						title='Crypto App'
						backgroundImg={cryptoImg}
						projectUrl='/property'
					/>
					<ProjectItem
						title='netflix App'
						backgroundImg={netflixImg}
						projectUrl='/property'
					/>
					<ProjectItem
						title='twitch App'
						backgroundImg={twitchImg}
						projectUrl='/property'
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
