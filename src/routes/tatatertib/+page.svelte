<script lang="ts">
	import { NotebookPen } from 'lucide-svelte';

	// Daftar langkah pertama
	const langkahMasuk = [
		'Memasuki pintu masuk yang telah ditentukan.',
		'Parkir di tempat yang telah ditentukan.',
		'Mengkonfirmasi kedatangan di meja registrasi.',
		'Menunggu santri di tempat yang ditentukan.',
		'Setelah bertemu dengan ananda, walisantri dipersilahkan meninggalkan area Al-Akbar tanpa menetap.'
	];

	// Daftar aturan kedua
	const aturanWalisantri = [
		'Wajib memakai pakaian yang sopan dan menutup aurat.',
		'Wajib memarkirkan kendaraan di tempat yang telah ditentukan.',
		'Dilarang menemui santri sebelum selesainya pengabsenan dengan pembimbing konsulatnya.',
		'Dilarang mengambil barang bawaan santri sampai ada arahan dari panitia yang bertugas.',
		'Dilarang melewati batas-batas steril yang sudah ditetapkan.',
		'Wajib menjaga kebersihan dan ketertiban.',
		'Wajib mengikuti semua arahan dari panitia yang bertugas.'
	];
</script>

<div class="flex w-full items-center justify-center px-5 pt-6 lg:mb-5 lg:gap-5 lg:pt-10">
	<NotebookPen class="h-20 w-20 lg:h-25 lg:w-25 dark:text-white" />
	<h1
		class="text-center font-heading text-xl font-bold uppercase lg:w-100 lg:text-3xl dark:text-white"
	>
		Prosedur & Tata Tertib Penjemputan
	</h1>
</div>
<div class="mt-2 flex flex-col gap-5">
	<div class="flex flex-col gap-1 text-justify font-heading text-sm">
		<div class="flex flex-col">
			<h3 class="text-center text-lg font-semibold lg:text-xl">Prosedur Penjemputan</h3>
			<h3 class="-mt-1 text-center text-base font-semibold">Santri/Santriwati</h3>
		</div>
		<ol class="space-y-4 px-6 py-6">
			{#each langkahMasuk as lm, i}
				<li class="flex items-center gap-4">
					<span
						class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-900 font-semibold text-white"
						>{i + 1}</span
					>
					<p class="text-gray-700 lg:text-base">{lm}</p>
				</li>
			{/each}
		</ol>
	</div>
	<div class="flex flex-col gap-1 text-justify font-heading text-sm">
		<h3 class="text-center text-lg font-semibold lg:text-xl">Tata Tertib dan Himbauan</h3>
		<ol class="space-y-4 px-6 py-6">
			{#each aturanWalisantri as aw, i}
				<li class="flex items-center gap-4">
					<span
						class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-900 font-semibold text-white"
						>{i + 1}</span
					>
					<p class="text-gray-700 lg:text-base">
						{aw}
					</p>
				</li>
			{/each}
		</ol>
	</div>
</div>
