<script lang="ts">
	import { Bus } from 'lucide-svelte';

	const bis1 = [
		{ nama: 'Mochammad Zidan Fairuzza Rahman', kelas: '1-B', asal: 'Bantul' },
		{ nama: 'Muhammad Gostaf Bill Barokh', kelas: '1-D', asal: 'Sidoarjo' },
		{ nama: 'Mahatma Hilmi Ahmad', kelas: '1-F', asal: 'Surabaya' },
		{ nama: 'Muhammad Danesh Suoth', kelas: '2-D', asal: 'Kab. Sidoarjo' },
		{ nama: 'Alvaro Nabeel Rabbani', kelas: '2-D', asal: 'Surabaya' },
		{ nama: "Abdullah An Nafi'u Zain", kelas: '2-F', asal: 'Surabaya' },
		{ nama: 'Ibrahim Rizky Rauf Syahputra', kelas: '2-G', asal: 'Surabaya' },
		{ nama: 'Muhammad Nizzam Syafi Rizkullah', kelas: '2-G', asal: 'Sidoarjo' },
		{ nama: 'Abee Izzanillah', kelas: '2-J', asal: 'Kota Tarakan' },
		{ nama: 'Krishna Ammar Mahfud', kelas: '2-K', asal: 'Kab. Sidoarjo' },
		{ nama: 'Abdullah Fathurrahman', kelas: '2-M', asal: 'Lampung Selatan' },
		{ nama: 'M. Azka Fadi Islami Wijaya', kelas: '3-B', asal: 'Sidoarjo' },
		{ nama: 'Ghaza Mohammad Al Ghazali', kelas: '3-B', asal: 'Kab. Sidoarjo' },
		{ nama: 'Muhammad Hasyim Rusdi', kelas: '3-E', asal: 'Surabaya' },
		{ nama: 'Naufal Abdil Wahab', kelas: '3-F', asal: 'Sidoarjo' },
		{ nama: 'Rafi Syailendra', kelas: '3 Int D', asal: 'Kab. Waringin Timur' },
		{ nama: 'Muhammad Faidlurrahman', kelas: '3 Int D', asal: 'Kab. Lampung Selatan' },
		{ nama: 'Ilham Putra Nacah', kelas: '3 Int D', asal: 'Kab. Sidoarjo' },
		{ nama: 'Fadlan Zaki Effendi', kelas: '4-B', asal: 'Surabaya' },
		{ nama: 'Aufa Hammam Al-farros', kelas: '4-D', asal: 'Surabaya' },
		{ nama: 'Muhammad Bagus Aryansyah Arochman', kelas: '4-G', asal: 'Sidoarjo' },
		{ nama: "A'syiam Nuzul Ramdhan Rukmana", kelas: '4-I', asal: 'Sidoarjo' },
		{ nama: 'Bryan Halim Pambudi', kelas: '4-I', asal: 'Surabaya' },
		{ nama: 'Muhammad Alvin Abiyu Dzakir', kelas: '4-J', asal: 'Sidoarjo' },
		{ nama: 'Afif Atoillah', kelas: '4-L', asal: 'Surabaya' },
		{ nama: 'Muhammad Hafiz Indra Maulana', kelas: '4-L', asal: 'Surabaya' },
		{ nama: 'Achmad Fatchan Achsanur Rochman', kelas: '4-M', asal: 'Surabaya' },
		{ nama: 'Muhammad Farras Al Farisi', kelas: '4-M', asal: 'Surabaya' },
		{ nama: 'Roselfiano Awwalu Al Jabbar', kelas: '4-M', asal: 'Surabaya' },
		{ nama: 'An Najma Rasendriya `Askar', kelas: '5-D', asal: 'Kebumen' },
		{ nama: 'Fayyadh Agha Athourrahman', kelas: '5-D', asal: 'Sidoarjo' },
		{ nama: 'Abdullah Tsaqif Zahran', kelas: '5-F', asal: 'Sidoarjo' },
		{ nama: 'Azka Aufar Hanan', kelas: '5-G', asal: 'Deli Serdang' },
		{ nama: 'Mohammad Faris', kelas: '5-G', asal: 'Kab. Sidoarjo' },
		{ nama: 'Ahmad Hafiduddin Sidrat Al-Muntaha', kelas: '5-K', asal: 'Surabaya' },
		{ nama: 'Naufal Aqil Asyrofin', kelas: '5-M', asal: 'Sidoarjo' },
		{ nama: "Dafa'a Saif Ibrahim", kelas: '5-N', asal: 'Surabaya' },
		{ nama: 'Ilham Fahmi Saefudin', kelas: '5-Q', asal: 'Kebumen' },
		{ nama: 'Ahmad Mahsari', kelas: '5-Q', asal: 'Tangerang' },
		{ nama: 'Ken Khawarizmi Achmad Aveceena', kelas: '5-Q', asal: 'Sidoarjo' },
		{ nama: 'Zlatan Foead Badry', kelas: '5-Q', asal: 'Sidoarjo' },
		{ nama: 'M. Hasan Syukur Mahfud', kelas: '5-R', asal: 'Sidoarjo' },
		{ nama: 'Mas Wafa Zarifirdaus', kelas: '5-R', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Dzikri Adliansyah Taryana*', kelas: '5-R', asal: 'Sukabumi' },
		{ nama: 'A.M.Fahrizal Akbar Abdillah Ali', kelas: '5-S', asal: 'Sidoarjo' },
		{ nama: 'Maulana Hasanudin', kelas: '5-S', asal: 'Sidoarjo' },
		{ nama: 'Fayzan Dika Athallah', kelas: '5-S', asal: 'Surabaya' },
		{ nama: 'Muhammad Rizky Agung Prayuga', kelas: '5-S', asal: 'Surabaya' }
	];

	const bis2 = [
		{ nama: "D'zafif Gavin Noarreyhan", kelas: '1-D', asal: 'Surabaya' },
		{ nama: 'Raihan Atha Al-Ghani', kelas: '1-E', asal: 'Sidoarjo' },
		{ nama: 'Ghassan Al Qalbi', kelas: '1-F', asal: 'Bireuen' },
		{ nama: 'Raja Ado Pehan Nira', kelas: '1-F', asal: 'Flores Timur' },
		{ nama: 'Ahmad Indra Irawan', kelas: '2-D', asal: 'Kab. Sidoarjo' },
		{ nama: 'Azgara Fairuz Zulfikri', kelas: '2-D', asal: 'Surabaya' },
		{ nama: 'Muhammad Daffa Arrayan', kelas: '2-G', asal: 'Surabaya' },
		{ nama: 'Muhammad Fillah Zeeshan Al Jabbar', kelas: '2-H', asal: 'Sidoarjo' },
		{ nama: 'Fazil Rafisqi Asyam', kelas: '2-J', asal: 'Kota Surabaya' },
		{ nama: 'Teddy Fernanda Mavella Hamdani', kelas: '2-J', asal: 'Kab. Sidoarjo' },
		{ nama: 'Abdurrahman Ahmad Al Ghiffari Supriyanto', kelas: '2-K', asal: 'Po. Kepuhrubuh' },
		{ nama: 'Fathan Abror Abdullah', kelas: '2-L', asal: 'Pekalongan' },
		{ nama: 'Abizard Galib Alwafi', kelas: '3-C', asal: 'Surabaya' },
		{ nama: 'Mukhammad Razqiya Qudsy', kelas: '3-H', asal: 'Kab. Sidoarjo' },
		{ nama: 'Irhamna Cordova', kelas: '3-I', asal: 'Sumenep' },
		{ nama: 'Ibad Naufal Fatihurrozaq', kelas: '3-J', asal: 'Kab. Sidoarjo' },
		{ nama: 'Vairuz Zubaidi Azmi Karim', kelas: '3-K', asal: 'Bekasi' },
		{ nama: 'Rasydan Ukail Pradana', kelas: '3-K', asal: 'Kab. Sidoarjo' },
		{ nama: 'Ghailan Ezzat', kelas: '3 Int F', asal: 'Surabaya' },
		{ nama: 'Riza Alghani Raoul Athallah', kelas: '3 Int G', asal: 'Bogor' },
		{ nama: 'Muhammad Dzaky Al Mubarok', kelas: '4-F', asal: 'Sidoarjo' },
		{ nama: 'Sulthon Hafiz Tri Prasetyo', kelas: '4-G', asal: 'Sidoarjo' },
		{ nama: 'Ahmad Rayhan Budiyanto', kelas: '4-H', asal: 'Surabaya' },
		{ nama: 'Ahmad Rashad Budiyanto', kelas: '4-H', asal: 'Surabaya' },
		{ nama: 'Muhammad Sabilur Rosyad Sulthon', kelas: '4-H', asal: 'Surabaya' },
		{ nama: 'Mirza Hariz Batrisya Zain', kelas: '4-K', asal: 'Surabaya' },
		{ nama: 'Ahmad Tsabitul Azmi Z.s', kelas: '4-K', asal: 'Surabaya' },
		{ nama: 'Muhammad Ichsanuddin Firdaus', kelas: '4-K', asal: 'Surabaya' },
		{ nama: 'Oemar Assegaf', kelas: '4-L', asal: 'Surabaya' },
		{ nama: 'Victor Rizky Sanokta', kelas: '4-M', asal: 'Surabaya' },
		{ nama: 'Mochammad Faiq Ubaidillah Irsyaduddien', kelas: '5-C', asal: 'Surabaya' },
		{ nama: 'Arifin Turohman', kelas: '5-F', asal: 'Serang' },
		{ nama: 'Hasnul Yaqin', kelas: '5-G', asal: 'Kepulauan Riau' },
		{ nama: 'Nabil Ahmad Samhan', kelas: '5-G', asal: 'Surabaya' },
		{ nama: 'Riffat Akmal', kelas: '5-H', asal: 'Sidoarjo' },
		{ nama: 'Mukhammad Galih Priambodo', kelas: '5-I', asal: 'Batam' },
		{ nama: 'Bulyan Faza Ramadhan', kelas: '5-L', asal: 'Pekanbaru' },
		{ nama: 'Achmad Azmullah Habib El-fanny', kelas: '5-L', asal: 'Sidoarjo' },
		{ nama: 'Raihan Achmad Al Kautsar', kelas: '5-L', asal: 'Surabaya' },
		{ nama: 'Muhammad Zafin Al Fatah', kelas: '5-M', asal: 'Sidoarjo' },
		{ nama: 'Achmad Jauhar Al Makky', kelas: '5-N', asal: 'Sidoarjo' },
		{ nama: 'Rahmadi Sholihin', kelas: '5-O', asal: 'Landak' },
		{ nama: 'Alfath Rizqi Romadhoni', kelas: '5-O', asal: 'Surabaya' },
		{ nama: 'Muhammad Yazid Zain', kelas: '5-Q', asal: 'Sidoarjo' },
		{ nama: 'Al Ford Nawata Jundur Rosul', kelas: '5-R', asal: 'Sidoarjo' },
		{ nama: 'Rafanza Ahmadeedat Sirait', kelas: '5-R', asal: 'Sidoarjo' },
		{ nama: 'Abdul Mujiib', kelas: '5-R', asal: 'Sidoarjo' },
		{ nama: 'Marvino Rezky Ahmadinata', kelas: '5-R', asal: 'Surabaya' },
		{ nama: 'Daffa Najwa El Mahally', kelas: '5-R', asal: 'Sidoarjo' },
		{ nama: 'Raditya Miftahur Rohman', kelas: '5-S', asal: 'Sidoarjo' }
	];

	const bis3 = [
		{ nama: 'Muhammad Asya Pradana', kelas: '2-J', asal: 'Sidoarjo' },
		{ nama: 'Djalu Satria Wahyuning Baharja', kelas: '2-K', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Rozaqul Istiqom', kelas: '2-M', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Althof Azka Al Afany', kelas: '2-M', asal: 'Surabaya' },
		{ nama: 'Luthfi Sakhi Zaidan', kelas: '2-N', asal: 'Sidoarjo' },
		{ nama: 'Radithya Mahendra Afiansa', kelas: '2-N', asal: 'Sidoarjo' },
		{ nama: 'Nasrullah Farhan Ahmadi', kelas: '2-N', asal: 'Surabaya' },
		{ nama: "Denish Al-jaesh A'rof", kelas: '2-N', asal: 'Surabaya' },
		{ nama: "Dhiya'ul Haq Zaki Ilyas", kelas: '4-B', asal: 'Surabaya' },
		{ nama: 'Naufal Fikri Ikhwan Bintoro', kelas: '4-B', asal: 'Surabaya' },
		{ nama: 'Alif Ardhanulail Noor', kelas: '4-C', asal: 'Surabaya' },
		{ nama: 'Noeh Ilhamoeddien Aang Hariyanto', kelas: '4-C', asal: 'Sidoarjo' },
		{ nama: 'Azzam Aris Affandy', kelas: '4-E', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Ridho Hermawan', kelas: '4-G', asal: 'Surabaya' },
		{ nama: 'Revan Zafier Aisyullah', kelas: '4-G', asal: 'Surabaya' },
		{ nama: 'Suthan Jabbar Susanto', kelas: '4-H', asal: 'Sidoarjo' },
		{ nama: "Naufal Ahmad Syathir Asy'Ari", kelas: '5-C', asal: 'Sidoarjo' },
		{ nama: 'Aliy Rifqi Fathur Rahman', kelas: '5-C', asal: 'Surabaya' },
		{ nama: 'Muhammad Naufal Irsyadul Annas', kelas: '5-D', asal: 'Surabaya' },
		{ nama: 'Rommy Anandra Putra', kelas: '5-D', asal: 'Sidoarjo' },
		{ nama: 'Fathul Aziz Robbani', kelas: '5-E', asal: 'Surabaya' },
		{ nama: 'Muhammad Azhar Basyir', kelas: '5-F', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Afkarial Azar Mirzaillah', kelas: '5-G', asal: 'Sidoarjo' },
		{ nama: 'Izzaqi Naufal Aqila', kelas: '5-H', asal: 'Sidoarjo' },
		{ nama: 'Alghani Winata Ramadhan', kelas: '5-J', asal: 'Surabaya' },
		{ nama: 'Abyaz Fazle Mawla Mas', kelas: '5-K', asal: 'Surabaya' },
		{ nama: 'Achmad Zacky Assegaf', kelas: '5-K', asal: 'Surabaya' },
		{ nama: 'Raihan Muhammmad Iqbal', kelas: '5-M', asal: 'Surabaya' },
		{ nama: 'Muhammad Mukhlis Ibrahim', kelas: '5-M', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Yassar Nur Ramadhan', kelas: '5-O', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Jalaludin Abdurahman', kelas: '5-R', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Hamdi Rivazani', kelas: '5-S', asal: 'Sidoarjo' }
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
				<div class="flex flex-col gap-2">
					<div>
						<h3 class="text-center font-heading text-lg font-bold lg:text-xl dark:text-white">
							Absen Bis 3
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
							{#each bis3 as b, i}
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
