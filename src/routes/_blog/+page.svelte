<script>
	import { BlogCard } from '$components';

	const { data } = $props();

	let posts = data.posts.edges;

	$effect(() => {
		console.log(data);
	});
</script>

<main class="relative overflow-hidden">
	<header class="relative overflow-hidden bg-darkBackground pt-32 pb-10 lg:pt-44 lg:pb-20">
		<img src="/digital_moon.svg" alt="" class="absolute top-0 left-[50%] w-full opacity-[0.05]" />
		<div class="container_xl relative px-5 2xl:px-0">
			<h1
				class="mb-6 text-center font-rubik text-4xl leading-[1.1] font-bold text-pretty text-white lg:text-6xl"
			>
				Big Moon Digital Blog
			</h1>
		</div>
	</header>
	<section class="pt-10 pb-10 lg:pt-20 lg:pb-20">
		<div class="container_xl px-5 2xl:px-0">
			<div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
				{#each posts as post}
					<BlogCard
						url="/blog/{post.node.slug}"
						title={post.node.title}
						date={post.node.date}
						image={post.node.featuredImage.node.mediaItemUrl}
						pill={post.node.categories.nodes[0].name}
					/>
				{/each}
			</div>
		</div>
	</section>
	<section class="relative bg-darkBackground pt-10 pb-10 lg:pt-20 lg:pb-20">
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
					href="https://calendly.com/aaron-bigmoondigital/30min"
					target="_blank"
					aria-label="Opens in a new tab"
					class="rounded-full border border-darkestBlue bg-darkestBlue px-8 py-3 font-karla text-base font-normal text-white uppercase transition-all duration-200 hover:border-darkBlue hover:bg-darkBlue"
					>Book a Free Call</a
				>
			</div>
			<p class="mt-10 text-center font-karla text-xl font-light text-white">Prefer email?</p>
			<div class="flex items-center justify-center">
				<a
					href="mailto:aaron@bigmoondigital.io"
					class="text-center font-karla text-xl font-light text-white underline"
					>aaron@bigmoondigital.io</a
				>
			</div>
		</div>
	</section>
</main>
