<script lang="ts">
	import { NotebookPen } from 'lucide-svelte';
</script>

<main class="w-screen px-5 md:px-8 lg:px-12 xl:px-24 flex justify-center">
	<div class="flex min-h-screen max-w-4xl w-full flex-col items-center py-5 dark:text-white">
		<div class="flex w-full justify-center items-center px-5 pt-6 lg:pt-10 lg:mb-5 lg:gap-5">
			<NotebookPen class="h-20 w-20 lg:h-25 lg:w-25 dark:text-white" />
			<h1 class="text-center font-heading text-xl lg:w-100 lg:text-3xl font-bold uppercase dark:text-white">
				Prosedur & Tata Tertib Penjemputan
			</h1>
		</div>
		<div class="mt-2 flex flex-col gap-5">
			<div class="flex flex-col gap-1 text-justify font-heading text-sm">
				<div class="flex flex-col">
					<h3 class="text-center text-lg lg:text-xl font-semibold">Prosedur Penjemputan</h3>
					<h3 class="-mt-1 text-center text-base font-semibold">Santri/Santriwati</h3>
				</div>
				<ol class="list-decimal space-y-2 px-6 lg:text-base">
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
			<div class="flex flex-col gap-1 text-justify font-heading text-sm">
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
