<script lang="ts">
	import { Bus, UserPlus } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import TabelSantriCeklis from '$lib/component/tabelSantriCeklis.svelte';
	import TabelKedatangan from '$lib/component/tabelKedatangan.svelte';
	import { goto } from '$app/navigation';
</script>

<div in:fade={{ duration: 300 }} class="w-full max-w-4xl text-center">
	<div
		class="grid w-full grid-cols-2 gap-4 pt-3 text-center font-heading text-xs lg:gap-10 lg:text-lg"
	>
		<button
			onclick={() => goto('/admin/tambahorang')}
			class="col-span-1 flex items-center justify-center gap-2 rounded-xl bg-green-300 px-5 py-5 font-semibold uppercase shadow-lg transition-transform duration-200 hover:scale-102 lg:py-10"
		>
			<UserPlus size="30" class="lg:h-10 lg:w-10" />
			<p class="text-[10px] lg:text-2xl">Tambah Nama Baru</p>
		</button>
		<button
			onclick={() => goto('/admin/updatekedatangan')}
			class="col-span-1 flex items-center justify-center gap-2 rounded-xl bg-green-300 px-5 py-5 font-semibold uppercase shadow-lg transition-transform duration-200 hover:scale-102 lg:py-10"
		>
			<Bus size="30" class="lg:h-10 lg:w-10" />
			<p class="text-[10px] lg:text-2xl">Update Data Kedatangan</p>
		</button>
	</div>

	<TabelSantriCeklis />
	<TabelKedatangan />
</div>
