<script lang="ts">
	import { School } from 'lucide-svelte';

	const bis1 = [
		{ nama: 'Mochammad Zidan Fairuzza Rahman', kelas: '1-B' },
		{ nama: 'Muhammad Gostaf Bill Barokh', kelas: '1-D' },
		{ nama: 'Mahatma Hilmi Ahmad', kelas: '1-F' },
		{ nama: 'Muhammad Danesh Suoth', kelas: '2-D' },
		{ nama: 'Alvaro Nabeel Rabbani', kelas: '2-D' },
		{ nama: "Abdullah An Nafi'u Zain", kelas: '2-F' },
		{ nama: 'Ibrahim Rizky Rauf Syahputra', kelas: '2-G' },
		{ nama: 'Muhammad Nizzam Syafi Rizkullah', kelas: '2-G' },
		{ nama: 'Abee Izzanillah', kelas: '2-J' },
		{ nama: 'Krishna Ammar Mahfud', kelas: '2-K' },
		{ nama: 'Abdullah Fathurrahman', kelas: '2-M' },
		{ nama: 'M. Azka Fadi Islami Wijaya', kelas: '3-B' },
		{ nama: 'Ghaza Mohammad Al Ghazali', kelas: '3-B' },
		{ nama: 'Muhammad Hasyim Rusdi', kelas: '3-E' },
		{ nama: 'Naufal Abdil Wahab', kelas: '3-F' },
		{ nama: 'Rafi Syailendra', kelas: '3 Int D' },
		{ nama: 'Muhammad Faidlurrahman', kelas: '3 Int D' },
		{ nama: 'Ilham Putra Nacah', kelas: '3 Int D' },
		{ nama: 'Fadlan Zaki Effendi', kelas: '4-B' },
		{ nama: 'Aufa Hammam Al-farros', kelas: '4-D' },
		{ nama: 'Muhammad Bagus Aryansyah Arochman', kelas: '4-G' },
		{ nama: "A'syiam Nuzul Ramdhan Rukmana", kelas: '4-I' },
		{ nama: 'Bryan Halim Pambudi', kelas: '4-I' },
		{ nama: 'Muhammad Alvin Abiyu Dzakir', kelas: '4-J' },
		{ nama: 'Afif Atoillah', kelas: '4-L' },
		{ nama: 'Muhammad Hafiz Indra Maulana', kelas: '4-L' },
		{ nama: 'Achmad Fatchan Achsanur Rochman', kelas: '4-M' },
		{ nama: 'Muhammad Farras Al Farisi', kelas: '4-M' },
		{ nama: 'Roselfiano Awwalu Al Jabbar', kelas: '4-M' },
		{ nama: 'An Najma Rasendriya `Askar', kelas: '5-D' },
		{ nama: 'Fayyadh Agha Athourrahman', kelas: '5-D' },
		{ nama: 'Abdullah Tsaqif Zahran', kelas: '5-F' },
		{ nama: 'Azka Aufar Hanan', kelas: '5-G' },
		{ nama: 'Mohammad Faris', kelas: '5-G' },
		{ nama: 'Ahmad Hafiduddin Sidrat Al-Muntaha', kelas: '5-K' },
		{ nama: 'Naufal Aqil Asyrofin', kelas: '5-M' },
		{ nama: "Dafa'a Saif Ibrahim", kelas: '5-N' },
		{ nama: 'Ilham Fahmi Saefudin', kelas: '5-Q' },
		{ nama: 'Ahmad Mahsari', kelas: '5-Q' },
		{ nama: 'Ken Khawarizmi Achmad Aveceena', kelas: '5-Q' },
		{ nama: 'Zlatan Foead Badry', kelas: '5-Q' },
		{ nama: 'M. Hasan Syukur Mahfud', kelas: '5-R' },
		{ nama: 'Mas Wafa Zarifirdaus', kelas: '5-R' },
		{ nama: 'Muhammad Dzikri Adliansyah Taryana*', kelas: '5-R' },
		{ nama: 'A.M.Fahrizal Akbar Abdillah Ali', kelas: '5-S' },
		{ nama: 'Maulana Hasanudin', kelas: '5-S' },
		{ nama: 'Fayzan Dika Athallah', kelas: '5-S' },
		{ nama: 'Muhammad Rizky Agung Prayuga', kelas: '5-S' }
	];

	const bis2 = [
		{ nama: "D'zafif Gavin Noarreyhan", kelas: '1-D' },
		{ nama: 'Raihan Atha Al-Ghani', kelas: '1-E' },
		{ nama: 'Ghassan Al Qalbi', kelas: '1-F' },
		{ nama: 'Raja Ado Pehan Nira', kelas: '1-F' },
		{ nama: 'Ahmad Indra Irawan', kelas: '2-D' },
		{ nama: 'Azgara Fairuz Zulfikri', kelas: '2-D' },
		{ nama: 'Muhammad Daffa Arrayan', kelas: '2-G' },
		{ nama: 'Muhammad Fillah Zeeshan Al Jabbar', kelas: '2-H' },
		{ nama: 'Fazil Rafisqi Asyam', kelas: '2-J' },
		{ nama: 'Teddy Fernanda Mavella Hamdani', kelas: '2-J' },
		{ nama: 'Abdurrahman Ahmad Al Ghiffari Supriyanto', kelas: '2-K' },
		{ nama: 'Fathan Abror Abdullah', kelas: '2-L' },
		{ nama: 'Abizard Galib Alwafi', kelas: '3-C' },
		{ nama: 'Mukhammad Razqiya Qudsy', kelas: '3-H' },
		{ nama: 'Irhamna Cordova', kelas: '3-I' },
		{ nama: 'Ibad Naufal Fatihurrozaq', kelas: '3-J' },
		{ nama: 'Vairuz Zubaidi Azmi Karim', kelas: '3-K' },
		{ nama: 'Rasydan Ukail Pradana', kelas: '3-K' },
		{ nama: 'Ghailan Ezzat', kelas: '3 Int F' },
		{ nama: 'Riza Alghani Raoul Athallah', kelas: '3 Int G' },
		{ nama: 'Muhammad Dzaky Al Mubarok', kelas: '4-F' },
		{ nama: 'Sulthon Hafiz Tri Prasetyo', kelas: '4-G' },
		{ nama: 'Ahmad Rayhan Budiyanto', kelas: '4-H' },
		{ nama: 'Ahmad Rashad Budiyanto', kelas: '4-H' },
		{ nama: 'Muhammad Sabilur Rosyad Sulthon', kelas: '4-H' },
		{ nama: 'Mirza Hariz Batrisya Zain', kelas: '4-K' },
		{ nama: 'Ahmad Tsabitul Azmi Z.s', kelas: '4-K' },
		{ nama: 'Muhammad Ichsanuddin Firdaus', kelas: '4-K' },
		{ nama: 'Oemar Assegaf', kelas: '4-L' },
		{ nama: 'Victor Rizky Sanokta', kelas: '4-M' },
		{ nama: 'Mochammad Faiq Ubaidillah Irsyaduddien', kelas: '5-C' },
		{ nama: 'Arifin Turohman', kelas: '5-F' },
		{ nama: 'Hasnul Yaqin', kelas: '5-G' },
		{ nama: 'Nabil Ahmad Samhan', kelas: '5-G' },
		{ nama: 'Riffat Akmal', kelas: '5-H' },
		{ nama: 'Mukhammad Galih Priambodo', kelas: '5-I' },
		{ nama: 'Bulyan Faza Ramadhan', kelas: '5-L' },
		{ nama: 'Achmad Azmullah Habib El-fanny', kelas: '5-L' },
		{ nama: 'Raihan Achmad Al Kautsar', kelas: '5-L' },
		{ nama: 'Muhammad Zafin Al Fatah', kelas: '5-M' },
		{ nama: 'Achmad Jauhar Al Makky', kelas: '5-N' },
		{ nama: 'Rahmadi Sholihin', kelas: '5-O' },
		{ nama: 'Alfath Rizqi Romadhoni', kelas: '5-O' },
		{ nama: 'Muhammad Yazid Zain', kelas: '5-Q' },
		{ nama: 'Al Ford Nawata Jundur Rosul', kelas: '5-R' },
		{ nama: 'Rafanza Ahmadeedat Sirait', kelas: '5-R' },
		{ nama: 'Abdul Mujiib', kelas: '5-R' },
		{ nama: 'Marvino Rezky Ahmadinata', kelas: '5-R' },
		{ nama: 'Daffa Najwa El Mahally', kelas: '5-R' },
		{ nama: 'Raditya Miftahur Rohman', kelas: '5-S' }
	];

	const bis3 = [
		{ nama: 'Muhammad Asya Pradana', kelas: '2-J' },
		{ nama: 'Djalu Satria Wahyuning Baharja', kelas: '2-K' },
		{ nama: 'Muhammad Rozaqul Istiqom', kelas: '2-M' },
		{ nama: 'Muhammad Althof Azka Al Afany', kelas: '2-M' },
		{ nama: 'Luthfi Sakhi Zaidan', kelas: '2-N' },
		{ nama: 'Radithya Mahendra Afiansa', kelas: '2-N' },
		{ nama: 'Nasrullah Farhan Ahmadi', kelas: '2-N' },
		{ nama: "Denish Al-jaesh A'rof", kelas: '2-N' },
		{ nama: "Dhiya'ul Haq Zaki Ilyas", kelas: '4-B' },
		{ nama: 'Naufal Fikri Ikhwan Bintoro', kelas: '4-B' },
		{ nama: 'Alif Ardhanulail Noor', kelas: '4-C' },
		{ nama: 'Noeh Ilhamoeddien Aang Hariyanto', kelas: '4-C' },
		{ nama: 'Azzam Aris Affandy', kelas: '4-E' },
		{ nama: 'Muhammad Ridho Hermawan', kelas: '4-G' },
		{ nama: 'Revan Zafier Aisyullah', kelas: '4-G' },
		{ nama: 'Suthan Jabbar Susanto', kelas: '4-H' },
		{ nama: "Naufal Ahmad Syathir Asy'Ari", kelas: '5-C' },
		{ nama: 'Aliy Rifqi Fathur Rahman', kelas: '5-C' },
		{ nama: 'Muhammad Naufal Irsyadul Annas', kelas: '5-D' },
		{ nama: 'Rommy Anandra Putra', kelas: '5-D' },
		{ nama: 'Fathul Aziz Robbani', kelas: '5-E' },
		{ nama: 'Muhammad Azhar Basyir', kelas: '5-F' },
		{ nama: 'Muhammad Afkarial Azar Mirzaillah', kelas: '5-G' },
		{ nama: 'Izzaqi Naufal Aqila', kelas: '5-H' },
		{ nama: 'Alghani Winata Ramadhan', kelas: '5-J' },
		{ nama: 'Abyaz Fazle Mawla Mas', kelas: '5-K' },
		{ nama: 'Achmad Zacky Assegaf', kelas: '5-K' },
		{ nama: 'Raihan Muhammmad Iqbal', kelas: '5-M' },
		{ nama: 'Muhammad Mukhlis Ibrahim', kelas: '5-M' },
		{ nama: 'Muhammad Yassar Nur Ramadhan', kelas: '5-O' },
		{ nama: 'Muhammad Jalaludin Abdurahman', kelas: '5-R' },
		{ nama: 'Muhammad Hamdi Rivazani', kelas: '5-S' }
	];
</script>

<div class="flex w-full max-w-4xl flex-col items-center">
	<div
		class="mb-4 flex w-full items-center justify-center gap-2 px-5 pt-6 lg:mb-5 lg:gap-5 lg:pt-10 dark:text-white"
	>
		<School class="h-20 w-20 lg:h-30 lg:w-30" />
		<div class="text-center font-heading text-xl font-bold uppercase lg:text-3xl">
			<h1>PMDG Kampus</h1>
			<h1>Satu</h1>
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
					</tr>
				</thead>
				<tbody class="bg-gray-100 font-heading text-xs lg:text-base">
					{#each bis3 as b, i}
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
