<script lang="ts">
	import { School, Users } from 'lucide-svelte';

	let tombolKampus = [
		{ nama: 'PMDG Kampus 1', link: '/datasantri/pmdgputra1' },
		{ nama: 'PMDG Kampus 3', link: '/datasantri/pmdgputra3' },
		{ nama: 'PMDG Kampus 4', link: '/datasantri/pmdgputra4' },
		{ nama: 'PMDG Kampus 5', link: '/datasantri/pmdgputra5' },
		{ nama: 'PMDG Kampus 6', link: '/datasantri/pmdgputra6' },
		{ nama: 'PMDG Putri Kampus 1', link: '/datasantri/pmdgputri1' },
		{ nama: 'PMDG Putri Kampus 3', link: '/datasantri/pmdgputri3' },
		{ nama: 'PMDG Putri Kampus 4', link: '/datasantri/pmdgputri4' }
	];
</script>

<main class="flex w-screen items-center px-5 md:px-8 lg:px-12 xl:px-24 dark:bg-black">
	<div class="flex min-h-screen w-full flex-col items-center py-5">
		<div class="flex w-full max-w-4xl flex-col items-center">
			<div
				class="flex w-full flex-col items-center justify-center gap-2 px-5 pt-6 lg:mb-5 lg:pt-10 dark:text-white"
			>
				<Users class="h-20 w-20 lg:h-30 lg:w-30" />
				<div class="text-center font-heading text-4xl font-bold uppercase lg:text-5xl">
					<h1>Data</h1>
					<h1 class="-mt-1 text-lg lg:text-2xl">Santri / Santriwati</h1>
				</div>
			</div>
			<div
				class="grid w-full grid-cols-2 gap-4 pt-3 text-center font-heading text-xs lg:grid-cols-4 lg:gap-10 lg:text-lg"
			>
				{#each tombolKampus as t}
					<a
						href={t.link}
						class="col-span-1 flex h-40 lg:h-50 flex-col items-center justify-center gap-1 rounded-xl bg-green-300 px-2 py-5 font-semibold uppercase shadow-lg transition-transform duration-200 hover:scale-105 lg:py-10"
					>
						<School size="60" />
						<p class="mt-1 lg:w-full lg:text-lg">{t.nama}</p>
					</a>
				{/each}
			</div>
		</div>
	</div>
</main>
