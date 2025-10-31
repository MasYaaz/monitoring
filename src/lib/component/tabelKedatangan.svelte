<script lang="ts">
	import { deletePondok, kedatanganPondok } from '$lib/store/tabelStore';
	import { Trash } from 'lucide-svelte';
</script>

<h4 class="mt-5 mb-1 text-sm font-bold uppercase text-center lg:text-lg dark:text-white">
	Pondok Yang Sudah Datang
</h4>
<table class="w-full overflow-hidden rounded-lg text-left text-sm">
	<thead class="bg-green-300 font-heading text-xs font-normal text-black uppercase lg:text-base">
		{#if $kedatanganPondok.length > 0}
			<tr class="text-center">
				<th class="py-1">No</th>
				<th class="py-1">Pondok</th>
				<th class="py-1">Jam Kedatangan</th>
				<th class="py-1"></th>
			</tr>
		{:else}
			<tr class="text-center">
				<th class="py-1">No</th>
				<th class="py-1">Pondok</th>
				<th class="py-1">Jam Kedatangan</th>
			</tr>
		{/if}
	</thead>
	<tbody class="bg-gray-100 font-heading text-xs lg:text-base">
		{#if $kedatanganPondok.length > 0}
			{#each $kedatanganPondok as p, i}
				<tr class="text-center">
					<td class="px-3 py-2">{i + 1}</td>
					<td class="py-2">{p.pondok}</td>
					<td class="py-2">{p.jam}</td>
					<td class="w-20 py-2">
						<button onclick={() => deletePondok(p.id)}>
							<Trash size="20" class="hover:scale-105 hover:text-red-600" />
						</button>
					</td>
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
