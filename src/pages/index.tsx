import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import LoginForm from "../components/LoginForm";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useUserContext } from "../context/user.context";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
	/* const user = useUserContext();

	if (!user) {
		return <LoginForm />;
	} */

	return (
		<div>
			{/* <Link href='/posts/new'>Create Post</Link> */}
			<Navbar />
			<Main />
			<About />
			<Skills />
			<Projects />
		</div>
	);
};

export default Home;

type TechnologyCardProps = {
	name: string;
	description: string;
	documentation: string;
};

const TechnologyCard = ({
	name,
	description,
	documentation,
}: TechnologyCardProps) => {
	return (
		<section className='flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105'>
			<h2 className='text-lg text-gray-700'>{name}</h2>
			<p className='text-sm text-gray-600'>{description}</p>
			<a
				className='mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2'
				href={documentation}
				target='_blank'
				rel='noreferrer'>
				Documentation
			</a>
		</section>
	);
};
