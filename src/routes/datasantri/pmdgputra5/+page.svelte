<script lang="ts">
	import { Bus } from 'lucide-svelte';

	let bis1 = [
		{ nama: 'Maulana Ghautha Permana', kelas: '1B', asal: 'Sidoarjo' },
		{ nama: 'Hammam Abdullah', kelas: '1B', asal: 'Sidoarjo' },
		{ nama: 'Putra Maulana Mochtar', kelas: '1C', asal: 'Bangkalan' },
		{ nama: 'Jalala Ardian Movic', kelas: '1D', asal: 'Sampang' },
		{ nama: 'Bevann Athaillah Junyus Tampubolon', kelas: '1intB', asal: 'Surabaya' },
		{ nama: 'Fifthra Syarif Fazaul Zein', kelas: '2B', asal: 'Surabaya' },
		{ nama: 'Muhammad Kaffah Insani', kelas: '2B', asal: 'Surabaya' },
		{ nama: 'Damar Lutfi', kelas: '2C', asal: 'Surabaya' },
		{ nama: 'Pangeran Israj Ahmad', kelas: '2C', asal: 'Surabaya' },
		{ nama: 'Muhammad Dzulfan Fachri', kelas: '2C', asal: 'Sidoarjo' },
		{ nama: 'Rafif Danendra Catur Prasetyo', kelas: '2D', asal: 'Sidoarjo' },
		{ nama: 'Rahmat Alamsyah Wijaya', kelas: '2D', asal: 'Surabaya' },
		{ nama: 'Muhammad Naala Fauzan Ibrahim', kelas: '2D', asal: 'Gresik' },
		{ nama: 'Fakhrun Ahsan Hidayatullah', kelas: '2D', asal: 'Sidoarjo' },
		{ nama: 'Thalhah Haidar Taraya', kelas: '2D', asal: 'Surabaya' },
		{ nama: 'Afifur Rahman', kelas: '2E', asal: 'Bangkalan' },
		{ nama: 'Mustofa Khoirul Aziz', kelas: '2E', asal: 'Surabaya' },
		{ nama: 'Muhammad Hasan Al - Jufri', kelas: '2E', asal: 'Surabaya' },
		{ nama: 'Hilmi Haruna Aziz', kelas: '2F', asal: 'Sidoarjo' },
		{ nama: 'Ramadhan Abiyyu Huda', kelas: '2F', asal: 'Surabaya' },
		{ nama: 'Zahir Qutby Djauhari', kelas: '2F', asal: 'Surabaya' },
		{ nama: 'Sultan Rafiansyah Al Azhar', kelas: '2F', asal: 'Sidoarjo' },
		{ nama: 'Raffi Al Kautsar', kelas: '2F', asal: 'Bojonegoro' },
		{ nama: 'Albab Yusuf Al Khadafi', kelas: '2F', asal: 'Pasuruan' },
		{ nama: 'Yonathan Oktaviano Yusuf', kelas: '3IntC', asal: 'Surabaya' },
		{ nama: 'Muhammad Rafi', kelas: '3IntC', asal: 'Bengkulu' },
		{ nama: 'Abdan Ruhama', kelas: '3IntC', asal: 'Kutai Timur' },
		{ nama: 'Muhammad Andhika Raditya Pratama', kelas: '5B', asal: 'Sidoarjo' },
		{ nama: 'Alvino Azka Putra Lesmana', kelas: '5C', asal: 'Surabaya' },
		{ nama: 'Raditya Putra Romansya', kelas: '5D', asal: 'Surabaya' },
		{ nama: 'Hakan Ghaisani Izyan Rabar Muhammad', kelas: '5D', asal: 'Surabaya' },
		{ nama: 'Sere Abdullah Amry', kelas: '5D', asal: 'Sidoarjo' },
		{ nama: 'Septian Anugerah Ramadhan', kelas: '5D', asal: 'Denpasar' },
		{ nama: 'Muh. Rahul Asyam Haryanto Dm', kelas: '5D', asal: 'Makassar' },
		{ nama: 'Muhammad Wildan Multazam', kelas: '5D', asal: 'Surabaya' },
		{ nama: 'Abdullah Zaki Badrudin', kelas: '5D', asal: 'Jambi' },
		{ nama: 'Moh. Ikhsan Khoirullah', kelas: '5E', asal: 'Bangkalan' },
		{ nama: 'Dziaulhaq Ibam Chaniago', kelas: '5E', asal: 'Surabaya' },
		{ nama: 'Muhammad Ilham Makmur Patiroi', kelas: '5E', asal: 'Gresik' },
		{ nama: 'M.Daffa Abd Razzaq', kelas: '5F', asal: 'Surabaya' },
		{ nama: 'Dzaki Fikriyya Ihsan', kelas: '5F', asal: 'Surabaya' },
		{ nama: 'Faathir Ibnu Majid', kelas: '5F', asal: 'Sidoarjo' }
	];

	let bis2 = [
		{ nama: 'Felix Basil Basyiruddin Rahman', kelas: '3B', asal: 'Surabaya' },
		{ nama: 'Muhammad Zaidan Alfarizi', kelas: '3C', asal: 'Pasuruan' },
		{ nama: 'Abiy El Choir', kelas: '3D', asal: 'Sidoarjo' },
		{ nama: 'Putra Rafi Aradhana', kelas: '3D', asal: 'Gresik' },
		{ nama: 'Ahmad Nabil Ahdan Almafaza', kelas: '3D', asal: 'Sidoarjo' },
		{ nama: 'Ahmad Hajjan Elvansuri', kelas: '3D', asal: 'Surabaya' },
		{ nama: 'Aqilla Ahmad Aktava', kelas: '3D', asal: 'Sidoarjo' },
		{ nama: 'Naufal Erlangga Putra Wardhana', kelas: '3E', asal: 'Surabaya' },
		{ nama: 'Kheemal Satrio Asyhari', kelas: '3E', asal: 'Surabaya' },
		{ nama: 'Moreno Aditya Ramadhan', kelas: '3E', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Azzam Rahadyan Syaifudin', kelas: '3E', asal: 'Surabaya' },
		{ nama: 'Elzachwan M Emery', kelas: '3E', asal: 'Surabaya' },
		{ nama: 'Zakhi Havidz Safaraz', kelas: '3E', asal: 'Surabaya' },
		{ nama: 'Fairuz Akhdan Al Qisthi', kelas: '4B', asal: 'Sidoarjo' },
		{ nama: 'Hasta Barata Monarki', kelas: '4B', asal: 'Surabaya' },
		{ nama: 'Aleev Ahmad Auva', kelas: '4B', asal: 'Banjarnegara' },
		{ nama: 'Dzaka Reza Aradhana Taraka Putra', kelas: '4B', asal: 'Surabaya' },
		{ nama: 'Muhammad Zacky Ramadhan Albrusli', kelas: '4B', asal: 'Tangerang' },
		{ nama: 'Zidain Azhar Saputra', kelas: '4C', asal: 'Surabaya' },
		{ nama: 'Ibrahim Ali Akbar', kelas: '4D', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Surya Dharma Ali', kelas: '4D', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Asyroful Anaam', kelas: '4D', asal: 'Klaten' },
		{ nama: 'Muhamad Zaidan Azzamy Syauqi', kelas: '4E', asal: 'Bogor' },
		{ nama: 'Dawim Assidiqi', kelas: '4E', asal: 'Kampar' },
		{ nama: 'muhammad  Adi Rifqi Wirajaya', kelas: '4E', asal: 'Riau' },
		{ nama: 'Abdul Rosyid', kelas: '4E', asal: 'Jakarta Timur' },
		{ nama: 'Wahyu Adriyanto', kelas: '4E', asal: 'Surabaya' },
		{ nama: 'Muhammad Yahya Subhan', kelas: '4E', asal: 'Karanganyar' },
		{ nama: 'Muhammad Zaki', kelas: '5G', asal: 'Sidoarjo' },
		{ nama: 'Syaikh Ahmad Azzudais Mukhtar', kelas: '5H', asal: 'Sidoarjo' },
		{ nama: 'Faza Kahfi Alfattah', kelas: '5H', asal: 'Surabaya' },
		{ nama: 'Muhammad Habib Al Hakim', kelas: '5H', asal: 'Sidoarjo' },
		{ nama: 'Habibunnafi Alfahish', kelas: '5H', asal: 'Gresik' },
		{ nama: 'Fajri Rizqy Radhitya Ardhianto', kelas: '5H', asal: 'Surabaya' },
		{ nama: 'Abdillah Azam Perlintan', kelas: '5H', asal: 'Surabaya' },
		{ nama: 'Harits Fatkhulloh', kelas: '5H', asal: 'Sidoarjo' },
		{ nama: 'Fiqih Tanjung', kelas: '5I', asal: 'Gresik' },
		{ nama: 'Lintang Manjer Kawuryan', kelas: '5I', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Faris', kelas: '5J', asal: 'Surabaya' },
		{ nama: 'Benhauser Bhirawa Supriyanto Putra', kelas: '5J', asal: 'Sidoarjo' },
		{ nama: 'Raihan Putra Maulana', kelas: '5J', asal: 'Sidoarjo' },
		{ nama: 'Althaf Achmad Fardan Al Fawwaz', kelas: '5J', asal: 'Surabaya' },
		{ nama: 'Irfan Nur Rahman', kelas: '5J', asal: 'Surabaya' }
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
								<th class="py-1">Daerah</th>
							</tr>
						</thead>
						<tbody class="bg-gray-100 font-heading text-xs lg:text-base">
							{#each bis1 as b, i}
								<tr class="text-center">
									<td class="px-2 py-2">{i + 1}.</td>
									<td class="py-2 text-left">{b.nama}</td>
									<td class="px-1 py-2">{b.kelas}</td>
									<td class="px-1 py-2">{b.asal}</td>
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
								<th class="py-1">Daerah</th>
							</tr>
						</thead>
						<tbody class="bg-gray-100 font-heading text-xs lg:text-base">
							{#each bis2 as b, i}
								<tr class="text-center">
									<td class="px-2 py-2">{i + 1}.</td>
									<td class="py-2 text-left">{b.nama}</td>
									<td class="px-1 py-2">{b.kelas}</td>
									<td class="px-1 py-2">{b.asal}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</main>
