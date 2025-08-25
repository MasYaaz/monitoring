<script lang="ts">
	import { Bus } from 'lucide-svelte';

	const bis1 = [
		{ nama: 'Naufal Fajar Herawan', kelas: '1-B', asal: 'Surabaya' },
		{ nama: 'Khalifatullah Raush Muhammad Bagus Seto', kelas: '1-B', asal: 'Gresik' },
		{ nama: 'Muhammad Fikri Faiq Hidayat', kelas: '2-D', asal: 'Sidoarjo' },
		{ nama: 'Cendikia Fadhiil Anwar', kelas: '2-E', asal: 'Sidoarjo' },
		{ nama: 'Arrijalul Haq Dzulfikar Al Ghifari', kelas: '2-E', asal: 'Sidoarjo' },
		{ nama: 'Alfan Hadi Arifadillah', kelas: '2-E', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Kamal Musthofa', kelas: '2-E', asal: 'Gresik' },
		{ nama: 'Muhamad Chaesar Arifien', kelas: '2-F', asal: 'Sidoarjo' },
		{ nama: 'Sakha Javas Adhyasta', kelas: '2-F', asal: 'Gresik' },
		{ nama: 'Muhammad Pravin Shehzad Aryanto', kelas: '2-H', asal: 'Surabaya' },
		{ nama: 'Mumtaz Hanif', kelas: '2-H', asal: 'Gresik' },
		{ nama: 'Alverro Rizky Ariffa Yuwantoro', kelas: '2-H', asal: 'Gresik' },
		{ nama: 'Alif Novara Khumaidi', kelas: '3-B', asal: 'Tangerang Selatan' },
		{ nama: 'Muhammad Satria Yudha Patrama', kelas: '3-C', asal: 'Surabaya' },
		{ nama: 'Ahmad Eka Al Irsyad', kelas: '3-C', asal: 'Surabaya' },
		{ nama: 'Althafuddin Yafi Nursasi', kelas: '3-C', asal: 'Surabaya' },
		{ nama: "Yahya Syafi' Mukhtarom", kelas: '3-C', asal: 'Surabaya' },
		{ nama: 'Muhammad Faqiih Syaihan Hidayat', kelas: '3-C', asal: 'Karawang' },
		{ nama: 'Azzam Amiruddin', kelas: '3-C', asal: 'Jakarta' },
		{ nama: 'Meldika Abiyyu El- Rafif', kelas: '3-C', asal: 'Merangin' },
		{ nama: 'Reisyha Abrizam Daffa', kelas: '3-C', asal: 'Ambon' },
		{ nama: 'Ilham Nur Muiz Ramadhan', kelas: '3-D', asal: 'Cianjur' },
		{ nama: 'Revan Ali Adinata', kelas: '3-E', asal: 'Gresik' },
		{ nama: 'Muhammad Luthfi Sakhi Zaidan', kelas: '3-E', asal: 'Bekasi' },
		{ nama: 'Radhy Euwald Risalah', kelas: '3-F', asal: 'Kuala Lumpur' },
		{ nama: 'Muhammad Fauzan Al Fajri', kelas: '3-F', asal: 'Gresik' },
		{ nama: 'Riziq Rizaldi Alayya Rojana', kelas: '3-F', asal: 'Bekasi' },
		{ nama: 'Anelka Khalfani Izhariansyah', kelas: '3-F', asal: 'Semarang' },
		{ nama: 'Muh. Haikal Syaiful', kelas: '3-F', asal: 'Surabaya' },
		{ nama: 'Mohammed Fakhrie*', kelas: '3-G', asal: 'Madura' },
		{ nama: "Syathir'ali Muyassar Noor", kelas: '3-H', asal: 'Balikpapan' },
		{ nama: 'Akma Hanif Muwaffaq', kelas: '3-I', asal: 'Sidoarjo' },
		{ nama: 'Fawwaz Maulana Eltiens', kelas: '1 Int B', asal: 'Palangkaraya' },
		{ nama: 'Hanif Abdallah', kelas: '1 Int B', asal: 'Karimun' },
		{ nama: 'Rizqia Nashir Iskandar', kelas: '1 Int B', asal: 'Kotawaringin Timur' },
		{ nama: 'Muhammad Taufan Maulana Adelio', kelas: '5C', asal: 'Sidoarjo' },
		{ nama: 'Abd Wafi', kelas: '5C', asal: 'Pamekasan' },
		{ nama: 'Takhta Kencana Atha Syahraja', kelas: '5D', asal: 'Gresik' },
		{ nama: 'Arya Gadi Wiraraja Susilo', kelas: '5D', asal: 'Surabaya' },
		{ nama: 'Muhammad Karuna Maharishi', kelas: '5D', asal: 'Surabaya' },
		{ nama: 'Rizky Andika Aprilio', kelas: '5D', asal: 'Surabaya' },
		{ nama: 'Akhdan Zahira Ar Razani', kelas: '5D', asal: 'Sidoarjo' },
		{ nama: 'Ahmad Rafa Nashiri', kelas: '5D', asal: 'Gresik' },
		{ nama: 'Fazlul Haedar Suhandoko M', kelas: '5F', asal: 'Surabaya' },
		{ nama: 'Muhammad Abdillah Elqaukis Hendriky', kelas: '5G', asal: 'Gresik' },
		{ nama: 'Setia Budhi', kelas: '5G', asal: 'Sampang' }
	];

	const bis2 = [
		{ nama: 'M. Idham Rizal Bani Albar', kelas: '3-J', asal: 'Sidoarjo' },
		{ nama: 'Kaysan Nawfal Ali*', kelas: '3-J', asal: 'Bekasi' },
		{ nama: 'Muhammad Fauzan Yusri', kelas: '3-J', asal: 'Gowa' },
		{ nama: 'Aldin Nafis Wijaya', kelas: '3 Int B', asal: 'Bandung' },
		{ nama: 'Hafiz Ibnu Hidayat', kelas: '3 Int B', asal: 'Sukabumi' },
		{ nama: 'M. Fahreza Dzikrillah Al Hadi', kelas: '3 Int B', asal: 'Sidoarjo' },
		{ nama: 'Raihan Ahmad Al-fajr', kelas: '3 Int C', asal: 'Sidoarjo' },
		{ nama: 'Khalil Azwan Attala', kelas: '3 Int C', asal: 'Landak' },
		{ nama: 'Nabil Kurnia Ramadhan', kelas: '3 Int C', asal: 'Kotawaringin Timur' },
		{ nama: 'Aslam Rafif Muzakki', kelas: '3 Int C', asal: 'Depok' },
		{ nama: 'Adwa Ismail Arasyah', kelas: '4-B', asal: 'Tuban' },
		{ nama: 'Hafizhil Hikam Hanafi', kelas: '4-B', asal: 'Surabaya' },
		{ nama: 'Mujibur Rahman Asy Syazani', kelas: '4-C', asal: 'Gresik' },
		{ nama: 'Ahmad Rifqy Azam', kelas: '4-D', asal: 'Sidoarjo' },
		{ nama: 'Nafrio Ahmad Al Farisi', kelas: '4-D', asal: 'Surabaya' },
		{ nama: 'Azha Zadani Ahmad', kelas: '4-D', asal: 'Sidoarjo' },
		{ nama: 'Abdul Ghani Fadli', kelas: '4-D', asal: 'Sidoarjo' },
		{ nama: 'Aldo Asyam Bakhri', kelas: '4-E', asal: 'Sidoarjo' },
		{ nama: 'Afiqal Robbani Pawono', kelas: '4-E', asal: 'Sidoarjo' },
		{ nama: 'Marvel Azaria Sheva Putra', kelas: '4-E', asal: 'Surabaya' },
		{ nama: 'Pradja Najmil Fath', kelas: '4-E', asal: 'Tabalong' },
		{ nama: 'Agha Zain Pratama', kelas: '4-F', asal: 'Sidoarjo' },
		{ nama: 'Mohammad Rakan Naufal Haqqi', kelas: '4-F', asal: 'Surabaya' },
		{ nama: 'Ahmad Zidane Fahrizy', kelas: '4-F', asal: 'Surabaya' },
		{ nama: 'Al Fath Zain', kelas: '4-F', asal: 'Gresik' },
		{ nama: 'Moch Fadhlur Rohman', kelas: '4-G', asal: 'Surabaya' },
		{ nama: 'Rivalino Al Ghozali Pristi Adelard', kelas: '4-H', asal: 'Gresik' },
		{ nama: 'Azfar Rasydan Althaf', kelas: '4-H', asal: 'Surabaya' },
		{ nama: 'Fadhlan Rafi Khoirul Azam', kelas: '4-H', asal: 'Surabaya' },
		{ nama: 'Muhammad Shohibul Kahfi', kelas: '4-I', asal: 'Gresik' },
		{ nama: 'Muhammad Fawaidul Anam A', kelas: '4-J', asal: 'Surabaya' },
		{ nama: 'Muhammad Nur Fikri Hidayat', kelas: '5H', asal: 'Surabaya' },
		{ nama: 'Muhammad Hafidh Al Hakim', kelas: '5H', asal: 'Sidoarjo' },
		{ nama: 'Mochamad Hafizh Azhar Afryan', kelas: '5H', asal: 'Surabaya' },
		{ nama: 'Moh Rian Primadi Aula', kelas: '5H', asal: 'Gresik' },
		{ nama: 'Natsir Al-Irsyad Fizadinajah', kelas: '5H', asal: 'Metro' },
		{ nama: 'Ibnu Abbaz Tirta Brata', kelas: '5I', asal: 'Sidoarjo' },
		{ nama: 'Dzira Muhammad Falani', kelas: '5I', asal: 'Sukabumi' },
		{ nama: 'Muhammad Abdullah Syukri', kelas: '5I', asal: 'Lampung Tengah' },
		{ nama: 'Bayu Anggoro Proboyoni', kelas: '5J', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Rafi Al Ghiffari', kelas: '5J', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Aufa Shodiq', kelas: '5K', asal: 'Surabaya' },
		{ nama: 'Nur Akmaluddin Wijoyo', kelas: '5K', asal: 'Tuban' },
		{ nama: 'Muhammad Zai Khairullah', kelas: '5K', asal: 'Surabaya' },
		{ nama: 'Anim Aliwil Maulana', kelas: '5L', asal: 'Gresik' },
		{ nama: 'Sultan Muhammad Khalid', kelas: '5L', asal: 'Surabaya' },
		{ nama: 'Muhamad Akmal Sahet Al-madfa', kelas: '5E', asal: 'Bekasi' }
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
