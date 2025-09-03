<script>
	import { BlogPill } from '$components';

	const { data } = $props();
</script>

<main class="relative overflow-hidden">
	<header class="relative bg-darkBackground pt-32 pb-10 lg:pt-44 lg:pb-20">
		<img src="/digital_moon.svg" alt="" class="absolute top-0 left-[50%] w-full opacity-[0.05]" />
		<div class="container_xl relative px-5 2xl:px-0">
			<h1
				class="mb-6 text-center font-rubik text-4xl leading-[1.1] font-bold text-pretty text-white lg:text-6xl"
			>
				Design & Development Blog
			</h1>
		</div>
	</header>
	<section class="pt-10 pb-10 lg:pt-20 lg:pb-20">
		<div class="container_xl px-5 2xl:px-0">
			<div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
				<div class="card_container overflow-hidden rounded-2xl border border-[#ddd] shadow-lg">
					<div class="image_container h-[300px] overflow-hidden">
						<img
							src="/sample.jpg"
							alt=""
							class="h-full w-full object-cover transition-all duration-500"
						/>
					</div>
					<div class="px-5 py-5">
						<div class="mb-3 flex flex-row flex-wrap items-center gap-3">
							<BlogPill text="Web Design" />
						</div>

						<p class="mb-2 font-rubik text-2xl font-normal">This is the title of the blog post</p>
						<p class="font-karla text-base font-light">August 31, 2025</p>
					</div>
				</div>
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

<style>
	.card_container:hover img {
		@apply scale-105;
	}
</style>
