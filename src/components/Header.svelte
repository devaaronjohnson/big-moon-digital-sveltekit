<script>
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/stores';

	let y = $state(0);
	let showMobileMenu = $state(false);
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
					<ul class="flex flex-row items-center gap-10">
						<li class="font-poppins font-light text-white">
							<a href="/about">About</a>
						</li>
						<li class="font-poppins font-light text-white">Services</li>
						<li class="font-poppins font-light text-white">Portfolio</li>
						<li class="font-poppins font-light text-white">Blog</li>
						<li class="font-poppins font-light text-white">Contact</li>
					</ul>
					<a
						href="."
						class="ml-10 hidden rounded-full border border-lightBlue bg-lightBlue px-7 py-3 font-poppins text-white transition-all duration-200 hover:border-darkBlue hover:bg-darkBlue lg:block"
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
				href="/services"
				class="font-bi text-center text-4xl font-normal">Services</a
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
				href="/contact"
				class="font-bi text-center text-4xl font-normal">Contact</a
			>
		</p>
	</div>
{/if}
