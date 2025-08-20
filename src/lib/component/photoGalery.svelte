<script lang="ts">
	import { onMount } from 'svelte';
	import GLightbox from 'glightbox';
	import 'glightbox/dist/css/glightbox.css';

	export let images: { src: string; thumb?: string; title?: string }[] = [];

	let lightbox: any;

	onMount(() => {
		lightbox = GLightbox({
			selector: '.glightbox',
			touchNavigation: false, // swipe gesture
			loop: false, // putar galeri terus
			zoomable: true, // pinch-to-zoom di mobile
			closeButton: false, // sembunyikan tombol close
			autoplayVideos: false,
			closeOnOutsideClick: true,
			touchFollowAxis: true
		});

		return () => {
			lightbox.destroy();
		};
	});
</script>

<div>
	{#each images as img}
		<a href={img.src} class="glightbox">
			<img
				src={img.thumb || img.src}
				alt={img.title || 'image'}
				class="cursor-zoom-in rounded-xl"
				loading="eager"
				fetchpriority="high"
			/>
		</a>
	{/each}
</div>