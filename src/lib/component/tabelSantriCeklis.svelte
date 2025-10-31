<script>
	import { belumDijemput, deleteSantri } from '$lib/store/tabelStore';
	import { Check } from 'lucide-svelte';
</script>

<!-- <p class="mt-5 text-center text-sm font-bold uppercase lg:text-lg dark:text-white">
	Santri/Santriwati Yang Belum Dijemput
</p> -->

<h4 class="mt-5 text-center text-sm font-bold uppercase lg:text-lg dark:text-white">
	Santri/Santriwati Yang Belum Hadir
</h4>

<table class="w-full overflow-hidden rounded-lg text-left text-sm">
	<thead class="bg-green-300 font-heading text-xs font-normal text-black uppercase lg:text-base">
		{#if $belumDijemput.length > 0}
			<tr class="text-center">
				<th class="py-1">No</th>
				<th class="py-1">Nama Lengkap</th>
				<th class="py-1">Kelas</th>
				<th class="py-1">Pondok</th>
				<th class="w-22 py-1"></th>
			</tr>
		{:else}
			<tr class="text-center">
				<th class="py-1">No</th>
				<th class="py-1">Nama Lengkap</th>
				<th class="py-1">Kelas</th>
				<th class="py-1">Pondok</th>
			</tr>
		{/if}
	</thead>
	<tbody class="bg-gray-100 font-heading text-xs lg:text-base">
		{#if $belumDijemput.length > 0}
			{#each $belumDijemput as b, i}
				<tr class="text-center">
					<td class="px-3 py-2">{i + 1}.</td>
					<td class="py-2">{b.nama}</td>
					<td class="py-2">{b.kelas}</td>
					<td class="px-2 py-2">{b.pondok}</td>
					<td class="px-2 py-2"
						><button onclick={() => deleteSantri(b.id)}>
							<Check size="20" class="hover:scale-105  hover:text-green-800" />
						</button></td
					>
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
