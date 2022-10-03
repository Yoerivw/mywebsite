import Error from "next/error";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import propertyImg from "../../../public/assets/project-img/property.jpg";
import Image from "next/image";

function SinglePostPage() {
	const router = useRouter();

	const postId = router.query.postId as string;

	const { data, isLoading } = trpc.useQuery(["posts.single-post", { postId }]);

	if (isLoading) {
		return <p>Loading posts...</p>;
	}

	if (!data) {
		return <Error statusCode={404} />;
	}

	return (
		<div className='w-full'>
			<div className='w-screen h-[30vh] lg:h-[40vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={propertyImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>{data?.title}</h2>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
				<div className='col-span-4'>
					<p>Project</p>
					<h2>Overview</h2>
					<p>excerpt of overview of the project</p>
					<button className='px-8 py-2 mt-4 mr-8'>Code</button>
					<button className='px-8 py-2 mt-4'>Demo</button>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'></div>
			</div>
		</div>
	);
}

export default SinglePostPage;
