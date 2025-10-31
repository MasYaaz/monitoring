<script lang="ts">
	import { School } from 'lucide-svelte';

	const bis1 = [
		{ nama: 'Muhammad Fachry Arrosyidy', kelas: '1 Int B' },
		{ nama: 'Naufal Mohamad Fatih Al-mizan', kelas: '1-B' },
		{ nama: 'Fatih Ahmad Al Kadafi', kelas: '1-C' },
		{ nama: 'Aydin Dwi Alfiansyah', kelas: '1-C' },
		{ nama: 'Fatih Ardhani Suryabumi', kelas: '1-C' },
		{ nama: 'Muhammad Hasbi Tsaqif Alfarizqi', kelas: '2-B' },
		{ nama: 'Akhtar Faruq Nur Zaini', kelas: '1-F' },
		{ nama: 'Zidane Muhammad Al Fatih', kelas: '1-C' },
		{ nama: 'Bintang Zafran Maulana', kelas: '1-D' },
		{ nama: 'Fathan Adlan Riyadhi', kelas: '2-D' },
		{ nama: 'Fairuz Faadhilah Faiqoh', kelas: '2-C' },
		{ nama: 'Reymond Nathanael Tumigolung', kelas: '2-C' },
		{ nama: 'Yasmin Syahlaa', kelas: '2-C' },
		{ nama: 'Hizrian Alfarezi Setiawan', kelas: '2-C' },
		{ nama: 'Adzkiya Nafeesa', kelas: '2-E' },
		{ nama: 'Muhammad Rayhan Rafif', kelas: '2-D' },
		{ nama: 'Jovian Khairi Dharmawan', kelas: '2-D' },
		{ nama: 'Callysta Shaqueena Putri', kelas: '2-C' },
		{ nama: 'Raja Ahmad Abizar', kelas: '2-E' },
		{ nama: 'Hasan Ali Makarim', kelas: '2-B' },
		{ nama: 'Nadiyatul Khoir', kelas: '1-C' },
		{ nama: 'Nur Safira Insyiroh', kelas: '1-C' },
		{ nama: 'Naysyla Ardina', kelas: '1-F' },
		{ nama: 'Safiya Aisyah Dewi', kelas: '1-I' },
		{ nama: 'Celena Raissa Orlin', kelas: '1-B' },
		{ nama: 'Azalea Karunia', kelas: '1-D' },
		{ nama: 'Athifa Ummi Hanifah', kelas: '1-G' },
		{ nama: 'Nadine Puspita Windriya', kelas: '2-K' },
		{ nama: 'Queenesa Naufalyn Putri Huda', kelas: '2-K' },
		{ nama: 'Aisyah Hilyah Ramadhanti', kelas: '2-H' }
	];
</script>

<div class="flex w-full max-w-4xl flex-col items-center">
	<div
		class="mb-4 flex w-full items-center justify-center gap-2 px-5 pt-6 lg:mb-5 lg:gap-5 lg:pt-10 dark:text-white"
	>
		<School class="h-20 w-20 lg:h-30 lg:w-30" />
		<div class="text-center font-heading text-xl font-bold uppercase lg:text-3xl">
			<h1>PMDG Kampus</h1>
			<h1>Empat</h1>
		</div>
	</div>
	<div class="flex w-full flex-col gap-5">
		<div class="flex flex-col gap-2">
			<div>
				<h3 class="text-center font-heading text-lg font-bold lg:text-xl dark:text-white">
					Absen Bis 1
				</h3>
			</div>
			<table class="w-full overflow-hidden rounded-md text-left text-sm">
				<thead
					class="bg-green-300 font-heading text-xs font-normal text-black uppercase lg:text-base"
				>
					<tr class="text-center">
						<th class="py-1">No.</th>
						<th class="py-1">Nama</th>
						<th class="py-1">Kelas</th>
					</tr>
				</thead>
				<tbody class="bg-gray-100 font-heading text-xs lg:text-base">
					{#each bis1 as b, i}
						<tr class="text-center">
							<td class="px-2 py-2">{i + 1}.</td>
							<td class="py-2 text-left">{b.nama}</td>
							<td class="px-1 py-2">{b.kelas}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
