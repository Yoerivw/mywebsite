import type { NextPage } from "next";

import About from "../components/About";
import Contact from "../components/Contact";

import Main from "../components/Main";

import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
	return (
		<div className='p-4 overflow-y-scroll h-screen scroll-smooth snap-y snap-mandatory'>
			<Main />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
};

export default Home;
