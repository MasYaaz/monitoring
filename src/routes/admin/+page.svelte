<script lang="ts">
	import { Bus, Undo2, UserPlus, UserRoundCog } from 'lucide-svelte';
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/connection/supabaseClient';
	import {
		belumDijemput,
		kedatanganPondok,
		loadData,
		subscribeRealtime
	} from '$lib/store/tabelStore';
	import TabelSantriCeklis from '$lib/component/tabelSantriCeklis.svelte';
	import TabelKedatangan from '$lib/component/tabelKedatangan.svelte';

	const halaman = writable('dashboard');

	let pondokInput = { pondok: '', jam: '' };
	let santriInput = { nama: '', kelas: '', pondok: '' };

	onMount(() => {
		loadData();
		subscribeRealtime();
	});

	async function tambahPondok() {
		const { data, error } = await supabase
			.from('kedatangan_pondok')
			.insert([{ pondok: pondokInput.pondok, jam: pondokInput.jam }])
			.select();

		if (!error && data) {
			kedatanganPondok.update((list) => [...list, ...data]);
			pondokInput = { pondok: '', jam: '' };
		} else {
			console.error(error);
		}
	}

	async function tambahSantri() {
		const { data, error } = await supabase
			.from('belum_dijemput')
			.insert([{ nama: santriInput.nama, kelas: santriInput.kelas, pondok: santriInput.pondok }])
			.select();

		if (!error && data) {
			belumDijemput.update((list) => [...list, ...data]);
			santriInput = { nama: '', kelas: '', pondok: '' };
		} else {
			console.error(error);
		}
	}
</script>

{#if $halaman !== 'dashboard'}
	<button
		onclick={() => ($halaman = 'dashboard')}
		class="fixed top-3 left-4 hover:scale-105 dark:text-white"
	>
		<Undo2 />
	</button>
{/if}
<main class="w-screen px-4 md:px-6 lg:px-12 xl:px-24">
	<div class="flex min-h-screen w-full flex-col items-center py-5">
		<div class="flex w-full items-center justify-center px-5 py-6 lg:py-10 dark:text-white">
			<UserRoundCog class="h-20 w-20 lg:h-30 lg:w-30" />
			<div class="text-center font-heading text-2xl font-bold lg:text-4xl">
				<h1>Dashboard</h1>
				<h1>Admin</h1>
			</div>
		</div>
		{#if $halaman === 'dashboard'}
			<div in:fade={{ duration: 300 }} class="w-full max-w-4xl text-center">
				<div
					class="grid w-full grid-cols-2 gap-4 pt-3 text-center font-heading text-xs lg:gap-10 lg:text-lg"
				>
					<button
						onclick={() => ($halaman = 'tambah orang')}
						class="col-span-1 flex items-center justify-center gap-2 rounded-xl bg-green-300 px-5 py-5 font-semibold uppercase shadow-lg transition-transform duration-200 hover:scale-102 lg:py-10"
					>
						<UserPlus size="30" class="lg:h-10 lg:w-10" />
						<p class="text-[10px] lg:text-2xl">Tambah Nama Baru</p>
					</button>
					<button
						onclick={() => ($halaman = 'update kedatangan')}
						class="col-span-1 flex items-center justify-center gap-2 rounded-xl bg-green-300 px-5 py-5 font-semibold uppercase shadow-lg transition-transform duration-200 hover:scale-102 lg:py-10"
					>
						<Bus size="30" class="lg:h-10 lg:w-10" />
						<p class="text-[10px] lg:text-2xl">Update Data Kedatangan</p>
					</button>
				</div>
				<TabelSantriCeklis />
				<TabelKedatangan />
			</div>
		{:else if $halaman === 'tambah orang'}
			<div in:fade={{ duration: 300 }} class="flex w-full flex-col items-center gap-5">
				<!-- FORM SANTRI -->
				<div class="w-full max-w-4xl rounded-xl p-5 shadow-md dark:text-white">
					<h2 class="mb-4 w-full text-center font-bold uppercase lg:text-2xl">
						Tambah Santri/Santriwati Belum Dijemput
					</h2>
					<form onsubmit={tambahSantri} class="space-y-3 text-lg">
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
				</div>
				<div class="w-full max-w-4xl">
					<TabelSantriCeklis />
				</div>
			</div>
		{:else if $halaman === 'update kedatangan'}
			<div in:fade={{ duration: 300 }} class="flex w-full flex-col items-center">
				<!-- FORM PONDOK -->
				<div class="w-full max-w-4xl rounded-xl p-5 shadow-md dark:text-white">
					<h2 class="mb-4 w-full text-center font-bold uppercase lg:text-2xl">
						Update Data Pondok yang Sudah Datang
					</h2>
					<form onsubmit={tambahPondok} class="w-full space-y-3 lg:text-lg">
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
				</div>
				<div class="w-full max-w-4xl">
					<TabelKedatangan />
				</div>
			</div>
		{/if}
	</div>
</main>
