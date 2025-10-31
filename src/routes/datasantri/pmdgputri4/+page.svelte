<script lang="ts">
	import { School } from 'lucide-svelte';

	// const bis1 = [
	// 	{ nama: "Assyifa' Aulia Azzahro", kelas: '1B' },
	// 	{ nama: 'Dania Mu Saqeena Caniago', kelas: '1B' },
	// 	{ nama: 'Haifa Nafiza Adlina', kelas: '1B' },
	// 	{ nama: 'Khairina Filza Ghassani', kelas: '1B' },
	// 	{ nama: 'Baiq Aisyah Abusemah', kelas: '1C' },
	// 	{ nama: 'Bilgies Nabilla Istiqomah', kelas: '1D' },
	// 	{ nama: 'Berliana Dwi Diandra', kelas: '1E' },
	// 	{ nama: 'Vania Fauzhara Putri', kelas: '1E' },
	// 	{ nama: 'Ranma Mikhaila', kelas: '1F' },
	// 	{ nama: "Aisyah Zuhrotun Nisa'", kelas: '1intB' },
	// 	{ nama: 'Aisyah Nur Faizah', kelas: '2B' },
	// 	{ nama: 'Aida Fithrotun Nisa', kelas: '2B' },
	// 	{ nama: 'Carissa Salsabila Firdausi', kelas: '2C' },
	// 	{ nama: 'Cralovna Beleeza Nobel', kelas: '2D' },
	// 	{ nama: 'Sheeva Falisha Salsabila', kelas: '2D' },
	// 	{ nama: 'Hana Khairunnisa', kelas: '2D' },
	// 	{ nama: 'Samratu Vista Maulidiyah', kelas: '2E' },
	// 	{ nama: 'Schatzy Reybulan Amirah', kelas: '2E' },
	// 	{ nama: 'Airin Rafiqoh', kelas: '2E' },
	// 	{ nama: 'Beryl Ayu Ramadanti', kelas: '2F' },
	// 	{ nama: 'Cheryl Mutia Anezka Hadyana', kelas: '2F' },
	// 	{ nama: 'Chayara Elfa Mukhbita', kelas: '2G' },
	// 	{ nama: 'Janeeta Naeva Fayyola', kelas: '2G' },
	// 	{ nama: 'Naila Abia Ali', kelas: '3B' },
	// 	{ nama: 'Lovely Beauty Fardianka', kelas: '3C' },
	// 	{ nama: 'Alifah Azzahrah', kelas: '3C' },
	// 	{ nama: 'Azzalea Banni Hasya', kelas: '3D' },
	// 	{ nama: 'Reisya Nafisah Kamiliya Mansyur', kelas: '3F' },
	// 	{ nama: 'Syifa Khairunnissa', kelas: '3F' },
	// 	{ nama: 'Rahmania Radjabi Siregar', kelas: '3G' },
	// 	{ nama: 'Sabrina Alysa Putri', kelas: '3G' },
	// 	{ nama: 'Amirah Azzahrah', kelas: '3G' },
	// 	{ nama: 'Dinna Anasya Alifatur Rohmah', kelas: '3G' },
	// 	{ nama: 'Nazhira Shaffiya Nur Ilham', kelas: '3G' },
	// 	{ nama: 'Idian Nurul', kelas: '3G' },
	// 	{ nama: 'Naura Adzka Hasanah', kelas: '3IntB' },
	// 	{ nama: 'Hurin In Nuraini', kelas: '3IntC' },
	// 	{ nama: 'Syafa Alya Azzahra', kelas: '3IntC' },
	// 	{ nama: 'Aisyah Achmad', kelas: '4B' },
	// 	{ nama: 'Nadini Ramadhani', kelas: '4B' },
	// 	{ nama: 'Aliyah Alfina', kelas: '4B' },
	// 	{ nama: 'Chintya Kusumawardhani', kelas: '4B' },
	// 	{ nama: "Iftitah Ilmannafi'ah", kelas: '4B' },
	// 	{ nama: 'Raisa Chandra Aqila', kelas: '4B' },
	// 	{ nama: 'Hafizah Nirwasita Griselda', kelas: '4C' },
	// 	{ nama: 'Aiko Danish Az Zahra', kelas: '4C' },
	// 	{ nama: 'Safina Almira Raikhana', kelas: '4C' },
	// 	{ nama: 'Miftahussaadah', kelas: '4C' },
	// 	{ nama: 'Nazifah Maliika Filzah Izzati', kelas: '4C' },
	// 	{ nama: 'Keyra Lakeisha Putri', kelas: '4C' },
	// 	{ nama: 'Andita Fatharany Nailatusyifa', kelas: '4D' },
	// 	{ nama: 'Dzanira Deefikha', kelas: '4D' },
	// 	{ nama: 'Almira S.F. Shaleh', kelas: '4D' },
	// 	{ nama: 'Wahyu Nur Wahid Apprita Safty Aulia', kelas: '4E' },
	// 	{ nama: 'Tharya Alesha Rizwana', kelas: '4E' },
	// 	{ nama: 'Revanaura Riifiandita', kelas: '4E' },
	// 	{ nama: 'Nazhira Alsyarqiah', kelas: '4E' },
	// 	{ nama: 'Aulia Azzahra Arnymifcha', kelas: '4F' },
	// 	{ nama: "Zahratusshita'", kelas: '4F' },
	// 	{ nama: 'Freya Arumi Yusman', kelas: '4F' },
	// 	{ nama: 'Niza Amirah Yasmin Siregar', kelas: '4F' },
	// 	{ nama: 'Fajrina Kayla', kelas: '4F' },
	// 	{ nama: 'Sabrina Manathiq Hailalah', kelas: '4G' },
	// 	{ nama: 'Azzahra Sayyidah Darmawanty', kelas: '5B' },
	// 	{ nama: 'Fatimah Zahra Febriana', kelas: '5B' },
	// 	{ nama: 'Najma Anisa Hasana', kelas: '5B' },
	// 	{ nama: 'Afsa Furayah Mahdiya', kelas: '5C' },
	// 	{ nama: 'Halimah Ayu Fitriyah', kelas: '5C' },
	// 	{ nama: 'Rana Angelia Kusuma', kelas: '5C' },
	// 	{ nama: 'Sulasi Ifani', kelas: '5C' },
	// 	{ nama: 'Nailah Salsabila', kelas: '5C' },
	// 	{ nama: 'Aisyah Kayla Azzahra', kelas: '5D' },
	// 	{ nama: 'Nayla Rahma Agustina', kelas: '5D' },
	// 	{ nama: 'Syifa Salsabila Pratiwi', kelas: '5D' },
	// 	{ nama: 'Jihanur Rifdah Zahiroh', kelas: '5E' },
	// 	{ nama: 'Keysha Fildzah Nazifa', kelas: '5E' },
	// 	{ nama: 'Nalia Intan Fahrani', kelas: '5E' },
	// 	{ nama: 'Aleena Ma’arief', kelas: '5F' },
	// 	{ nama: 'Febrina Cita Kartika Hartono', kelas: '5F' },
	// 	{ nama: 'Mutiara Iftinan Hartono Putri', kelas: '5F' },
	// 	{ nama: 'Putri Aisyah Nur Rahmawati', kelas: '5F' },
	// 	{ nama: 'Sabita Indana Inayah', kelas: '5F' },
	// 	{ nama: 'Inayah Quratul', kelas: '5F' },
	// 	{ nama: 'Nayra Maidina Rahmadani Yuwono', kelas: '5G' },
	// 	{ nama: 'Rosinda Nahda Mashita', kelas: '5G' },
	// 	{ nama: 'Donata Ratna Faridah', kelas: '5H' },
	// 	{ nama: 'Muthia Faiqha Istifadah', kelas: '5H' },
	// 	{ nama: 'Najwa Nur Aini', kelas: '5H' },
	// 	{ nama: 'Fauziah Nur Kamilah', kelas: '5H' },
	// 	{ nama: 'Adila', kelas: '5J' },
	// 	{ nama: 'Rahshanda Hameeda', kelas: '5J' },
	// 	{ nama: 'Salsabila Zahidia Az-zahra', kelas: '5J' },
	// 	{ nama: 'Amelia Sawa', kelas: '5J' },
	// 	{ nama: 'Umma Safayati', kelas: '5J' },
	// 	{ nama: 'Febrina Putri Harahap', kelas: '5K' },
	// 	{ nama: 'Humaira Hafizhah Qurotuaini', kelas: '5K' },
	// 	{ nama: 'Naila Indana Zulfa', kelas: '5K' },
	// 	{ nama: 'Shafa Azkiya Khabib', kelas: '5K' },
	// 	{ nama: 'Wafa Umniati', kelas: '5K' },
	// 	{ nama: 'Shafa Intsia Moksen R', kelas: '5K' },
	// 	{ nama: 'Khanza Amirah', kelas: '5L' },
	// 	{ nama: 'Atmim Bernadine Al Ghozi', kelas: '5L' },
	// 	{ nama: 'Briliana Aulia Rahmah', kelas: '5L' }
	// ];

	const bis1 = [
		{ nama: 'Aisyah Nur Faizah', kelas: '2B' },
		{ nama: 'Aida Fithrotun Nisa', kelas: '2B' },
		{ nama: 'Carissa Salsabila Firdausi', kelas: '2C' },
		{ nama: 'Cralovna Beleeza Nobel', kelas: '2D' },
		{ nama: 'Sheeva Falisha Salsabila', kelas: '2D' },
		{ nama: 'Hana Khairunnisa', kelas: '2D' },
		{ nama: 'Samratu Vista Maulidiyah', kelas: '2E' },
		{ nama: 'Schatzy Reybulan Amirah', kelas: '2E' },
		{ nama: 'Airin Rafiqoh', kelas: '2E' },
		{ nama: 'Beryl Ayu Ramadanti', kelas: '2F' },
		{ nama: 'Cheryl Mutia Anezka Hadyana', kelas: '2F' },
		{ nama: 'Chayara Elfa Mukhbita', kelas: '2G' },
		{ nama: 'Janeeta Naeva Fayyola', kelas: '2G' },
		{ nama: 'Aisyah Achmad', kelas: '4B' },
		{ nama: 'Nadini Ramadhani', kelas: '4B' },
		{ nama: 'Aliyah Alfina', kelas: '4B' },
		{ nama: 'Chintya Kusumawardhani', kelas: '4B' },
		{ nama: "Iftitah Ilmannafi'ah", kelas: '4B' },
		{ nama: 'Safina Almira Raikhana', kelas: '4C' },
		{ nama: 'Dzanira Deefikha', kelas: '4D' },
		{ nama: 'Almira S.F. Shaleh', kelas: '4D' },
		{ nama: 'Tharya Alesha Rizwana', kelas: '4E' },
		{ nama: 'Revanaura Riifiandita', kelas: '4E' },
		{ nama: 'Aulia Azzahra Arnymifcha', kelas: '4F' },
		{ nama: "Zahratusshita'", kelas: '4F' },
		{ nama: 'Freya Arumi Yusman', kelas: '4F' },
		{ nama: 'Niza Amirah Yasmin Siregar', kelas: '4F' },
		{ nama: 'Sabrina Manathiq Hailalah', kelas: '4G' },
		{ nama: 'Afsa Furayah Mahdiya', kelas: '5C' },
		{ nama: 'Halimah Ayu Fitriyah', kelas: '5C' },
		{ nama: 'Rana Angelia Kusuma', kelas: '5C' },
		{ nama: 'Sulasi Ifani', kelas: '5C' },
		{ nama: 'Nailah Salsabila', kelas: '5C' },
		{ nama: 'Aisyah Kayla Azzahra', kelas: '5D' },
		{ nama: 'Nayla Rahma Agustina', kelas: '5D' },
		{ nama: 'Syifa Salsabila Pratiwi', kelas: '5D' },
		{ nama: 'Azkiya Nadia', kelas: '5E' },
		{ nama: 'Febrina Cita Kartika Hartono', kelas: '5F' },
		{ nama: 'Putri Aisyah Nur Rahmawati', kelas: '5F' },
		{ nama: 'Inayah Quratul', kelas: '5F' },
		{ nama: 'Mutiara Iftinan Hartono Putri', kelas: '5F' },
		{ nama: 'Assyfaa Mayzaputri Aldiniansyah Muslich', kelas: '5I' },
		{ nama: 'Kharisma Alica Dewanti', kelas: '5I' },
		{ nama: 'Adila', kelas: '5J' },
		{ nama: 'Rahshanda Hameeda', kelas: '5J' },
		{ nama: 'Salsabila Zahidia Az-zahra', kelas: '5J' },
		{ nama: 'Amelia Sawa', kelas: '5J' },
		{ nama: 'Febrina Putri Harahap', kelas: '5K' },
		{ nama: 'Wafa Umniati', kelas: '5K' },
		{ nama: 'Shafa Intsia Moksen R', kelas: '5K' },
		{ nama: 'Naila Indana Zulfa', kelas: '5K' },
		{ nama: 'Atmim Bernadine Al Ghozi', kelas: '5L' }
	];

	const bis2 = [
		{ nama: "Assyifa' Aulia Azzahro", kelas: '1B' },
		{ nama: 'Dania Mu Saqeena Caniago', kelas: '1B' },
		{ nama: 'Haifa Nafiza Adlina', kelas: '1B' },
		{ nama: 'Khairina Filza Ghassani', kelas: '1B' },
		{ nama: 'Baiq Aisyah Abusemah', kelas: '1C' },
		{ nama: 'Bilgies Nabilla Istiqomah', kelas: '1D' },
		{ nama: 'Berliana Dwi Diandra', kelas: '1E' },
		{ nama: 'Vania Fauzhara Putri', kelas: '1E' },
		{ nama: 'Ranma Mikhaila', kelas: '1F' },
		{ nama: "Aisyah Zuhrotun Nisa'", kelas: '1intB' },
		{ nama: 'Naila Abia Ali', kelas: '3B' },
		{ nama: 'Lovely Beauty Fardianka', kelas: '3C' },
		{ nama: 'Azzalea Banni Hasya', kelas: '3D' },
		{ nama: 'Nabila Irwansyah', kelas: '3E' },
		{ nama: 'Reisya Nafisah Kamiliya Mansyur', kelas: '3F' },
		{ nama: 'Syifa Khairunnissa', kelas: '3F' },
		{ nama: 'Rahmania Radjabi Siregar', kelas: '3G' },
		{ nama: 'Sabrina Alysa Putri', kelas: '3G' },
		{ nama: 'Amirah Azzahrah', kelas: '3G' },
		{ nama: 'Nazhira Shaffiya Nur Ilham', kelas: '3G' },
		{ nama: 'Azzahra Sayyidah Darmawanty', kelas: '5B' },
		{ nama: 'Fatimah Zahra Febriana', kelas: '5B' },
		{ nama: 'Jihanur Rifdah Zahiroh', kelas: '5E' },
		{ nama: 'Nalia Intan Fahrani', kelas: '5E' },
		{ nama: 'Rosinda Nahda Mashita', kelas: '5G' },
		{ nama: 'Donata Ratna Faridah', kelas: '5H' },
		{ nama: 'Najwa Nur Aini', kelas: '5H' }
	];
</script>

<div class="flex w-full max-w-4xl flex-col items-center">
	<div
		class="mb-4 flex w-full items-center justify-center gap-2 px-5 pt-6 lg:mb-5 lg:gap-5 lg:pt-10 dark:text-white"
	>
		<School class="h-20 w-20 lg:h-30 lg:w-30" />
		<div class="text-center font-heading text-xl font-bold uppercase lg:text-3xl">
			<h1>PMDG Putri</h1>
			<h1>Kampus Tiga</h1>
		</div>
	</div>
	<div class="flex w-full flex-col gap-5">
		<div class="flex flex-col gap-2">
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
			<div class="flex flex-col gap-2">
				<div>
					<h3 class="text-center font-heading text-lg font-bold lg:text-xl dark:text-white">
						Absen Bis 2
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
						{#each bis2 as b, i}
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
</div>
