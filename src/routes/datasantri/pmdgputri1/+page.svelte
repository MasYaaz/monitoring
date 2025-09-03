<script lang="ts">
	import { School } from 'lucide-svelte';

	// const bis1 = [
	// 	{ nama: 'Kaela Nadia Balqis', kelas: '1 INT B' },
	// 	{ nama: 'Lailatul Syavika Arsalia', kelas: '1 INT B' },
	// 	{ nama: 'Siti Salma', kelas: '1-B' },
	// 	{ nama: 'Nadaa Nurfadhilah Alwi', kelas: '1-B' },
	// 	{ nama: 'Annasya Thalia Kamil', kelas: '1-B' },
	// 	{ nama: 'Sayyidah Firhani Khoirunnisa', kelas: '1-D' },
	// 	{ nama: 'Shafa Enyta Wibisono', kelas: '2-D' },
	// 	{ nama: 'Nayra Rachmeida Zaibunnisa', kelas: '2-E' },
	// 	{ nama: 'Nayla Hana Mutiara', kelas: '2-E' },
	// 	{ nama: 'Najwa Aqiilah Abidin', kelas: '2-G' },
	// 	{ nama: 'Khanza Aisyah A. S.', kelas: '2-G' },
	// 	{ nama: 'Fahera Ecevena', kelas: '2-J' },
	// 	{ nama: 'Sarah Miqailla Afsheena', kelas: '2-F' },
	// 	{ nama: 'Nur Almira Annisa', kelas: '2-F' },
	// 	{ nama: 'Zahra Khanza Aqilla Santoso', kelas: '3-D' },
	// 	{ nama: 'Azhara Rafifa', kelas: '3-D' },
	// 	{ nama: 'Almeera Kirana Eltsania Kusyanto', kelas: '3-D' },
	// 	{ nama: 'Queenta Amira Saifana', kelas: '3-E' },
	// 	{ nama: 'Chelsea Oktavia Putri', kelas: '3-E' },
	// 	{ nama: 'Aisyah Shakira', kelas: '3-G' },
	// 	{ nama: 'Faihana Radha Azzakirah', kelas: '3-L' },
	// 	{ nama: 'Miftahul Haq', kelas: '3-L' },
	// 	{ nama: 'Nisa Nurhaniva', kelas: '3-L' },
	// 	{ nama: 'Aisyah Surya Salsabila Al Amin', kelas: '3-M' },
	// 	{ nama: 'Tasya Adellia', kelas: '3-I' },
	// 	{ nama: 'Anilnaa Azkiya Qolbi', kelas: '4-E' },
	// 	{ nama: 'Idza Anis Sobaro', kelas: '4-E' },
	// 	{ nama: 'Aliiya Nur Habibah', kelas: '4-E' },
	// 	{ nama: 'Cantika Yuanita Andriana', kelas: '4-F' },
	// 	{ nama: 'Zahira Azzakiyyah', kelas: '4-F' },
	// 	{ nama: 'Aulia Alfinnur Rizqi', kelas: '4-C' },
	// 	{ nama: 'Nala Syafa Akbarkan', kelas: '4-C' },
	// 	{ nama: 'Ghaitsa Atha Maulida', kelas: '4-D' },
	// 	{ nama: 'Aurora Khalisah Adeline', kelas: '4-D' },
	// 	{ nama: 'Naznin Ayla Farah', kelas: '4-D' },
	// 	{ nama: 'Najwa Kurnadi', kelas: '4-G' },
	// 	{ nama: 'Jasmine Arya Dwiartha', kelas: '4-G' },
	// 	{ nama: "Anna Althofunisa' Ashadi", kelas: '4-G' },
	// 	{ nama: 'Nailah Muazarah', kelas: '4-H' },
	// 	{ nama: 'Keysya Zahwa Nabila', kelas: '4-H' },
	// 	{ nama: 'Cinta Nayla', kelas: '4-H' },
	// 	{ nama: 'Keysa Arissa', kelas: '5-B' },
	// 	{ nama: 'Naditya Figuritma', kelas: '5-H' },
	// 	{ nama: 'Nabilah Amani', kelas: '5-B' },
	// 	{ nama: 'Alifya Najwa Ramdhania H', kelas: '5-D' },
	// 	{ nama: 'Zayyana Shovia Mutmainnah', kelas: '5-E' },
	// 	{ nama: 'Zelda Zanita Rahman', kelas: '5-G' },
	// 	{ nama: 'Rista Ilma Amalia', kelas: '5-J' },
	// 	{ nama: 'Balqis Adzra Nur Kholisa', kelas: '5-K' },
	// 	{ nama: 'Sabrina Reynata Lady Azzahra', kelas: '5-M' }
	// ];

	// const bis2 = [
	// 	{ nama: 'Nadiyatul Khoir', kelas: '1-C' },
	// 	{ nama: 'Nur Safira Insyiroh', kelas: '1-C' },
	// 	{ nama: 'Naysyla Ardina', kelas: '1-F' },
	// 	{ nama: 'Safiya Aisyah Dewi', kelas: '1-I' },
	// 	{ nama: 'Celena Raissa Orlin', kelas: '1-B' },
	// 	{ nama: 'Azalea Karunia', kelas: '1-D' },
	// 	{ nama: 'Athifa Ummi Hanifah', kelas: '1-G' },
	// 	{ nama: 'Nadine Puspita Windriya', kelas: '2-K' },
	// 	{ nama: 'Queenesa Naufalyn Putri Huda', kelas: '2-K' },
	// 	{ nama: 'Aisyah Hilyatul Aulia Hidayat', kelas: '3-C' },
	// 	{ nama: 'Grahita Nariswari Nublah', kelas: '3-G' },
	// 	{ nama: 'Aqiluzzada Shafa Muktamarin', kelas: '3-H' },
	// 	{ nama: 'Athera Aesya Syazwiena', kelas: '3-I' },
	// 	{ nama: 'Attaya Hafsa Aquila', kelas: '3-K' },
	// 	{ nama: 'Rahma Aulia Sari Hartanti', kelas: '3-M' },
	// 	{ nama: 'Aqeela Shakira Dahniar', kelas: '3-M' },
	// 	{ nama: 'Athaya Izzatunnisa', kelas: '3-G' },
	// 	{ nama: 'Naurah Talitha', kelas: '3-E' },
	// 	{ nama: 'Khansa Lathifa', kelas: '3-F' },
	// 	{ nama: 'Karunia Azka Mumtaz', kelas: '4-C' },
	// 	{ nama: 'Safa Dwi Andi Lestari Umar', kelas: '4-C' },
	// 	{ nama: 'Qonita Ufairah', kelas: '4-E' },
	// 	{ nama: 'Mauidatul Hasanah', kelas: '4-H' },
	// 	{ nama: 'Pinandhita Emiralova Ulil Albab', kelas: '4-H' },
	// 	{ nama: 'Devika Kalyani Nirwasita', kelas: '4-I' },
	// 	{ nama: 'Afifah Lathifatul Qolbi', kelas: '4-I' },
	// 	{ nama: 'Wicitra Wintang Winarno', kelas: '4-I' },
	// 	{ nama: 'Aisyah Ra Shofaul Qolbi', kelas: '4-J' },
	// 	{ nama: 'Sakhi Salma Putri Widyadana', kelas: '4-K' },
	// 	{ nama: 'Azma Nazihah Agus Masruri', kelas: '4-K' },
	// 	{ nama: 'Keeva Haura Insiyah Rafius', kelas: '4-K' },
	// 	{ nama: 'Aisyah Nur Romadhona', kelas: '4-K' },
	// 	{ nama: "Naura As'syifa Wardani", kelas: '4-I' },
	// 	{ nama: 'Alicia Yolanda Wicaksono', kelas: '4-J' },
	// 	{ nama: 'Zahra Syita Nabila', kelas: '4-J' },
	// 	{ nama: 'Shafaa Nurfazila Alwi', kelas: '4-J' },
	// 	{ nama: 'Qouli Azkia Nasukhi', kelas: '4-J' },
	// 	{ nama: 'Safa Annisa', kelas: '4-L' },
	// 	{ nama: 'Salsabila Fauziyyah', kelas: '5-C' },
	// 	{ nama: 'Amira Mujahidah', kelas: '5-B' },
	// 	{ nama: 'Andi Ayra', kelas: '5-K' },
	// 	{ nama: 'Nayeva Arfah Nejat', kelas: '5-B' },
	// 	{ nama: 'Ishma Luthfiyatuz Zahra', kelas: '5-B' },
	// 	{ nama: 'Nadia Nur Arribah', kelas: '5-C' },
	// 	{ nama: 'Ammara Shakila Dahniar', kelas: '5-S' },
	// 	{ nama: 'Nabila Syawla Hanin', kelas: '5-T' },
	// 	{ nama: 'Aisyah Nur Masruri', kelas: '5-W' },
	// 	{ nama: 'Zahrani', kelas: '5-K' },
	// 	{ nama: 'Nayla Zahra Destiviana', kelas: '5-M' }
	// ];

	const bis1 = [
		{ nama: 'Nadaa Nurfadhilah Alwi', kelas: '1-B' },
		{ nama: 'Annasya Thalia Kamil', kelas: '1-B' },
		{ nama: 'Siti Salma', kelas: '1-B' },
		{ nama: 'Celena Raissa Orlin', kelas: '1-B' },
		{ nama: 'Nadiyatul Khoir', kelas: '1-C' },
		{ nama: 'Nur Safira Insyirah', kelas: '1-C' },
		{ nama: 'Naysyla Ardina', kelas: '1-F' },
		{ nama: 'Safiya Aisyah Dewi', kelas: '1-G' },
		{ nama: 'Nayra Rachmeida Zaibunnisa', kelas: '2-E' },
		{ nama: 'Nayla Hana Mutiara', kelas: '2-E' },
		{ nama: 'Naurah Talitha', kelas: '3-E' },
		{ nama: 'Khanza Aisyah Adilla', kelas: '2-G' },
		{ nama: 'Fahera Ecevena', kelas: '2-J' },
		{ nama: 'Kameliyatus Sholeha', kelas: '2-J' },
		{ nama: 'Nadine Puspita Windriya', kelas: '2-K' },
		{ nama: 'Zahra Khanza Aqilla Santoso', kelas: '3-D' },
		{ nama: 'Azhara Rafifa', kelas: '3-D' },
		{ nama: 'Almeera Kirana Eltsania Kusyanto', kelas: '3-D' },
		{ nama: 'Queenta Amira Saifana', kelas: '3-E' },
		{ nama: 'Chelsea Oktavia Putri', kelas: '3-E' },
		{ nama: 'Aisyah Shakira', kelas: '3-G' },
		{ nama: 'Faihana Radha Azzakirah', kelas: '3-L' },
		{ nama: 'Nisa Nurhaniva', kelas: '3-L' },
		{ nama: 'Miftahul Haq', kelas: '3-L' },
		{ nama: 'Aisyah Surya Salsabila Al Amin', kelas: '3-M' },
		{ nama: 'Rahma Aulia Sari Hartanti', kelas: '3-M' },
		{ nama: 'Aqeela Shakila Dahniar', kelas: '3-M' },
		{ nama: 'Naznin Ayla Farah', kelas: '4-D' },
		{ nama: 'Anilnaa Azkiya Qolbi', kelas: '4-E' },
		{ nama: 'Aliiya Nur Habibah', kelas: '4-E' },
		{ nama: 'Zahira Azzakiyyah', kelas: '4-F' },
		{ nama: 'Cantika Yuanita Adriana', kelas: '4-F' },
		{ nama: 'Jasmine Arya Dwiartha', kelas: '4-G' },
		{ nama: 'Anna Althafunnisa Ashadi', kelas: '4-G' },
		{ nama: 'Nailah Muazarah', kelas: '4-H' },
		{ nama: 'Keysya Zahwa Nabila', kelas: '4-H' },
		{ nama: 'Mauidatul Hasanah', kelas: '4-H' },
		{ nama: 'Pinandhita Emiralova Ulil Albab', kelas: '4-H' },
		{ nama: 'Cinta Nayla', kelas: '4-H' },
		{ nama: 'Devika Kalyani Nirwasita', kelas: '4-I' },
		{ nama: 'Afifah Lathifatul Qolbi', kelas: '4-I' },
		{ nama: 'Alifya Najwa Ramdhania H', kelas: '5-D' },
		{ nama: 'Zayyana Shovia Mutmainnah', kelas: '5-E' },
		{ nama: 'Zelda Zanita Rahman', kelas: '5-G' },
		{ nama: 'Nayla Zahra Destiviana', kelas: '5-M' },
		{ nama: 'Ammara Shakila Dahniar', kelas: '5-S' },
		{ nama: 'Aisyah Ra Shofaul Qolbi', kelas: '4-J' },
		{ nama: 'Sakhi Salma Putri Widyadana', kelas: '4-K' },
		{ nama: 'Aisyah Nur Romadhona', kelas: '4-K' },
		{ nama: 'Azma Nazihah', kelas: '4-K' },
		{ nama: 'Safa Annisa', kelas: '4-L' }
	];

	const bis2 = [
		{ nama: 'Athaya Izzatunnisa', kelas: '3-G' },
		{ nama: 'Aqiluzzada Shafa Muktamarin', kelas: '3-H' },
		{ nama: 'Tasya Adellia Maghfirah', kelas: '3-I' },
		{ nama: 'Athera Aesya', kelas: '3-I' },
		{ nama: 'Attaya Hafsa Aquila', kelas: '3-K' },
		{ nama: 'Karunia Azka Mumtaz', kelas: '4-C' },
		{ nama: 'Safa Dwi Andi Lestari', kelas: '4-C' },
		{ nama: 'Ghaitsa Atha Maulida', kelas: '4-D' },
		{ nama: 'Zahra Syita Nabila', kelas: '4-J' },
		{ nama: 'Qouli Azkia Nasukhi', kelas: '4-J' },
		{ nama: 'Nayeva Arfah Nejat', kelas: '5-B' },
		{ nama: 'Nabilah Amani', kelas: '5-B' },
		{ nama: 'Ishma Luthfiyatuz', kelas: '5-B' },
		{ nama: 'Nadia Nur Arribah', kelas: '5-C' },
		{ nama: 'Salsabila Fauziyyah', kelas: '5-C' }
	];
</script>

<main class="flex items-center px-5 md:px-8 lg:px-12 xl:px-24 dark:bg-black">
	<div class="flex min-h-screen w-full flex-col items-center py-5">
		<div class="flex w-full max-w-4xl flex-col items-center">
			<div
				class="flex w-full items-center justify-center gap-2 px-5 pt-6 lg:mb-5 lg:gap-5 lg:pt-10 dark:text-white"
			>
				<School class="h-20 w-20 lg:h-30 lg:w-30" />
				<div class="text-center font-heading text-xl font-bold uppercase lg:text-3xl">
					<h1>PMDG Putri</h1>
					<h1>Kampus Satu</h1>
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
						<!-- <h3 class="text-center font-heading text-lg font-bold lg:text-xl dark:text-white">
							Absen Bis 2
						</h3> -->
						<h3 class="text-center font-heading text-lg font-bold lg:text-xl dark:text-white">
							Absen Long Elf
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
