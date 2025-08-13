<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import { Header, Footer } from '$components';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children?.()}
<Footer />
