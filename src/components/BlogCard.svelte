<script>
	import { format } from 'date-fns';

	import { BlogPill } from '$components';

	let { title, date, pill, image, url } = $props();
</script>

<a href={url} class="cursor-pointer">
	<div class="card_container overflow-hidden rounded-2xl border border-[#ddd] shadow-lg">
		<div class="image_container h-[225px] overflow-hidden lg:h-[275px]">
			<img src={image} alt="" class="h-full w-full object-cover transition-all duration-500" />
		</div>
		<div class="px-5 py-5">
			<div class="mb-3 flex flex-row flex-wrap items-center gap-3">
				<BlogPill text={pill} />
			</div>
			<p class="mb-2 font-rubik text-2xl font-normal text-pretty">{title}</p>
			<p class="font-karla text-lg font-light">{format(date, 'MMMM d, yyyy')}</p>
		</div>
	</div>
</a>

<style>
	.card_container:hover img {
		@apply scale-105;
	}
</style>
