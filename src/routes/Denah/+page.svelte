<script lang="ts">
	import { MapPinned, Undo2 } from 'lucide-svelte';
</script>

<main class="w-screen px-5 md:px-8 lg:px-12 xl:px-24 dark:bg-black">
	<a href="/" class="absolute top-3 right-4 hover:scale-105 dark:text-white">
		<Undo2 />
	</a>
	<div class="flex min-h-screen w-full flex-col items-center py-10 lg:py-20 dark:text-white">
		<div class="flex flex-col items-center">
			<MapPinned class="h-20 w-20 dark:text-white" />
			<h1 class="text-center font-heading text-2xl font-bold uppercase dark:text-white">
				Denah Masjid Nasional Al - Akbar Surabaya
			</h1>
		</div>
	</div>
</main>
