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
		<div id='projects' className='w-full md:h-screen snap-start'>
			<div className='max-w-[1240px] mx-auto px-2 py-14'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>
					Projects
				</p>
				<h2 className='py-4'>What I've Built</h2>
				<div className='grid sm:grid-cols-2 lg:grid-cols-[repeat(2,_minmax(0,_486px))] gap-8 '>
					{/*     grid-template-columns: repeat(2, minmax(0, 233px)); progress
					 */}
					<ProjectItem
						title='Bergman, Ross & Partners'
						backgroundImg={propertyImg}
						technologyStack='WordPress, HTML, CSS, JavaScript'
						projectUrl='/brp'
					/>
					<ProjectItem
						title='Jade Tavern'
						backgroundImg={cryptoImg}
						technologyStack='WordPress, HTML, CSS, JavaScript'
						projectUrl='/jadetavern'
					/>
					<ProjectItem
						title='CW Attorneys'
						backgroundImg={netflixImg}
						technologyStack='HTML, CSS, JavaScript'
						projectUrl='/cwa'
					/>
					<ProjectItem
						title='twitch App'
						backgroundImg={twitchImg}
						technologyStack='HTML, CSS, JavaScript'
						projectUrl='/property'
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
