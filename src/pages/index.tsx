import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
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

			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
};

export default Home;
