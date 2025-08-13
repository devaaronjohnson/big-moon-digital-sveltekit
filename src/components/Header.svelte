<script>
	let y = $state(0);
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
				<img src="/bmd_logo_white.svg" alt="BMD Logo" class="h-12 w-auto lg:h-16" />
			</div>
			<div class="flex flex-1 justify-end">
				<div class="hidden flex-row items-center justify-end lg:flex">
					<ul class="flex flex-row items-center gap-10">
						<li class="font-poppins font-light text-white">About</li>
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
					<a href="." class="">
						<img src="/menu.svg" alt="Menu" class="h-7" />
					</a>
				</div>
			</div>
		</div>
	</div>
</nav>
