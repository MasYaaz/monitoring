<script lang="ts">
	import { NotebookPen } from 'lucide-svelte';
</script>

<main class="w-screen px-5 md:px-8 lg:px-12 xl:px-24 dark:bg-black">
	
	<div class="flex min-h-screen w-full flex-col items-center py-10 lg:py-20 dark:text-white">
		<div class="flex flex-col items-center">
			<NotebookPen class="h-20 w-20 dark:text-white" />
			<h1 class="text-center font-heading text-2xl font-bold uppercase dark:text-white">
				Prosedur & Tata Tertib Penjemputan
			</h1>
		</div>
		<div class="flex flex-col gap-5 mt-2">
			<div class="font-heading text-sm text-justify">
				<h3 class="font-semibold text-lg text-center">Prosedur Penjemputan Santri/Santriwati</h3>
				<ol class="list-decimal space-y-2 px-6">
					<li>Memasuki pintu masuk yang telah ditentukan.</li>
					<li>Parkir di tempat yang telah ditentukan.</li>
					<li>Mengkonfirmasi kedatangan di meja registrasi.</li>
					<li>Menunggu santri di tempat yang ditentukan.</li>
					<li>
						Setelah bertemu dengan ananda, walisantri dipersilahkan meninggalkan area Al-Akbar tanpa
						menetap.
					</li>
				</ol>
			</div>
			<div class="font-heading text-sm text-justify">
				<h3 class="text-center text-lg font-semibold">Tata Tertib dan Himbauan</h3>
				<ol class="list-decimal space-y-2 px-6">
					<li>Wajib memakai pakaian yang sopan dan menutup aurat.</li>
					<li>Wajib memarkirkan kendaraan di tempat yang telah ditentukan.</li>
					<li>
						Dilarang menemui santri sebelum selesainya pengabsenan dengan pembimbing konsulatnya.
					</li>
					<li>
						Dilarang mengambil barang bawaan santri sampai ada arahan dari panitia yang bertugas.
					</li>
					<li>Dilarang melewati batas-batas steril yang sudah ditetapkan.</li>
					<li>Wajib menjaga kebersihan dan ketertiban.</li>
					<li>Wajib mengikuti semua arahan dari panitia yang bertugas.</li>
				</ol>
			</div>
		</div>
	</div>
</main>
