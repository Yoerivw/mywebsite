import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CreatePostInput } from "../../schema/post.schema";
import { trpc } from "../../utils/trpc";

function CreatePostPage() {
	const { handleSubmit, register } = useForm<CreatePostInput>();
	const router = useRouter();

	const { mutate, error } = trpc.useMutation(["posts.create-post"], {
		onSuccess: ({ id }) => {
			router.push(`/posts/${id}`);
		},
	});

	function onSubmit(values: CreatePostInput) {
		mutate(values);
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{error && error.message}
			<h1>Create Post</h1>
			<br />

			<input type='text' placeholder='your post title' {...register("title")} />
			<br />
			<textarea placeholder='your text' {...register("body")} />
			<br />
			<button>Create Posts</button>
		</form>
	);
}

export default CreatePostPage;
