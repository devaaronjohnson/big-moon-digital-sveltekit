<script>
	import { ProjectPill } from '$components';

	import { onMount } from 'svelte';
	import Splide from '@splidejs/splide';
	import '@splidejs/splide/dist/css/splide.min.css';

	let splideRoot;
	let slides = $state(['First', 'Second', 'Third']); // runes reactivity

	const { data } = $props();

	let testimonials = data.testimonials;

	$effect(() => {
		console.log(data);
	});

	onMount(() => {
		const splide = new Splide(splideRoot, {
			padding: '2rem',
			type: 'loop',
			perPage: 1,
			perMove: 1
		});
		splide.mount();

		return () => splide.destroy();
	});

	// import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	// import '@splidejs/splide/css';
</script>

<main class="relative overflow-x-hidden">
	<header class="relative bg-darkBackground pt-32 pb-10 lg:pt-44 lg:pb-20">
		<img src="/digital_moon.svg" alt="" class="absolute top-0 left-[50%] w-full opacity-[0.05]" />
		<div class="container_lg relative px-5 2xl:px-0">
			<h1
				class="mb-6 text-center font-rubik text-4xl leading-[1.1] font-bold text-pretty text-white lg:text-6xl"
			>
				Where Stunning Design Meets Flawless Functionality
			</h1>
			<p class="mb-7 px-0 text-center font-karla text-2xl font-light text-white lg:px-32">
				We craft high-converting websites, apps, and brands for startups, agencies, and businesses
				that refuse to settle for good enough.
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
				<div class="h-[500px] w-full overflow-hidden rounded-4xl border-12 border-white/20">
					<img src="/woman_design.webp" alt="" class="h-full w-full object-cover" />
				</div>
			</div>
		</div>
	</header>
	<section class="relative py-10 lg:py-20">
		<div class="container_xl px-5 2xl:px-0">
			<div class="flex flex-col items-center gap-10 lg:flex-row lg:gap-32">
				<div class="w-full lg:w-1/2">
					<h2 class="mb-5 font-rubik text-4xl leading-[1.1] font-normal text-balance lg:text-5xl">
						Unforgettable, Websites, Brands
					</h2>
					<p class="mb-5 font-karla text-xl font-light">
						We're not your typical design agency. Founded in 2014, we're a collective of designers,
						developers, and strategists who believe great digital experiences should be beautiful,
						functional, and human-centered. From startups to global brands, we help ambitious
						businesses stand out.
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
					<div class="h-[350px] overflow-hidden rounded-2xl">
						<img src="/sample_preview.jpeg" alt="" class="h-full w-full object-cover" />
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
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
				<div class="rounded-2xl bg-white p-8 shadow-lg lg:p-12">
					<div class="mb-3">
						<img src="/figma.webp" alt="" class="h-12" />
					</div>
					<h3 class="mb-5 font-rubik text-3xl font-normal text-darkestBlue">Web Design</h3>
					<p class="mb-5 font-karla text-xl font-light">
						Interfaces that delight users & drive conversions. From wireframes to prototypes, we
						design with outcomes
					</p>
					<ul class="list-disc pl-5">
						<li class="font-karla text-xl font-light">User flows that boost engagement</li>
						<li class="font-karla text-xl font-light">Mobile-first, award worthy interfaces</li>
						<li class="font-karla text-xl font-light">Prototypes in 72 hours or less</li>
					</ul>
				</div>
				<div class="rounded-2xl bg-white p-8 shadow-lg lg:p-12">
					<div class="mb-3">
						<img src="/wordpress_full.webp" alt="" class="h-12" />
					</div>
					<h3 class="mb-5 font-rubik text-3xl font-normal text-darkestBlue">
						Wordpress Development
					</h3>
					<p class="mb-5 font-karla text-xl font-light">
						Interfaces that delight users & drive conversions. From wireframes to prototypes, we
						design with outcomes
					</p>
					<ul class="list-disc pl-5">
						<li class="font-karla text-xl font-light">User flows that boost engagement</li>
						<li class="font-karla text-xl font-light">Mobile-first, award worthy interfaces</li>
						<li class="font-karla text-xl font-light">Prototypes in 72 hours or less</li>
					</ul>
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
						Interfaces that delight users & drive conversions. From wireframes to prototypes, we
						design with outcomes
					</p>
					<ul class="list-disc pl-5">
						<li class="font-karla text-xl font-light">User flows that boost engagement</li>
						<li class="font-karla text-xl font-light">Mobile-first, award worthy interfaces</li>
						<li class="font-karla text-xl font-light">Prototypes in 72 hours or less</li>
					</ul>
				</div>
				<div class="rounded-2xl bg-white p-8 shadow-lg lg:p-12">
					<div class="gap-3=5 mb-3 flex flex-row items-center">
						<img src="/svelte_full.webp" alt="" class="mr-2 h-12" />
						<img src="/react.webp" alt="" class="h-12" />
					</div>
					<h3 class="mb-5 font-rubik text-3xl font-normal text-darkestBlue">
						Javascript Development
					</h3>
					<p class="mb-5 font-karla text-xl font-light">
						Interfaces that delight users & drive conversions. From wireframes to prototypes, we
						design with outcomes
					</p>
					<ul class="list-disc pl-5">
						<li class="font-karla text-xl font-light">User flows that boost engagement</li>
						<li class="font-karla text-xl font-light">Mobile-first, award worthy interfaces</li>
						<li class="font-karla text-xl font-light">Prototypes in 72 hours or less</li>
					</ul>
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
						<ProjectPill text="Wordpress Development" />
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
						<ProjectPill text="Javascript Development" />
					</div>
				</div>
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
						<ProjectPill text="Wordpress Development" />
						<ProjectPill text="Web Design" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="relative pt-10 pb-10 lg:pt-20 lg:pb-20">
		<div class="container_lg relative px-5 2xl:px-10">
			<h2 class="text-center font-rubik text-4xl font-normal text-black lg:mb-20 lg:text-5xl">
				What Clients Say
			</h2>

			<div class="relative">
				<!-- <Splide aria-label="My Favorite Images">
					<SplideSlide>
						<div class="overflow-hidden">
							<div class="px-10 pt-5 pb-5">
								<p class="text-center font-karla text-lg font-light text-pretty">
									“We struggled with user drop-offs for months. Web Rocket redesigned our dashboard
									with intuitive workflows, and our retention skyrocketed by 40% in 30 days. Their
									team actually listens to users—no ego, just data-driven design.”
								</p>
							</div>
							<div class="px-10">
								<p class="text-center font-rubik text-xl font-bold text-black">Sarah K.</p>
								<p class="text-center font-karla text-lg font-light text-black">CEO of SaaSFlow</p>
							</div>
						</div>
					</SplideSlide>
				</Splide> -->
				<div bind:this={splideRoot} class="splide">
					<div class="splide__track">
						<div class="splide__list">
							{#each testimonials as testimonial}
								<div class="splide__slide">
									<div class="overflow-hidden">
										<div class="px-10 pt-5 pb-5">
											<p class="text-center font-karla text-xl font-light text-pretty">
												{@html testimonial.node.content}
											</p>
										</div>
										<div class="px-10">
											<p class="text-center font-rubik text-xl font-bold text-black">
												{testimonial.node.title}
											</p>
											<p class="font-regular text-center font-karla text-lg text-black">
												{testimonial.node.testimonialsContent.title} | {testimonial.node
													.testimonialsContent.company}
											</p>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
				<!--
				<div class="overflow-hidden">
					<div class="px-10 pt-5 pb-5">
						<p class="text-center font-karla text-lg font-light text-pretty">
							“We struggled with user drop-offs for months. Web Rocket redesigned our dashboard with
							intuitive workflows, and our retention skyrocketed by 40% in 30 days. Their team
							actually listens to users—no ego, just data-driven design.”
						</p>
					</div>
					<div class="px-10">
						<p class="text-center font-rubik text-xl font-bold text-black">Sarah K.</p>
						<p class="text-center font-karla text-lg font-light text-black">CEO of SaaSFlow</p>
					</div>
				</div>
				-->
				<!-- <div class="overflow-hidden rounded-3xl border-2 border-[#f3f3f3] shadow-lg">
					<div class="px-10 pt-12 pb-12">
						<p class="font-karla text-lg font-light">
							“We struggled with user drop-offs for months. Web Rocket redesigned our dashboard with
							intuitive workflows, and our retention skyrocketed by 40% in 30 days. Their team
							actually listens to users—no ego, just data-driven design.”
						</p>
					</div>
					<div class="bg-[#f3f3f3] px-10 py-5">
						<p class="font-rubik text-xl font-bold text-black">Sarah K.</p>
						<p class="font-karla text-lg font-light text-black">CEO of SaaSFlow</p>
					</div>
				</div> -->
				<!-- <div class="overflow-hidden rounded-3xl border-2 border-[#f3f3f3] shadow-lg">
					<div class="px-10 pt-12 pb-12">
						<p class="font-karla text-lg font-light">
							“We struggled with user drop-offs for months. Web Rocket redesigned our dashboard with
							intuitive workflows, and our retention skyrocketed by 40% in 30 days. Their team
							actually listens to users—no ego, just data-driven design.”
						</p>
					</div>
					<div class="bg-[#f3f3f3] px-10 py-5">
						<p class="font-rubik text-xl font-bold text-black">Sarah K.</p>
						<p class="font-karla text-lg font-light text-black">CEO of SaaSFlow</p>
					</div>
				</div> -->
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
