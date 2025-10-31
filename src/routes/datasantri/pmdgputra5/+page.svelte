<script lang="ts">
	import { School } from 'lucide-svelte';

	// const bis1 = [
	// 	{ nama: 'Maulana Ghautha Permana', kelas: '1B' },
	// 	{ nama: 'Hammam Abdullah', kelas: '1B' },
	// 	{ nama: 'Putra Maulana Mochtar', kelas: '1C' },
	// 	{ nama: 'Jalala Ardian Movic', kelas: '1D' },
	// 	{ nama: 'Bevann Athaillah Junyus Tampubolon', kelas: '1intB' },
	// 	{ nama: 'Fifthra Syarif Fazaul Zein', kelas: '2B' },
	// 	{ nama: 'Muhammad Kaffah Insani', kelas: '2B' },
	// 	{ nama: 'Damar Lutfi', kelas: '2C' },
	// 	{ nama: 'Pangeran Israj Ahmad', kelas: '2C' },
	// 	{ nama: 'Muhammad Dzulfan Fachri', kelas: '2C' },
	// 	{ nama: 'Rafif Danendra Catur Prasetyo', kelas: '2D' },
	// 	{ nama: 'Rahmat Alamsyah Wijaya', kelas: '2D' },
	// 	{ nama: 'Muhammad Naala Fauzan Ibrahim', kelas: '2D' },
	// 	{ nama: 'Fakhrun Ahsan Hidayatullah', kelas: '2D' },
	// 	{ nama: 'Thalhah Haidar Taraya', kelas: '2D' },
	// 	{ nama: 'Afifur Rahman', kelas: '2E' },
	// 	{ nama: 'Mustofa Khoirul Aziz', kelas: '2E' },
	// 	{ nama: 'Muhammad Hasan Al - Jufri', kelas: '2E' },
	// 	{ nama: 'Hilmi Haruna Aziz', kelas: '2F' },
	// 	{ nama: 'Ramadhan Abiyyu Huda', kelas: '2F' },
	// 	{ nama: 'Zahir Qutby Djauhari', kelas: '2F' },
	// 	{ nama: 'Sultan Rafiansyah Al Azhar', kelas: '2F' },
	// 	{ nama: 'Raffi Al Kautsar', kelas: '2F' },
	// 	{ nama: 'Albab Yusuf Al Khadafi', kelas: '2F' },
	// 	{ nama: 'Yonathan Oktaviano Yusuf', kelas: '3IntC' },
	// 	{ nama: 'Muhammad Rafi', kelas: '3IntC' },
	// 	{ nama: 'Abdan Ruhama', kelas: '3IntC' },
	// 	{ nama: 'Muhammad Andhika Raditya Pratama', kelas: '5B' },
	// 	{ nama: 'Alvino Azka Putra Lesmana', kelas: '5C' },
	// 	{ nama: 'Raditya Putra Romansya', kelas: '5D' },
	// 	{ nama: 'Hakan Ghaisani Izyan Rabar Muhammad', kelas: '5D' },
	// 	{ nama: 'Sere Abdullah Amry', kelas: '5D' },
	// 	{ nama: 'Septian Anugerah Ramadhan', kelas: '5D' },
	// 	{ nama: 'Muh. Rahul Asyam Haryanto Dm', kelas: '5D' },
	// 	{ nama: 'Muhammad Wildan Multazam', kelas: '5D' },
	// 	{ nama: 'Abdullah Zaki Badrudin', kelas: '5D' },
	// 	{ nama: 'Moh. Ikhsan Khoirullah', kelas: '5E' },
	// 	{ nama: 'Dziaulhaq Ibam Chaniago', kelas: '5E' },
	// 	{ nama: 'Muhammad Ilham Makmur Patiroi', kelas: '5E' },
	// 	{ nama: 'M.Daffa Abd Razzaq', kelas: '5F' },
	// 	{ nama: 'Dzaki Fikriyya Ihsan', kelas: '5F' },
	// 	{ nama: 'Faathir Ibnu Majid', kelas: '5F' }
	// ];

	// const bis2 = [
	// 	{ nama: 'Felix Basil Basyiruddin Rahman', kelas: '3B' },
	// 	{ nama: 'Muhammad Zaidan Alfarizi', kelas: '3C' },
	// 	{ nama: 'Abiy El Choir', kelas: '3D' },
	// 	{ nama: 'Putra Rafi Aradhana', kelas: '3D' },
	// 	{ nama: 'Ahmad Nabil Ahdan Almafaza', kelas: '3D' },
	// 	{ nama: 'Ahmad Hajjan Elvansuri', kelas: '3D' },
	// 	{ nama: 'Aqilla Ahmad Aktava', kelas: '3D' },
	// 	{ nama: 'Naufal Erlangga Putra Wardhana', kelas: '3E' },
	// 	{ nama: 'Kheemal Satrio Asyhari', kelas: '3E' },
	// 	{ nama: 'Moreno Aditya Ramadhan', kelas: '3E' },
	// 	{ nama: 'Muhammad Azzam Rahadyan Syaifudin', kelas: '3E' },
	// 	{ nama: 'Elzachwan M Emery', kelas: '3E' },
	// 	{ nama: 'Zakhi Havidz Safaraz', kelas: '3E' },
	// 	{ nama: 'Fairuz Akhdan Al Qisthi', kelas: '4B' },
	// 	{ nama: 'Hasta Barata Monarki', kelas: '4B' },
	// 	{ nama: 'Aleev Ahmad Auva', kelas: '4B' },
	// 	{ nama: 'Dzaka Reza Aradhana Taraka Putra', kelas: '4B' },
	// 	{ nama: 'Muhammad Zacky Ramadhan Albrusli', kelas: '4B' },
	// 	{ nama: 'Zidain Azhar Saputra', kelas: '4C' },
	// 	{ nama: 'Ibrahim Ali Akbar', kelas: '4D' },
	// 	{ nama: 'Muhammad Surya Dharma Ali', kelas: '4D' },
	// 	{ nama: 'Muhammad Asyroful Anaam', kelas: '4D' },
	// 	{ nama: 'Muhamad Zaidan Azzamy Syauqi', kelas: '4E' },
	// 	{ nama: 'Dawim Assidiqi', kelas: '4E' },
	// 	{ nama: 'muhammad  Adi Rifqi Wirajaya', kelas: '4E' },
	// 	{ nama: 'Abdul Rosyid', kelas: '4E' },
	// 	{ nama: 'Wahyu Adriyanto', kelas: '4E' },
	// 	{ nama: 'Muhammad Yahya Subhan', kelas: '4E' },
	// 	{ nama: 'Muhammad Zaki', kelas: '5G' },
	// 	{ nama: 'Syaikh Ahmad Azzudais Mukhtar', kelas: '5H' },
	// 	{ nama: 'Faza Kahfi Alfattah', kelas: '5H' },
	// 	{ nama: 'Muhammad Habib Al Hakim', kelas: '5H' },
	// 	{ nama: 'Habibunnafi Alfahish', kelas: '5H' },
	// 	{ nama: 'Fajri Rizqy Radhitya Ardhianto', kelas: '5H' },
	// 	{ nama: 'Abdillah Azam Perlintan', kelas: '5H' },
	// 	{ nama: 'Harits Fatkhulloh', kelas: '5H' },
	// 	{ nama: 'Fiqih Tanjung', kelas: '5I' },
	// 	{ nama: 'Lintang Manjer Kawuryan', kelas: '5I' },
	// 	{ nama: 'Muhammad Faris', kelas: '5J' },
	// 	{ nama: 'Benhauser Bhirawa Supriyanto Putra', kelas: '5J' },
	// 	{ nama: 'Raihan Putra Maulana', kelas: '5J' },
	// 	{ nama: 'Althaf Achmad Fardan Al Fawwaz', kelas: '5J' },
	// 	{ nama: 'Irfan Nur Rahman', kelas: '5J' }
	// ];

	const bis1 = [
		{ nama: 'Maulana Ghautha Permana', kelas: '1B' },
		{ nama: 'Putra Maulana Mochtar', kelas: '1C' },
		{ nama: 'Jalala Ardian Movic', kelas: '1D' },
		{ nama: 'Bevann Athaillah Junyus Tampubolon', kelas: '1intB' },
		{ nama: 'Fifthra Syarif Fazaul Zein', kelas: '2B' },
		{ nama: 'Muhammad Kaffah Insani', kelas: '2B' },
		{ nama: 'Damar Lutfi', kelas: '2C' },
		{ nama: 'Pangeran Israj Ahmad', kelas: '2C' },
		{ nama: 'Muhammad Dzulfan Fachri', kelas: '2C' },
		{ nama: 'Rafif Danendra Catur Prasetyo', kelas: '2D' },
		{ nama: 'Rahmat Alamsyah Wijaya', kelas: '2D' },
		{ nama: 'Muhammad Naala Fauzan Ibrahim', kelas: '2D' },
		{ nama: 'Fakhrun Ahsan Hidayatullah', kelas: '2D' },
		{ nama: 'Afifur Rahman', kelas: '2E' },
		{ nama: 'Mustofa Khoirul Aziz', kelas: '2E' },
		{ nama: 'Muhammad Hasan Al - Jufri', kelas: '2E' },
		{ nama: 'Hilmi Haruna Aziz', kelas: '2F' },
		{ nama: 'Ramadhan Abiyyu Huda', kelas: '2F' },
		{ nama: 'Zahir Qutby Djauhari', kelas: '2F' },
		{ nama: 'Raffi Al Kautsar', kelas: '2F' },
		{ nama: 'Albab Yusuf Al Khadafi', kelas: '2F' },
		{ nama: 'Yonathan Oktaviano Yusuf', kelas: '3IntC' },
		{ nama: 'Muhammad Rafi', kelas: '3IntC' },
		{ nama: 'Abdan Ruhama', kelas: '3IntC' },
		{ nama: 'Muhammad Andhika Raditya Pratama', kelas: '5B' },
		{ nama: 'Raditya Putra Romansya', kelas: '5D' },
		{ nama: 'Hakan Ghaisani Izyan Rabar Muhammad', kelas: '5D' },
		{ nama: 'Sere Abdullah Amry', kelas: '5D' },
		{ nama: 'Septian Anugerah Ramadhan', kelas: '5D' },
		{ nama: 'Muh. Rahul Asyam Haryanto Dm', kelas: '5D' },
		{ nama: 'Muhammad Wildan Multazam', kelas: '5D' },
		{ nama: 'Abdullah Zaki Badrudin', kelas: '5D' },
		{ nama: 'Moh. Ikhsan khoirullah', kelas: '5E' },
		{ nama: 'Dziaulhaq Ibam Chaniago', kelas: '5E' },
		{ nama: 'Muhammad Ilham Makmur Patiroi', kelas: '5E' },
		{ nama: 'M.Daffa Abd Razzaq', kelas: '5F' },
		{ nama: 'Dzaki Fikriyya Ihsan', kelas: '5F' },
		{ nama: 'Faathir Ibnu Majid', kelas: '5F' },
		{ nama: 'Muhammad Zaki', kelas: '5G' },
		{ nama: 'Fajri Rizqy Radhitya Ardhianto', kelas: '5H' }
	];

	const bis2 = [
		{ nama: 'Felix Basil Basyiruddin Rahman', kelas: '3B' },
		{ nama: 'Muhammad Zaidan Alfarizi', kelas: '3C' },
		{ nama: 'Abiy El Choir', kelas: '3D' },
		{ nama: 'Putra Rafi Aradhana', kelas: '3D' },
		{ nama: 'Ahmad Nabil Ahdan Almafaza', kelas: '3D' },
		{ nama: 'Ahmad Hajjan Elvansuri', kelas: '3D' },
		{ nama: 'Naufal Erlangga Putra Wardhana', kelas: '3E' },
		{ nama: 'Kheemal Satrio Asyhari', kelas: '3E' },
		{ nama: 'Moreno Aditya Ramadhan', kelas: '3E' },
		{ nama: 'Elzachwan M Emery', kelas: '3E' },
		{ nama: 'Zakhi Havidz Safaraz', kelas: '3E' },
		{ nama: 'Fairuz Akhdan Al Qisthi', kelas: '4B' },
		{ nama: 'Hasta Barata Monarki', kelas: '4B' },
		{ nama: 'Aleev Ahmad Auva', kelas: '4B' },
		{ nama: 'Dzaka Reza Aradhana Taraka Putra', kelas: '4B' },
		{ nama: 'Muhammad Zacky Ramadhan Albrusli', kelas: '4B' },
		{ nama: 'Saif Abdullah Azzam', kelas: '4C' },
		{ nama: 'Zidain Azhar Saputra', kelas: '4C' },
		{ nama: 'Ibrahim Ali Akbar', kelas: '4D' },
		{ nama: 'Muhammad Surya Dharma Ali', kelas: '4D' },
		{ nama: 'Muhammad Asyroful Anaam', kelas: '4D' },
		{ nama: 'Muhamad Zaidan Azzamy Syauqi', kelas: '4E' },
		{ nama: 'Dawim Assidiqi', kelas: '4E' },
		{ nama: 'muhammad Adi Rifqi Wirajaya', kelas: '4E' },
		{ nama: 'Abdul Rosyid', kelas: '4E' },
		{ nama: 'Wahyu Adriyanto', kelas: '4E' },
		{ nama: 'Muhammad Yahya Subhan', kelas: '4E' },
		{ nama: 'Syaikh Ahmad Azzudais Mukhtar', kelas: '5H' },
		{ nama: 'Faza Kahfi Alfattah', kelas: '5H' },
		{ nama: 'Muhammad Habib Al Hakim', kelas: '5H' },
		{ nama: 'Habibunnafi Alfahish', kelas: '5H' },
		{ nama: 'Harits Fatkhulloh', kelas: '5H' },
		{ nama: 'Fiqih Tanjung', kelas: '5I' },
		{ nama: 'Lintang Manjer Kawuryan', kelas: '5I' },
		{ nama: 'Muhammad Faris', kelas: '5J' },
		{ nama: 'Benhauser Bhirawa Supriyanto Putra', kelas: '5J' },
		{ nama: 'Raihan Putra Maulana', kelas: '5J' },
		{ nama: 'Althaf Achmad Fardan Al Fawwaz', kelas: '5J' },
		{ nama: 'Irfan Nur Rahman', kelas: '5J' }
	];
</script>

<div class="flex w-full max-w-4xl flex-col items-center">
	<div
		class="mb-4 flex w-full items-center justify-center gap-2 px-5 pt-6 lg:mb-5 lg:gap-5 lg:pt-10 dark:text-white"
	>
		<School class="h-20 w-20 lg:h-30 lg:w-30" />
		<div class="text-center font-heading text-xl font-bold uppercase lg:text-3xl">
			<h1>PMDG Kampus</h1>
			<h1>Lima</h1>
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
