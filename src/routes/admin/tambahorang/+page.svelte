<script lang="ts">
	import { fade } from 'svelte/transition';
	import { supabase } from '$lib/connection/supabaseClient';
	import { belumDijemput } from '$lib/store/tabelStore';
	import TabelSantriCeklis from '$lib/component/tabelSantriCeklis.svelte';

	let santriInput = { nama: '', kelas: '', pondok: '' };

	async function tambahSantri(e: Event) {
		e.preventDefault();
		const { data, error } = await supabase
			.from('belum_dijemput')
			.insert([santriInput])
			.select();

		if (!error && data) {
			belumDijemput.update((list) => [...list, ...data]);
			santriInput = { nama: '', kelas: '', pondok: '' };
		} else {
			console.error(error);
		}
	}
</script>

<div in:fade={{ duration: 300 }} class="flex w-full flex-col items-center gap-5">
	<div class="w-full max-w-4xl gap-5 rounded-xl p-5 shadow-md">
		<!-- <h2 class="mb-4 w-full text-center font-bold uppercase lg:text-2xl dark:text-white">
			Tambah Santri/Santriwati Belum Dijemput
		</h2> -->
		<h2 class="mb-4 w-full text-center font-bold uppercase lg:text-2xl dark:text-white">
			Tambah Santri/Santriwati Belum Hadir
		</h2>
		<form on:submit={tambahSantri} class="space-y-3 text-lg dark:text-white">
			<input
				type="text"
				placeholder="Nama Lengkap"
				bind:value={santriInput.nama}
				class="w-full rounded-lg border p-2"
				required
			/>
			<input
				type="text"
				placeholder="Kelas (misal: 5 - E)"
				bind:value={santriInput.kelas}
				class="w-full rounded-lg border p-2"
				required
			/>
			<input
				type="text"
				placeholder="Pondok"
				bind:value={santriInput.pondok}
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
		<TabelSantriCeklis />
	</div>
</div>
