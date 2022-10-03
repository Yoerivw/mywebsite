import Image from "next/image";
import Link from "next/link";
import { trpc } from "../../utils/trpc";
import propertyImg from "../../../public/assets/project-img/property.jpg";

function PostListingPage() {
	const { data, isLoading } = trpc.useQuery(["posts.posts"]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div className='w-full'>
			<div className='pt-20'>
				{data?.map((post) => (
					<article key={post.id}>
						<p>{post.title}</p>
						<Link href={`/posts/${post.id}`}>Read Post</Link>
					</article>
				))}
			</div>
		</div>
	);
}

export default PostListingPage;
