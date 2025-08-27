<script lang="ts">
	import { Bus } from 'lucide-svelte';

	const bis1 = [
		{ nama: 'Rizvana Arifa Putri', kelas: '1-B' },
		{ nama: 'Nayla Asyarifah Dewara', kelas: '1-B' },
		{ nama: 'Rawnie Janeeta Hanina', kelas: '1-C' },
		{ nama: 'Ayatul Husna Az Dzikra', kelas: '1-D' },
		{ nama: 'Raisha Haziqah Syaza', kelas: '2D' },
		{ nama: 'Annisa Nurusysyifa Putri Halim Setiadi', kelas: '2G' },
		{ nama: 'Ayudia Shifa', kelas: '2H' },
		{ nama: 'Khairunnisa Farin Zayanna', kelas: '2I' },
		{ nama: 'Fayyaza Azwa Fatikul Putri', kelas: '2K' },
		{ nama: 'Mikhaela Aunara', kelas: '3D' },
		{ nama: 'Faathimah Nafiisah', kelas: '3D' },
		{ nama: 'Mazaya Zayzava Nury', kelas: '3G' },
		{ nama: 'Keisha Salsabila Putri Almuna', kelas: '3H' },
		{ nama: 'Naira Oktaryza Syaifullah', kelas: '3J' },
		{ nama: 'Yasmin Amirah Islami Nurrananda', kelas: '3 INT D' },
		{ nama: 'Salwa Salsabila Afif', kelas: '4B' },
		{ nama: 'Adinda Rozaina', kelas: '4B' },
		{ nama: 'Rafeyfa Asyla Putri', kelas: '4C' },
		{ nama: 'Noumeera Aghesta Nasya Khaeerani', kelas: '4D' },
		{ nama: 'Arlin Salsabila', kelas: '4E' },
		{ nama: 'Afifah Husna', kelas: '4G' },
		{ nama: 'Ainya Rahayu Widyaningtyas', kelas: '4H' },
		{ nama: "Salma Al-Mu'tarofah", kelas: '4I' },
		{ nama: 'Syifa Dzakiyyah', kelas: '4I' },
		{ nama: 'Faiza Dian Ihsani', kelas: '5B' },
		{ nama: 'Lunetta Hayu Ramadhani', kelas: '5C' },
		{ nama: "Hasniyah Tis'ah Asyar", kelas: '5C' },
		{ nama: 'Tsabita Rachmi Lailafandi', kelas: '5D' },
		{ nama: 'Syarifah Shinwan', kelas: '5G' },
		{ nama: 'Nayla Ghanim', kelas: '5G' },
		{ nama: 'Meyneta Rahayu Eka Putri', kelas: '5G' },
		{ nama: 'Nazwa Alvina Rahmania', kelas: '5H' },
		{ nama: 'Fairuz Maulidya Windy Almumtaz', kelas: '5I' },
		{ nama: 'Putri Laila Zulfa', kelas: '5J' },
		{ nama: 'Kevianya Nur Rahmat', kelas: '5J' },
		{ nama: 'Kirana Rarasaty Putri Diargo', kelas: '5K' },
		{ nama: 'Aisyah Zia Azhari', kelas: '5K' },
		{ nama: 'Aliya Mumtaza', kelas: '5L' },
		{ nama: 'Nafisa Khumairah Yusuf', kelas: '5L' },
		{ nama: 'Ukhti Rizki Maula Izzati', kelas: '5L' },
		{ nama: 'Nailah Nuril', kelas: '5M' },
		{ nama: 'Aisyah Amalulhaq', kelas: '5M' },
		{ nama: "Annisa Qurrata A'yun", kelas: '5M' },
		{ nama: 'Brillianty Diva Alfina', kelas: '5M' },
		{ nama: 'Navilillah Vanda', kelas: '5O' },
		{ nama: 'Anggita Alvaretta', kelas: '5O' },
		{ nama: 'Malta Adri', kelas: '5P' },
		{ nama: 'Alisha Tiarani Putri', kelas: '5I' },
		{ nama: 'Aulia Ramadhani Kusumawijaya', kelas: '5Q' }
	];

	const bis2 = [
		{ nama: 'Azzyafira Ardeillah Afandi', kelas: '1-B' },
		{ nama: 'Ghina Dhafinta', kelas: '1-B' },
		{ nama: 'Ayu Gytha Zahirah Althaf', kelas: '1-D' },
		{ nama: 'Rozzana Alina Putri Johary', kelas: '2B' },
		{ nama: 'Alya Maulidya Noor', kelas: '2D' },
		{ nama: 'Raniah Azzahra Putri', kelas: '2H' },
		{ nama: 'Alexandra Nasywa Anindya', kelas: '2H' },
		{ nama: 'Aabir Maulidiyah Kusyairi', kelas: '2I' },
		{ nama: 'Hasna Aqila Lathifatunnisa', kelas: '2K' },
		{ nama: 'Fildza Althafunnisa Arika', kelas: '3G' },
		{ nama: 'Khanza Fiorenza', kelas: '3D' },
		{ nama: 'Najwa Fitriani', kelas: '3G' },
		{ nama: 'Aisyah Al Askiya', kelas: '3G' },
		{ nama: "Robi'ah Al-adawiyyah", kelas: '3J' },
		{ nama: 'Aisha Mahya Shofi Santoso', kelas: '3 INT D' },
		{ nama: 'Nurul Hidayah Izzati', kelas: '3 INT D' },
		{ nama: 'Fahdia Asfarauzia Asfandi', kelas: '4B' },
		{ nama: "Safira Qurrotu'ainii Prasojdo", kelas: '4B' },
		{ nama: 'Hafidzhah Iftita Aulia', kelas: '4C' },
		{ nama: 'Nasa Ulhaq Ghania', kelas: '4D' },
		{ nama: 'Dinara Maulidaniyah', kelas: '4E' },
		{ nama: 'Talitha Nur Syifa Athaya', kelas: '4H' },
		{ nama: 'Atiqah Husna', kelas: '4H' },
		{ nama: 'Valencia Angel Aurellia Triatmaja', kelas: '4I' },
		{ nama: 'Denaraissa Putri Shalila', kelas: '5B' },
		{ nama: 'Amirah Carissa Fitri', kelas: '5B' },
		{ nama: 'Devi Nadhirotul Jannah', kelas: '5C' },
		{ nama: 'Rizqy Itsna Maulida', kelas: '5D' },
		{ nama: "Aulia Zafira Mas'ud", kelas: '5F' },
		{ nama: 'Faradila Rahma Zerlinda', kelas: '5G' },
		{ nama: 'Nahya Kamila Chabibi', kelas: '5G' },
		{ nama: 'Nadia Karunia Pangestu', kelas: '5H' },
		{ nama: 'Najwa Loffi Salsabila', kelas: '5H' },
		{ nama: 'Ahsanti Kamila Anggraeni', kelas: '5I' },
		{ nama: 'Naila Fathin Najah', kelas: '5J' },
		{ nama: 'Dinda Aurelia Azzahro', kelas: '5J' },
		{ nama: 'Retno Gemilang Daris Mustika', kelas: '5K' },
		{ nama: 'Hafsah Al Hanun', kelas: '5K' },
		{ nama: 'Nafisha Fajri Dzikra Mahdya', kelas: '5L' },
		{ nama: 'Raya Astaghisya Henriana', kelas: '5L' },
		{ nama: 'Kaffa Aida Shofa', kelas: '5M' },
		{ nama: 'Ramiza Alya', kelas: '5M' },
		{ nama: 'Siti Fathimah Putri Ardiansyah', kelas: '5M' },
		{ nama: 'Zayyan Syaikhoh Nahdah', kelas: '5M' },
		{ nama: 'Sulma Zakiyatul Qalbi', kelas: '5N' },
		{ nama: 'Alyaa Nabiilah Hariani', kelas: '5O' },
		{ nama: 'Aliyah Azzahra Arieanti', kelas: '5O' },
		{ nama: 'Gayatri Pramesita Harsanto', kelas: '5P' }
	];
</script>

<main class="flex items-center px-5 md:px-8 lg:px-12 xl:px-24 dark:bg-black">
	<div class="flex min-h-screen w-full flex-col items-center py-5">
		<div class="flex w-full max-w-4xl flex-col items-center">
			<div
				class="flex w-full items-center justify-center gap-2 px-5 pt-6 lg:mb-5 lg:gap-5 lg:pt-10 dark:text-white"
			>
				<Bus class="h-20 w-20 lg:h-30 lg:w-30" />
				<div class="text-center font-heading text-xl font-bold uppercase lg:text-3xl">
					<h1>Jadwal</h1>
					<h1>Kedatangan</h1>
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
</main>
