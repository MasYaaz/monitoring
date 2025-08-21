<script lang="ts">
	import { MapPinned } from 'lucide-svelte';
	import PhotoGallery from '$lib/component/photoGalery.svelte';
	import Denah from '$lib/assets/Denah Al - Akbar.png';

	const images = [{ src: Denah, title: 'Denah Masjid Al-Akbar' }];
</script>

<main class="px-5 md:px-8 h-screen lg:h-full lg:px-12 xl:px-24 flex flex-col items-center">
	<div class="flex h-full w-full max-w-4xl flex-col items-center gap-5 py-5 dark:text-white">
		<div class="flex w-full justify-center items-center px-5 pt-6 lg:pt-10 lg:gap-5 lg:mb-5">
			<MapPinned class="h-14 w-14 lg:h-25 lg:w-25" />
			<h1 class="text-center font-heading text-2xl lg:text-4xl font-bold uppercase dark:text-white">
				Denah Masjid<br>Al-Akbar
			</h1>
		</div>
		<PhotoGallery {images} />
	</div>
</main>
