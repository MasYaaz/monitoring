<script lang="ts">
	import { Bus, MapPinned, NotebookPen, Users } from 'lucide-svelte';
	import logoLight from '$lib/assets/logo S1.png';
	import logoDark from '$lib/assets/logo S2.png';
	import { isDark } from '$lib/store/darkMode';
	import { belumDijemput, kedatanganPondok, loading } from '$lib/store/tabelStore';
	const tombol = [{ link: '/tatatertib' }];
</script>

<main class="flex w-screen justify-center px-4 md:px-6 lg:px-12 xl:px-24">
	<div class="flex min-h-screen w-full max-w-4xl flex-col items-center py-5">
		<div class="flex w-full flex-col items-center px-5 py-6 lg:py-10">
			{#if !$isDark}
				<img
					src={logoLight}
					alt="logo Satgas"
					class="w-60 lg:w-100"
					loading="eager"
					fetchpriority="high"
				/>
			{:else}
				<img
					src={logoDark}
					alt="logo Satgas"
					class="w-60 lg:w-100"
					loading="eager"
					fetchpriority="high"
				/>
			{/if}
		</div>
		<div
			class="grid w-full grid-cols-2 gap-4 pt-3 text-center font-heading text-xs lg:gap-10 lg:text-lg"
		>
			<a
				href="/tatatertib"
				class="col-span-1 flex h-40 flex-col items-center justify-center gap-1 rounded-xl bg-green-300 px-2 py-5 font-semibold uppercase shadow-lg transition-transform duration-200 hover:scale-105 lg:py-10"
			>
				<NotebookPen size="50" />
				<p class="mt-1 w-20 lg:w-full lg:text-lg">Prosedur & Tata Tertib</p>
			</a>
			<a
				href="/denah"
				class="col-span-1 flex h-40 flex-col items-center justify-center rounded-xl bg-green-300 px-2 py-5 font-semibold uppercase shadow-lg transition-transform duration-200 hover:scale-105"
			>
				<MapPinned size="50" />
				<p class="mt-1 w-16 lg:w-full lg:text-lg">Denah Al-Akbar</p>
			</a>
			<a
				href="/jadwalkedatangan"
				class="col-span-1 flex h-40 flex-col items-center justify-center gap-1 rounded-xl bg-green-300 px-2 py-5 font-semibold uppercase shadow-lg transition-transform duration-200 hover:scale-105"
			>
				<Bus size="50" />
				<p class="mt-1 w-20 lg:w-full lg:text-lg">Jadwal Kedatangan</p>
			</a>
			<a
				href="/datasantri"
				class="col-span-1 flex h-40 flex-col items-center justify-center gap-1 rounded-xl bg-green-300 px-2 py-5 font-semibold uppercase shadow-lg transition-transform duration-200 hover:scale-105"
			>
				<Users size="50" />Data Santri
			</a>
		</div>
		{#if $loading === true}
			<div class="flex w-full flex-col items-center justify-center p-10">
				<div
					class="h-12 w-12 animate-spin rounded-full border-4 border-green-800 border-t-transparent dark:border-white"
				></div>
				<p role="alert" class="text-lg font-semibold text-gray-700">Sedang memproses...</p>
			</div>
		{:else}
			<p class="mt-5 mb-1 text-sm font-bold uppercase lg:text-lg dark:text-white">
				Pondok Yang Sudah Datang
			</p>
			<table class="w-full overflow-hidden rounded-lg text-left text-sm">
				<thead
					class="bg-green-300 font-heading text-xs font-normal text-black uppercase lg:text-base"
				>
					<tr class="text-center">
						<th class="py-1">No</th>
						<th class="py-1">Pondok</th>
						<th class="py-1">Jam Kedatangan</th>
						<th class="py-1"></th>
					</tr>
				</thead>
				<tbody class="bg-gray-100 font-heading text-xs lg:text-base">
					{#if $kedatanganPondok.length > 0}
						{#each $kedatanganPondok as p, i}
							<tr class="text-center">
								<td class="px-3 py-2">{i + 1}</td>
								<td class="py-2">{p.pondok}</td>
								<td class="py-2">{p.jam}</td>
							</tr>
						{/each}
					{:else}
						<tr class="text-center">
							<td class="px-3 py-2">-</td>
							<td class="py-2">None</td>
							<td class="py-2">None</td>
						</tr>
					{/if}
				</tbody>
			</table>
			<p class="mt-5 text-sm font-bold uppercase lg:text-lg dark:text-white">
				Santri/Santriwati Yang Belum Dijemput
			</p>
			<table class="w-full overflow-hidden rounded-lg text-left text-sm">
				<thead
					class="bg-green-300 font-heading text-xs font-normal text-black uppercase lg:text-base"
				>
					<tr class="text-center">
						<th class="py-1">No</th>
						<th class="py-1">Nama Lengkap</th>
						<th class="py-1">Kelas</th>
						<th class="py-1">Pondok</th>
					</tr>
				</thead>
				<tbody class="bg-gray-100 font-heading text-xs lg:text-base">
					{#if $belumDijemput.length > 0}
						{#each $belumDijemput as b, i}
							<tr class="text-center">
								<td class="px-3 py-2">{i + 1}.</td>
								<td class="py-2">{b.nama}</td>
								<td class="py-2">{b.kelas}</td>
								<td class="px-2 py-2">{b.pondok}</td>
							</tr>
						{/each}
					{:else}
						<tr class="text-center">
							<td class="px-3 py-2">-</td>
							<td class="py-2">None</td>
							<td class="py-2">None</td>
							<td class="py-2">-</td>
						</tr>
					{/if}
				</tbody>
			</table>
		{/if}
	</div>
</main>
