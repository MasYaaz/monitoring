<script lang="ts">
	import { MapPinned } from 'lucide-svelte';
	import PhotoGallery from '$lib/component/photoGalery.svelte';
	import Denah from '$lib/assets/Denah Al - Akbar.png';

	const images = [{ src: Denah, title: 'Denah Masjid Al-Akbar' }];
</script>

<main class="w-screen px-5 md:px-8 lg:px-12 xl:px-24 dark:bg-black">
	<div class="flex h-screen w-full flex-col items-center gap-5 py-12 lg:py-20 dark:text-white">
		<div class="flex items-center gap-2">
			<MapPinned class="h-16 w-16 dark:text-white" />
			<h1 class="text-center font-heading text-2xl font-bold uppercase dark:text-white">
				Denah Masjid<br />Al-Akbar
			</h1>
		</div>
		<PhotoGallery {images} />
	</div>
</main>
