<script lang="ts">
	import { School } from 'lucide-svelte';

	// const bis1 = [
	// 	{ nama: 'Naufal Fajar Herawan', kelas: '1-B' },
	// 	{ nama: 'Khalifatullah Raush Muhammad Bagus Seto', kelas: '1-B' },
	// 	{ nama: 'Muhammad Fikri Faiq Hidayat', kelas: '2-D' },
	// 	{ nama: 'Cendikia Fadhiil Anwar', kelas: '2-E' },
	// 	{ nama: 'Arrijalul Haq Dzulfikar Al Ghifari', kelas: '2-E' },
	// 	{ nama: 'Alfan Hadi Arifadillah', kelas: '2-E' },
	// 	{ nama: 'Muhammad Kamal Musthofa', kelas: '2-E' },
	// 	{ nama: 'Muhamad Chaesar Arifien', kelas: '2-F' },
	// 	{ nama: 'Sakha Javas Adhyasta', kelas: '2-F' },
	// 	{ nama: 'Muhammad Pravin Shehzad Aryanto', kelas: '2-H' },
	// 	{ nama: 'Mumtaz Hanif', kelas: '2-H' },
	// 	{ nama: 'Alverro Rizky Ariffa Yuwantoro', kelas: '2-H' },
	// 	{ nama: 'Alif Novara Khumaidi', kelas: '3-B' },
	// 	{ nama: 'Muhammad Satria Yudha Patrama', kelas: '3-C' },
	// 	{ nama: 'Ahmad Eka Al Irsyad', kelas: '3-C' },
	// 	{ nama: 'Althafuddin Yafi Nursasi', kelas: '3-C' },
	// 	{ nama: "Yahya Syafi' Mukhtarom", kelas: '3-C' },
	// 	{ nama: 'Muhammad Faqiih Syaihan Hidayat', kelas: '3-C' },
	// 	{ nama: 'Azzam Amiruddin', kelas: '3-C' },
	// 	{ nama: 'Meldika Abiyyu El- Rafif', kelas: '3-C' },
	// 	{ nama: 'Reisyha Abrizam Daffa', kelas: '3-C' },
	// 	{ nama: 'Ilham Nur Muiz Ramadhan', kelas: '3-D' },
	// 	{ nama: 'Revan Ali Adinata', kelas: '3-E' },
	// 	{ nama: 'Muhammad Luthfi Sakhi Zaidan', kelas: '3-E' },
	// 	{ nama: 'Radhy Euwald Risalah', kelas: '3-F' },
	// 	{ nama: 'Muhammad Fauzan Al Fajri', kelas: '3-F' },
	// 	{ nama: 'Riziq Rizaldi Alayya Rojana', kelas: '3-F' },
	// 	{ nama: 'Anelka Khalfani Izhariansyah', kelas: '3-F' },
	// 	{ nama: 'Muh. Haikal Syaiful', kelas: '3-F' },
	// 	{ nama: 'Mohammed Fakhrie*', kelas: '3-G' },
	// 	{ nama: "Syathir'ali Muyassar Noor", kelas: '3-H' },
	// 	{ nama: 'Akma Hanif Muwaffaq', kelas: '3-I' },
	// 	{ nama: 'Fawwaz Maulana Eltiens', kelas: '1 Int B' },
	// 	{ nama: 'Hanif Abdallah', kelas: '1 Int B' },
	// 	{ nama: 'Rizqia Nashir Iskandar', kelas: '1 Int B' },
	// 	{ nama: 'Muhammad Taufan Maulana Adelio', kelas: '5C' },
	// 	{ nama: 'Abd Wafi', kelas: '5C' },
	// 	{ nama: 'Takhta Kencana Atha Syahraja', kelas: '5D' },
	// 	{ nama: 'Arya Gadi Wiraraja Susilo', kelas: '5D' },
	// 	{ nama: 'Muhammad Karuna Maharishi', kelas: '5D' },
	// 	{ nama: 'Rizky Andika Aprilio', kelas: '5D' },
	// 	{ nama: 'Akhdan Zahira Ar Razani', kelas: '5D' },
	// 	{ nama: 'Ahmad Rafa Nashiri', kelas: '5D' },
	// 	{ nama: 'Fazlul Haedar Suhandoko M', kelas: '5F' },
	// 	{ nama: 'Muhammad Abdillah Elqaukis Hendriky', kelas: '5G' },
	// 	{ nama: 'Setia Budhi', kelas: '5G' }
	// ];

	// const bis2 = [
	// 	{ nama: 'M. Idham Rizal Bani Albar', kelas: '3-J' },
	// 	{ nama: 'Kaysan Nawfal Ali*', kelas: '3-J' },
	// 	{ nama: 'Muhammad Fauzan Yusri', kelas: '3-J' },
	// 	{ nama: 'Aldin Nafis Wijaya', kelas: '3 Int B' },
	// 	{ nama: 'Hafiz Ibnu Hidayat', kelas: '3 Int B' },
	// 	{ nama: 'M. Fahreza Dzikrillah Al Hadi', kelas: '3 Int B' },
	// 	{ nama: 'Raihan Ahmad Al-fajr', kelas: '3 Int C' },
	// 	{ nama: 'Khalil Azwan Attala', kelas: '3 Int C' },
	// 	{ nama: 'Nabil Kurnia Ramadhan', kelas: '3 Int C' },
	// 	{ nama: 'Aslam Rafif Muzakki', kelas: '3 Int C' },
	// 	{ nama: 'Adwa Ismail Arasyah', kelas: '4-B' },
	// 	{ nama: 'Hafizhil Hikam Hanafi', kelas: '4-B' },
	// 	{ nama: 'Mujibur Rahman Asy Syazani', kelas: '4-C' },
	// 	{ nama: 'Ahmad Rifqy Azam', kelas: '4-D' },
	// 	{ nama: 'Nafrio Ahmad Al Farisi', kelas: '4-D' },
	// 	{ nama: 'Azha Zadani Ahmad', kelas: '4-D' },
	// 	{ nama: 'Abdul Ghani Fadli', kelas: '4-D' },
	// 	{ nama: 'Aldo Asyam Bakhri', kelas: '4-E' },
	// 	{ nama: 'Afiqal Robbani Pawono', kelas: '4-E' },
	// 	{ nama: 'Marvel Azaria Sheva Putra', kelas: '4-E' },
	// 	{ nama: 'Pradja Najmil Fath', kelas: '4-E' },
	// 	{ nama: 'Agha Zain Pratama', kelas: '4-F' },
	// 	{ nama: 'Mohammad Rakan Naufal Haqqi', kelas: '4-F' },
	// 	{ nama: 'Ahmad Zidane Fahrizy', kelas: '4-F' },
	// 	{ nama: 'Al Fath Zain', kelas: '4-F' },
	// 	{ nama: 'Moch Fadhlur Rohman', kelas: '4-G' },
	// 	{ nama: 'Rivalino Al Ghozali Pristi Adelard', kelas: '4-H' },
	// 	{ nama: 'Azfar Rasydan Althaf', kelas: '4-H' },
	// 	{ nama: 'Fadhlan Rafi Khoirul Azam', kelas: '4-H' },
	// 	{ nama: 'Muhammad Shohibul Kahfi', kelas: '4-I' },
	// 	{ nama: 'Muhammad Fawaidul Anam A', kelas: '4-J' },
	// 	{ nama: 'Muhammad Nur Fikri Hidayat', kelas: '5H' },
	// 	{ nama: 'Muhammad Hafidh Al Hakim', kelas: '5H' },
	// 	{ nama: 'Mochamad Hafizh Azhar Afryan', kelas: '5H' },
	// 	{ nama: 'Moh Rian Primadi Aula', kelas: '5H' },
	// 	{ nama: 'Natsir Al-Irsyad Fizadinajah', kelas: '5H' },
	// 	{ nama: 'Ibnu Abbaz Tirta Brata', kelas: '5I' },
	// 	{ nama: 'Dzira Muhammad Falani', kelas: '5I' },
	// 	{ nama: 'Muhammad Abdullah Syukri', kelas: '5I' },
	// 	{ nama: 'Bayu Anggoro Proboyoni', kelas: '5J' },
	// 	{ nama: 'Muhammad Rafi Al Ghiffari', kelas: '5J' },
	// 	{ nama: 'Muhammad Aufa Shodiq', kelas: '5K' },
	// 	{ nama: 'Nur Akmaluddin Wijoyo', kelas: '5K' },
	// 	{ nama: 'Muhammad Zai Khairullah', kelas: '5K' },
	// 	{ nama: 'Anim Aliwil Maulana', kelas: '5L' },
	// 	{ nama: 'Sultan Muhammad Khalid', kelas: '5L' },
	// 	{ nama: 'Muhamad Akmal Sahet Al-madfa', kelas: '5E' }
	// ];

	const bis1 = [
		{ nama: 'Naufal Fajar Herawan', kelas: '1-B' },
		{ nama: 'Khalifatullah Raush Muhammad Bagus Seto', kelas: '1-B' },
		{ nama: 'Muhammad Fikri Faiq Hidayat', kelas: '2-D' },
		{ nama: 'Cendikia Fadhiil Anwar', kelas: '2-E' },
		{ nama: 'Arrijalul Haq Dzulfikar Al Ghifari', kelas: '2-E' },
		{ nama: 'Alfan Hadi Arifadillah', kelas: '2-E' },
		{ nama: 'Muhammad Kamal Musthofa', kelas: '2-E' },
		{ nama: 'Muhamad Chaesar Arifien', kelas: '2-F' },
		{ nama: 'Muhammad Pravin Shehzad Aryanto', kelas: '2-H' },
		{ nama: 'Alverro Rizky Ariffa Yuwantoro', kelas: '2-H' },
		{ nama: 'Muhammad Satria Yudha Patrama', kelas: '3-C' },
		{ nama: 'Ahmad Eka Al Irsyad', kelas: '3-C' },
		{ nama: 'Althafuddin Yafi Nursasi', kelas: '3-C' },
		{ nama: "Yahya Syafi' Mukhtarom", kelas: '3-C' },
		{ nama: 'Azzam Amiruddin', kelas: '3-C' },
		{ nama: 'Reisyha Abrizam Daffa', kelas: '3-C' },
		{ nama: 'Ilham Nur Muiz Ramadhan', kelas: '3-D' },
		{ nama: 'Revan Ali Adinata', kelas: '3-E' },
		{ nama: 'Radhy Euwald Risalah', kelas: '3-F' },
		{ nama: 'Muhammad Fauzan Al Fajri', kelas: '3-F' },
		{ nama: 'Riziq Rizaldi Alayya Rojana', kelas: '3-F' },
		{ nama: 'Anelka Khalfani Izhariansyah', kelas: '3-F' },
		{ nama: 'Mohammed Fakhrie*', kelas: '3-G' },
		{ nama: 'Akma Hanif Muwaffaq', kelas: '3-I' },
		{ nama: 'Hanif Abdallah', kelas: '1 Int B' },
		{ nama: 'Rizqia Nashir Iskandar', kelas: '1 Int B' },
		{ nama: 'Aldin Nafis Wijaya', kelas: '3 Int B' },
		{ nama: 'Hafiz Ibnu Hidayat', kelas: '3 Int B' },
		{ nama: 'M. Fahreza Dzikrillah Al Hadi', kelas: '3 Int B' },
		{ nama: 'Raihan Ahmad Al-fajr', kelas: '3 Int C' },
		{ nama: 'Khalil Azwan Attala', kelas: '3 Int C' },
		{ nama: 'Nabil Kurnia Ramadhan', kelas: '3 Int C' },
		{ nama: 'Aslam Rafif Muzakki', kelas: '3 Int C' },
		{ nama: 'Abd Wafi', kelas: '5C' },
		{ nama: 'Takhta Kencana Atha Syahraja', kelas: '5D' },
		{ nama: 'Arya Gadi Wiraraja Susilo', kelas: '5D' },
		{ nama: 'Muhammad Karuna Maharishi', kelas: '5D' },
		{ nama: 'Rizky Andika Aprilio', kelas: '5D' },
		{ nama: 'Akhdan Zahira Ar Razani', kelas: '5D' },
		{ nama: 'Ahmad Rafa Nashiri', kelas: '5D' },
		{ nama: 'Fazlul Haedar Suhandoko M', kelas: '5F' },
		{ nama: 'Muhammad Abdillah Elqaukis Hendriky', kelas: '5G' },
		{ nama: 'Setia Budhi', kelas: '5G' }
	];

	const bis2 = [
		{ nama: 'M. Idham Rizal Bani Albar', kelas: '3-J' },
		{ nama: 'Kaysan Nawfal Ali*', kelas: '3-J' },
		{ nama: 'Muhammad Fauzan Yusri', kelas: '3-J' },
		{ nama: 'Adwa Ismail Arasyah', kelas: '4-B' },
		{ nama: 'Hafizhil Hikam Hanafi', kelas: '4-B' },
		{ nama: 'Mujibur Rahman Asy Syazani', kelas: '4-C' },
		{ nama: 'Ahmad Rifqy Azam', kelas: '4-D' },
		{ nama: 'Nafrio Ahmad Al Farisi', kelas: '4-D' },
		{ nama: 'Azha Zadani Ahmad', kelas: '4-D' },
		{ nama: 'Abdul Ghani Fadli', kelas: '4-D' },
		{ nama: 'Aldo Asyam Bakhri', kelas: '4-E' },
		{ nama: 'Afiqal Robbani Pawono', kelas: '4-E' },
		{ nama: 'Marvel Azaria Sheva Putra', kelas: '4-E' },
		{ nama: 'Pradja Najmil Fath', kelas: '4-E' },
		{ nama: 'Agha Zain Pratama', kelas: '4-F' },
		{ nama: 'Mohammad Rakan Naufal Haqqi', kelas: '4-F' },
		{ nama: 'Ahmad Zidane Fahrizy', kelas: '4-F' },
		{ nama: 'Al Fath Zain', kelas: '4-F' },
		{ nama: 'Moch Fadhlur Rohman', kelas: '4-G' },
		{ nama: 'Rivalino Al Ghozali Pristi Adelard', kelas: '4-H' },
		{ nama: 'Azfar Rasydan Althaf', kelas: '4-H' },
		{ nama: 'Fadhlan Rafi Khoirul Azam', kelas: '4-H' },
		{ nama: 'Muhammad Shohibul Kahfi', kelas: '4-I' },
		{ nama: 'Muhammad Fawaidul Anam A', kelas: '4-J' },
		{ nama: 'Muhammad Nur Fikri Hidayat', kelas: '5H' },
		{ nama: 'Muhammad Hafidh Al Hakim', kelas: '5H' },
		{ nama: 'Mochamad Hafizh Azhar Afryan', kelas: '5H' },
		{ nama: 'Moh Rian Primadi Aula', kelas: '5H' },
		{ nama: 'Natsir Al-Irsyad Fizadinajah', kelas: '5H' },
		{ nama: 'Ibnu Abbaz Tirta Brata', kelas: '5I' },
		{ nama: 'Dzira Muhammad Falani', kelas: '5I' },
		{ nama: 'Muhammad Abdullah Syukri', kelas: '5I' },
		{ nama: 'Bayu Anggoro Proboyoni', kelas: '5J' },
		{ nama: 'Muhammad Rafi Al Ghiffari', kelas: '5J' },
		{ nama: 'Muhammad Aufa Shodiq', kelas: '5K' },
		{ nama: 'Nur Akmaluddin Wijoyo', kelas: '5K' },
		{ nama: 'Muhammad Zai Khairullah', kelas: '5K' },
		{ nama: 'Anim Aliwil Maulana', kelas: '5L' },
		{ nama: 'Sultan Muhammad Khalid', kelas: '5L' },
		{ nama: 'Muhamad Akmal Sahet Al-madfa', kelas: '5E' }
	];
</script>

<div class="flex w-full max-w-4xl flex-col items-center">
	<div
		class="mb-4 flex w-full items-center justify-center gap-2 px-5 pt-6 lg:mb-5 lg:gap-5 lg:pt-10 dark:text-white"
	>
		<School class="h-20 w-20 lg:h-30 lg:w-30" />
		<div class="text-center font-heading text-xl font-bold uppercase lg:text-3xl">
			<h1>PMDG Kampus</h1>
			<h1>Tiga</h1>
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
