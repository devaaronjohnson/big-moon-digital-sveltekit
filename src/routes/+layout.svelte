<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';

	import { Header, Footer } from '$components';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children?.()}
<Footer />

<div class="fixed top-0 left-0 z-[999999999999999999999999999] h-full w-full bg-darkBackground">
	<div class="container_xl relative flex h-full items-center justify-center px-5">
		<p class="relative text-center font-rubik text-6xl font-bold text-white">Coming Soon!</p>
	</div>
</div>
