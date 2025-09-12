<script>
	import { ProjectPill } from '$components';

	// import { onMount } from 'svelte';
	// import Splide from '@splidejs/splide';
	// import '@splidejs/splide/dist/css/splide.min.css';

	// let splideRoot;
	// let slides = $state(['First', 'Second', 'Third']); // runes reactivity

	// const { data } = $props();

	// let testimonials = data.testimonials;

	// $effect(() => {
	// 	console.log(data);
	// });

	// onMount(() => {
	// 	const splide = new Splide(splideRoot, {
	// 		padding: '2rem',
	// 		type: 'loop',
	// 		perPage: 1,
	// 		perMove: 1,
	// 		breakpoints: {
	// 			640: {
	// 				padding: '1rem'
	// 			}
	// 		}
	// 	});
	// 	splide.mount();

	// 	return () => splide.destroy();
	// });

	// import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	// import '@splidejs/splide/css';
</script>

<main class="relative overflow-x-hidden">
	<header class="relative bg-darkBackground pt-32 pb-10 lg:pt-44 lg:pb-20">
		<img
			src="/digital_moon.svg"
			alt=""
			class="absolute top-0 left-0 w-full opacity-[0.05] lg:left-[50%]"
		/>
		<div class="container_lg relative px-5 2xl:px-0">
			<h1
				class="mb-6 text-center font-rubik text-4xl leading-[1.1] font-bold text-pretty text-white lg:text-6xl"
			>
				Where Creativity and Functionality Work in Harmony
			</h1>
			<p class="mb-7 px-0 text-center font-karla text-2xl font-light text-white lg:px-32">
				We believe design should do more than just look good—it should work effortlessly. That's why
				we combine creativity with functionality to create websites that truly deliver.
			</p>
			<div class="flex items-center justify-center">
				<a
					href="https://calendly.com/aaron-bigmoondigital/30min"
					target="_blank"
					aria-label="Opens in a new tab"
					class="rounded-full border border-darkestBlue bg-darkestBlue px-8 py-3 font-karla text-base font-normal text-white uppercase transition-all duration-200 hover:border-darkBlue hover:bg-darkBlue"
					>Book a Meeting</a
				>
			</div>

			<div class="mt-8 flex flex-row items-center justify-center lg:mt-16">
				<div
					class="h-[350px] w-full overflow-hidden rounded-4xl border-12 border-white/20 lg:h-[500px]"
				>
					<!-- <img src="/woman_design.webp" alt="" class="h-full w-full object-cover" /> -->
					<img src="/web_design_hero.webp" alt="" class="h-full w-full object-cover object-top" />
				</div>
			</div>
		</div>
	</header>
	<section class="relative py-10 lg:py-20">
		<div class="container_xl px-5 2xl:px-0">
			<div class="flex flex-col items-center gap-10 lg:flex-row lg:gap-32">
				<div class="w-full lg:w-1/2">
					<h2 class="mb-5 font-rubik text-4xl leading-[1.1] font-normal text-balance lg:text-5xl">
						All Digital Phases Coming Together to Meet Your Needs
					</h2>
					<p class="mb-6 font-karla text-xl font-light">
						We believe that designers, developers, and digital marketers should work seamlessly,
						collaborating to bring the best of all parts to the completed product. Great digital
						products should be beautiful, user-friendly, and capable of bringing results.
					</p>
					<div class="flex items-center justify-start">
						<a
							href="/"
							class="rounded-full border border-darkestBlue bg-darkestBlue px-8 py-3 font-karla text-base font-normal text-white uppercase transition-all duration-200 hover:border-darkBlue hover:bg-darkBlue"
							>Know More About Us</a
						>
					</div>
				</div>
				<div class="w-full lg:flex-1">
					<div class="h-[250px] overflow-hidden rounded-2xl lg:h-[375px]">
						<img src="/all_home.webp" alt="" class="h-full w-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="relative bg-[#f3f3f3] py-10 lg:py-20">
		<img src="/digital_moon.svg" alt="" class="absolute top-0 left-[50%] w-full opacity-40" />
		<div class="container_xl relative px-5 2xl:px-0">
			<h2 class="mb-10 text-center font-rubik text-4xl font-normal lg:mb-20 lg:text-5xl">
				Services Offered
			</h2>
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
				<div class="rounded-2xl bg-white p-8 shadow-lg lg:p-12">
					<div class="mb-3">
						<img src="/figma.webp" alt="" class="h-12" />
					</div>
					<h3 class="mb-5 font-rubik text-3xl font-normal text-darkestBlue">Web Design</h3>
					<p class="mb-5 font-karla text-xl font-light">
						We design websites with mobile in mind. In most cases, a user will most likely visit
						your website on their phone, so making sure your website is mobile optimized is of high
						priority.
					</p>
					<div class="flex items-center justify-start">
						<a
							href="/"
							class="font-karla text-lg font-normal text-darkestBlue uppercase underline transition-all duration-200"
							>Learn More</a
						>
					</div>
				</div>
				<div class="rounded-2xl bg-white p-8 shadow-lg lg:p-12">
					<div class="mb-3">
						<img src="/wordpress_full.webp" alt="" class="h-12" />
					</div>
					<h3 class="mb-5 font-rubik text-3xl font-normal text-darkestBlue">Wordpress</h3>
					<p class="mb-5 font-karla text-xl font-light">
						We believe Wordpress is the most easy to use CMS for users that need to focus on their
						business and not their website, and the numbers support this since 44% of all websites
						are built with Wordpress.
					</p>
					<div class="flex items-center justify-start">
						<a
							href="/"
							class="font-karla text-lg font-normal text-darkestBlue uppercase underline transition-all duration-200"
							>Learn More</a
						>
					</div>
				</div>
				<div class="rounded-2xl bg-white p-8 shadow-lg lg:p-12">
					<div class="gap-3=5 mb-3 flex flex-row items-center">
						<img src="/wordpress_full.webp" alt="" class="h-12" />
						<span class="px-3 text-3xl">+</span>
						<img src="/svelte_full.webp" alt="" class="mr-2 h-12" />
						<img src="/react.webp" alt="" class="h-12" />
					</div>
					<h3 class="mb-5 font-rubik text-3xl font-normal text-darkestBlue">Headless Wordpress</h3>
					<p class="mb-5 font-karla text-xl font-light">
						Not only is Wordpress a great CMS, but it is easy to connect with a separate javascript
						front-end when situation calls for a more performant and customizable website. Users can
						still update their site as usual, but without the worry of breaking the site.
					</p>
					<div class="flex items-center justify-start">
						<a
							href="/"
							class="font-karla text-lg font-normal text-darkestBlue uppercase underline transition-all duration-200"
							>Learn More</a
						>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="relative bg-darkBackground py-10 lg:py-20">
		<div class="container_xl px-5 2xl:px-0">
			<h2 class="mb-10 text-center font-rubik text-4xl font-normal text-white lg:mb-20 lg:text-5xl">
				Our Work
			</h2>
			<div class="grid grid-cols-1 gap-20 lg:grid-cols-2">
				<div class="relative">
					<div class="relative mb-5 h-[300px] lg:h-[550px]">
						<img
							src="/carma.jpg"
							alt="Carma"
							class="h-full w-full rounded-2xl object-cover object-top"
						/>
						<a
							href="."
							class="absolute right-5 bottom-5 rounded-full border border-black bg-black px-5 py-2 font-karla text-base font-light text-white"
						>
							View Website
						</a>
					</div>

					<h3 class="relative mb-5 font-rubik text-3xl font-normal text-white lg:text-4xl">
						Carma
					</h3>
					<div class="relative flex flex-row flex-wrap items-center gap-3">
						<ProjectPill text="Wordpress" />
						<ProjectPill text="Web Design" />
					</div>
				</div>
				<div class="relative">
					<div class="relative mb-5 h-[300px] lg:h-[550px]">
						<img
							src="/smiley.jpg"
							alt="Smiley Aesthetics"
							class="h-full w-full rounded-2xl object-cover object-top"
						/>
						<a
							href="."
							class="absolute right-5 bottom-5 rounded-full border border-black bg-black px-5 py-2 font-karla text-base font-light text-white"
						>
							View Website
						</a>
					</div>

					<h3 class="relative mb-5 font-rubik text-3xl font-normal text-white lg:text-4xl">
						Smiley Aesthetics
					</h3>
					<div class="relative flex flex-row flex-wrap items-center gap-3">
						<ProjectPill text="Wordpress" />
						<ProjectPill text="Web Design" />
					</div>
				</div>
				<div class="relative">
					<div class="relative mb-5 h-[300px] lg:h-[550px]">
						<img
							src="/connie_chadwick.jpg"
							alt="Connie Chadwick Law"
							class="relative h-full w-full rounded-2xl object-cover object-top"
						/>
						<a
							href="."
							class="absolute right-5 bottom-5 rounded-full border border-black bg-black px-5 py-2 font-karla text-base font-light text-white"
						>
							View Website
						</a>
					</div>

					<h3 class="mb-5 font-rubik text-3xl font-normal text-white lg:text-4xl">
						Connie Chadwick Law
					</h3>
					<div class="flex flex-row flex-wrap items-center gap-3">
						<ProjectPill text="Web Design" />
						<ProjectPill text="Headless Wordpress" />
						<ProjectPill text="Javascript" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="relative pt-10 pb-10 lg:pt-20 lg:pb-20">
		<div class="container_xl relative px-5 2xl:px-0">
			<h2 class="mb-10 text-center font-rubik text-4xl font-normal text-black lg:mb-16 lg:text-5xl">
				What Clients Say
			</h2>

			<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
				<div class="rounded-xl border border-gray-200 bg-white p-5 shadow-lg lg:p-8">
					<div class="relative">
						<p class="review_text relative mb-3 font-karla text-lg font-light text-black">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eligendi. Ad
							exercitationem fugit natus laboriosam. Fugit eaque ad praesentium, placeat voluptatum,
							accusamus adipisci consequuntur hic rem laboriosam, saepe impedit officiis.
						</p>
						<button class="see_more_btn font-karla text-lg font-light text-lightBlue">
							...see more
						</button>
					</div>

					<p class="relative font-rubik text-base font-bold text-black lg:text-xl">Aaron Johnson</p>
					<p class="relative font-karla text-base font-normal text-lightBlue lg:text-lg">
						CEO | Big Moon Digital Solutions
					</p>
				</div>
				<div class="rounded-xl border border-gray-200 bg-white p-5 shadow-lg lg:p-8">
					<div class="relative">
						<p class="review_text relative mb-3 font-karla text-lg font-light text-black">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eligendi. Ad
							exercitationem fugit natus laboriosam. Fugit eaque ad praesentium, placeat voluptatum,
							accusamus adipisci consequuntur hic rem laboriosam, saepe impedit officiis.
						</p>
						<button class="see_more_btn font-karla text-lg font-light text-lightBlue">
							...see more
						</button>
					</div>

					<p class="relative font-rubik text-base font-bold text-black lg:text-xl">Aaron Johnson</p>
					<p class="relative font-karla text-base font-normal text-lightBlue lg:text-lg">
						CEO | Big Moon Digital Solutions
					</p>
				</div>
				<div class="rounded-xl border border-gray-200 bg-white p-5 shadow-lg lg:p-8">
					<div class="relative">
						<p class="review_text relative mb-3 font-karla text-lg font-light text-black">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eligendi. Ad
							exercitationem fugit natus laboriosam. Fugit eaque ad praesentium, placeat voluptatum,
							accusamus adipisci consequuntur hic rem laboriosam, saepe impedit officiis.
						</p>
						<button class="see_more_btn font-karla text-lg font-light text-lightBlue">
							...see more
						</button>
					</div>

					<p class="relative font-rubik text-base font-bold text-black lg:text-xl">Aaron Johnson</p>
					<p class="relative font-karla text-base font-normal text-lightBlue lg:text-lg">
						CEO | Big Moon Digital Solutions
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="relative overflow-hidden bg-darkBackground pt-10 pb-10 lg:pt-20 lg:pb-20">
		<img src="/digital_moon.svg" alt="" class="absolute top-0 left-0 w-[90%] opacity-[0.05]" />
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

<style>
	.review_text {
		line-clamp: 3;
		display: box;
		box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.see_more_btn {
		display: flex;
		justify-content: flex-end;
		width: 230px;
		position: absolute;
		right: 0;
		bottom: 0;
		inset-inline-end: 0;
		inset-block-end: 0;
		background: linear-gradient(to right, transparent, #fff 60%);
		/* background: #eee; */
	}
</style>
