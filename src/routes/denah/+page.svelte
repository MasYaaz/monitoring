<script lang="ts">
	import { MapPinned } from 'lucide-svelte';
	import PhotoGallery from '$lib/component/photoGalery.svelte';
	import Denah from '$lib/assets/Denah Al - Akbar.png';

	const images = [{ src: Denah, title: 'Denah Masjid Al-Akbar' }];
</script>

<main class="flex h-screen flex-col items-center px-5 md:px-8 lg:h-full lg:px-12 xl:px-24">
	<div class="flex h-full w-full max-w-4xl flex-col items-center gap-5 py-5 dark:text-white">
		<div
			class="flex w-full flex-col items-center justify-center gap-2 px-5 pt-6 lg:mb-5 lg:gap-5 lg:pt-10"
		>
			<MapPinned class="h-20 w-20 lg:h-25 lg:w-25" />
			<h1 class="text-center font-heading text-2xl font-bold uppercase lg:text-4xl dark:text-white">
				Denah Masjid<br />Al-Akbar
			</h1>
		</div>
		<PhotoGallery {images} />
	</div>
</main>
