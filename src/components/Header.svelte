<script>
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import { clickOutside } from '$utils/clickOutside';

	let y = $state(0);
	let showMobileMenu = $state(false);
	let showServices = $state(false);
</script>

<svelte:window bind:scrollY={y} />

<nav
	class="fixed top-0 left-0 z-[99999] w-full px-2 py-5 transition-all duration-300 lg:px-5 2xl:px-0 {y <
	30
		? 'bg-transparent'
		: 'bg-darkBackground'}"
>
	<div class="container_2xl px-5 2xl:px-0">
		<div class="flex w-full flex-row items-center justify-between">
			<div class="w-auto">
				<a href="/">
					<img src="/bmd_logo_white.svg" alt="BMD Logo" class="h-12 w-auto lg:h-16" />
				</a>
			</div>
			<div class="flex flex-1 justify-end">
				<div class="hidden flex-row items-center justify-end lg:flex">
					<ul class="flex flex-row items-center gap-16">
						<li class="font-karla text-lg font-light text-white">
							<a href="/about">About</a>
						</li>
						<li
							use:clickOutside
							onclick_outside={() => (showServices = false)}
							class="relative font-karla text-lg font-light text-white"
						>
							<a
								onclick={(e) => {
									e.preventDefault();
									showServices = !showServices;
								}}
								href="."
								class="flex items-center gap-2"
								>Services <img src="/caret_down.svg" alt="" class="h-1.5" /></a
							>
							{#if showServices}
								<div
									in:fade={{ duration: 150 }}
									out:fade={{ duration: 100 }}
									class="absolute top-7 left-0 w-max rounded bg-white px-4 py-3 shadow-lg"
								>
									<ul>
										<li class="font-karla text-lg leading-relaxed font-light text-black">
											<a
												onclick={() => {
													showServices = false;
												}}
												href="/web-design"
												class="relative"
											>
												Web Design
											</a>
										</li>
										<li class="font-karla text-lg leading-relaxed font-light text-black">
											<a
												onclick={() => {
													showServices = false;
												}}
												href="/wordpress-development"
												class="relative"
											>
												Wordpress Development
											</a>
										</li>
										<li class="font-karla text-lg leading-relaxed font-light text-black">
											<a
												onclick={() => {
													showServices = false;
												}}
												href="/headless-wordpress"
												class="relative"
											>
												Headless Wordpress
											</a>
										</li>
										<li class="font-karla text-lg leading-relaxed font-light text-black">
											<a
												onclick={() => {
													showServices = false;
												}}
												href="/javascript-development"
												class="relative"
											>
												Javascript Development
											</a>
										</li>
									</ul>
								</div>
							{/if}
						</li>
						<!-- <li class="font-karla font-light text-white">Portfolio</li> -->
						<!-- <li class="font-karla font-light text-white">Blog</li> -->
						<li class="font-karla text-lg font-light text-white">
							<a
								onclick={() => {
									showServices = false;
								}}
								href="/blog"
								class="relative"
							>
								Blog
							</a>
						</li>
						<li class="font-karla text-lg font-light text-white">
							<a
								onclick={() => {
									showServices = false;
								}}
								href="/contact"
								class="relative"
							>
								Contact
							</a>
						</li>
					</ul>
					<a
						href="https://calendly.com/aaron-bigmoondigital/30min"
						target="_blank"
						aria-label="Opens in a new tab"
						class="ml-16 hidden rounded-full border border-darkestBlue bg-darkestBlue px-7 py-3 font-karla text-white uppercase transition-all duration-200 hover:border-darkBlue hover:bg-darkBlue lg:block"
					>
						Schedule a Call
					</a>
				</div>
				<div class="block lg:hidden">
					<a
						href="."
						class=""
						onclick={(e) => {
							e.preventDefault();
							showMobileMenu = true;
						}}
					>
						<img src="/menu.svg" alt="Menu" class="h-7" />
					</a>
				</div>
			</div>
		</div>
	</div>
</nav>

{#if showMobileMenu}
	<div
		in:fly={{ duration: 500, x: 700, ease: quintOut, opacity: 1 }}
		out:fade={{ duration: 100 }}
		class="fixed top-0 left-0 z-[999999999999999999] flex h-full w-full flex-col items-center justify-center bg-darkBackground"
	>
		<a
			href="."
			class="absolute top-4 right-4"
			onclick={(e) => {
				e.preventDefault();
				showMobileMenu = false;
			}}
		>
			<img src="/close.svg" alt="" class="h-10 w-auto" />
		</a>
		<p class="relative text-white">
			<a
				onclick={() => {
					showMobileMenu = false;
				}}
				href="/"
				class="font-bi text-center text-4xl font-normal">Home</a
			>
		</p>
		<p class="relative text-white">
			<a
				onclick={() => {
					showMobileMenu = false;
				}}
				href="/about"
				class="font-bi text-center text-4xl font-normal">About</a
			>
		</p>
		<p class="relative text-white">
			<a
				onclick={() => {
					showMobileMenu = false;
				}}
				href="/web-design"
				class="font-bi text-center text-4xl font-normal">Web Design</a
			>
		</p>
		<p class="relative text-white">
			<a
				onclick={() => {
					showMobileMenu = false;
				}}
				href="/wordpress-development"
				class="font-bi text-center text-4xl font-normal">Wordpress Development</a
			>
		</p>
		<p class="relative text-white">
			<a
				onclick={() => {
					showMobileMenu = false;
				}}
				href="/headless-wordpress"
				class="font-bi text-center text-4xl font-normal">Headless Wordpress</a
			>
		</p>
		<p class="relative text-white">
			<a
				onclick={() => {
					showMobileMenu = false;
				}}
				href="/javascript-development"
				class="font-bi text-center text-4xl font-normal">Javascript Development</a
			>
		</p>
		<p class="relative text-white">
			<a
				onclick={() => {
					showMobileMenu = false;
				}}
				href="/work"
				class="font-bi text-center text-4xl font-normal">Work</a
			>
		</p>
		<p class="relative text-white">
			<a
				onclick={() => {
					showMobileMenu = false;
				}}
				href="/blog"
				class="font-bi text-center text-4xl font-normal">Blog</a
			>
		</p>
		<p class="relative text-white">
			<a
				onclick={() => {
					showMobileMenu = false;
				}}
				href="/contact"
				class="font-bi text-center text-4xl font-normal">Contact</a
			>
		</p>
	</div>
{/if}
