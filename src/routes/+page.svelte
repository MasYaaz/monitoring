<script lang="ts">
	import { Bus, MapPinned, NotebookPen } from 'lucide-svelte';
	import logoLight from '$lib/assets/logo S1.png';
	import logoDark from '$lib/assets/logo S2.png';
	import { isDark } from '$lib/store/darkMode';
</script>

<main class="w-screen px-4 md:px-6 lg:px-12 xl:px-24 dark:bg-black">
	<div class="flex min-h-screen py-5 w-full flex-col items-center">
		<div class="flex w-full flex-col items-center px-5 py-6 lg:py-10">
			{#if !$isDark}
				<img src={logoLight} alt="logo Satgas" class="w-60 lg:w-100" />
			{:else}
				<img src={logoDark} alt="logo Satgas" class="w-60 lg:w-100" />
			{/if}
		</div>
		<div
			class="grid w-full grid-cols-3 gap-4 pt-3 text-center font-heading text-xs lg:gap-10 lg:text-lg"
		>
			<a
				href="/TataTertib"
				class="col-span-1 flex flex-col items-center justify-center gap-1 rounded-xl bg-green-300 px-2 py-5 font-semibold uppercase shadow-lg transition-transform duration-200 hover:scale-105 lg:py-10"
			>
				<NotebookPen size="50" />Prosedur & Tata Tertib
			</a>
			<a
				href="/Denah"
				class="col-span-1 flex flex-col items-center justify-center rounded-xl bg-green-300 px-2 py-5 font-semibold uppercase shadow-lg transition-transform duration-200 hover:scale-105"
			>
				<MapPinned size="50" />
				<p class="mt-1 text-[10px] lg:text-lg">Denah Masjid</p>
				 Al-Akbar
			</a>
			<a
				href="/JadwalKedatangan"
				class="col-span-1 flex flex-col items-center justify-center gap-1 rounded-xl bg-green-300 px-2 py-5 font-semibold uppercase shadow-lg transition-transform duration-200 hover:scale-105"
			>
				<Bus size="50" />Jadwal Kedatangan
			</a>
		</div>
		<p class="mt-5 mb-1 text-sm font-bold uppercase">Pondok Yang Sudah Datang</p>
		<table class="w-full overflow-hidden rounded-lg text-left text-sm">
			<thead class="bg-green-300 font-heading text-xs font-normal text-black uppercase">
				<tr class="text-center">
					<th class="py-1">No</th>
					<th class="py-1">Pondok</th>
					<th class="py-1">Jam Kedatangan</th>
				</tr>
			</thead>
			<tbody class="bg-gray-100 font-heading text-xs">
				<tr class="text-center">
					<td class="px-3 py-2">1.</td>
					<td class="py-2">PMDG Putra Kampus Pusat</td>
					<td class="py-2">06.00</td>
				</tr>
			</tbody>
		</table>
		<p class="mt-5 mb-1 text-sm font-bold uppercase">Santri/Santriwati Yang Belum Dijemput</p>
		<table class="w-full overflow-hidden rounded-lg text-left text-sm">
			<thead class="bg-green-300 font-heading text-xs font-normal text-black uppercase">
				<tr class="text-center">
					<th class="py-1">No</th>
					<th class="py-1">Nama Lengkap</th>
					<th class="py-1">Kelas</th>
					<th class="py-1">Pondok</th>
				</tr>
			</thead>
			<tbody class="bg-gray-100 font-heading text-xs">
				<tr class="text-center">
					<td class="px-3 py-2">1.</td>
					<td class="py-2">Aflah Mahdi Yazdi</td>
					<td class="py-2">5 - E</td>
					<td class="px-2 py-2">Gontor 1</td>
				</tr>
			</tbody>
		</table>
	</div>
</main>
