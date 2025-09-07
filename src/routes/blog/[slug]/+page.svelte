<script>
	import { format } from 'date-fns';

	let { data } = $props();

	let post = data.body.post;

	$effect(() => {
		console.log(post);
	});
</script>

<main>
	<header class="relative bg-darkBackground pt-32 pb-10 lg:pt-44 lg:pb-20">
		<div class="container_md px-5 2xl:px-0">
			<h1 class="mb-2 font-rubik text-4xl font-bold text-white lg:text-6xl">{post.title}</h1>
			<p class="font-karla text-xl font-light text-white lg:text-2xl">
				{format(post.date, 'MMMM d, yyyy')}
			</p>
		</div>
	</header>
	<section class="pt-10 pb-10 lg:pt-20 lg:pb-20">
		<div class="container_md px-5 2xl:px-0">
			<img src={post.featuredImage.node.mediaItemUrl} alt={post.title} class="w-full" />
			<div class="blog_content mt-5 lg:mt-10">
				{@html post.content}
			</div>
		</div>
	</section>
	<section class="relative overflow-hidden bg-darkBackground pt-10 pb-10 lg:pt-20 lg:pb-20">
		<img src="/digital_moon.svg" alt="" class="absolute top-0 left-0 w-[90%] opacity-[0.03]" />
		<div class="container_lg relative px-5 2xl:px-0">
			<h2 class="mb-7 text-center font-rubik text-4xl font-normal text-white lg:text-5xl">
				Let's talk about your next project.
			</h2>
			<p
				class="mb-5 px-0 text-center font-karla text-xl font-light text-balance text-white lg:px-40"
			>
				Get a free 30 minute consultation to discuss your project to see if we can build something
				great!
			</p>
			<div class="flex items-center justify-center">
				<a
					href="https://calendly.com/aaronjohnsondev/30min"
					target="_blank"
					aria-label="Opens in a new tab"
					class="rounded-full border border-darkestBlue bg-darkestBlue px-8 py-3 font-karla text-base font-normal text-white uppercase transition-all duration-200 hover:border-darkBlue hover:bg-darkBlue"
					>Book a Free Call</a
				>
			</div>
			<p class="mt-10 text-center font-karla text-xl font-light text-white">Prefer email?</p>
			<div class="flex items-center justify-center">
				<a
					href="mailto:hello@bigmoondigital.io"
					class="text-center font-karla text-xl font-light text-white underline"
					>hello@bigmoondigital.io</a
				>
			</div>
		</div>
	</section>
</main>
