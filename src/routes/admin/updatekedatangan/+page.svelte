<script lang="ts">
	import { fade } from 'svelte/transition';
	import { supabase } from '$lib/connection/supabaseClient';
	import { kedatanganPondok } from '$lib/store/tabelStore';
	import TabelKedatangan from '$lib/component/tabelKedatangan.svelte';

	let pondokInput = { pondok: '', jam: '' };

	async function tambahPondok(e: Event) {
		e.preventDefault();
		const { data, error } = await supabase
			.from('kedatangan_pondok')
			.insert([pondokInput])
			.select();

		if (!error && data) {
			kedatanganPondok.update((list) => [...list, ...data]);
			pondokInput = { pondok: '', jam: '' };
		} else {
			console.error(error);
		}
	}
</script>

<div in:fade={{ duration: 300 }} class="flex w-full flex-col items-center">
	<div class="w-full max-w-4xl rounded-xl p-5 shadow-md">
		<h2 class="mb-4 w-full text-center font-bold uppercase lg:text-2xl dark:text-white">
			Update Data Pondok yang Sudah Datang
		</h2>
		<form on:submit={tambahPondok} class="w-full space-y-3 lg:text-lg dark:text-white">
			<input
				type="text"
				placeholder="Nama Pondok"
				bind:value={pondokInput.pondok}
				class="w-full rounded-lg border p-2"
				required
			/>
			<input
				type="time"
				placeholder="Jam Kedatangan"
				bind:value={pondokInput.jam}
				class="w-full rounded-lg border p-2"
				required
			/>
			<button
				type="submit"
				class="w-full rounded-lg bg-green-400 py-2 font-semibold hover:bg-green-500"
			>
				Tambah
			</button>
		</form>
		<TabelKedatangan />
	</div>
</div>
