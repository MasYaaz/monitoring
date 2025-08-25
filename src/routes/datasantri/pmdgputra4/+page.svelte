<script lang="ts">
	import { Bus } from 'lucide-svelte';

	const bis1 = [
		{ nama: 'Muhammad Fachry Arrosyidy', kelas: '1 Int B', asal: 'Sidoarjo' },
		{ nama: 'Naufal Mohamad Fatih Al-mizan', kelas: '1-B', asal: 'Surabaya' },
		{ nama: 'Fatih Ahmad Al Kadafi', kelas: '1-C', asal: 'Surabaya' },
		{ nama: 'Aydin Dwi Alfiansyah', kelas: '1-C', asal: 'Surabaya' },
		{ nama: 'Fatih Ardhani Suryabumi', kelas: '1-C', asal: 'Gresik' },
		{ nama: 'Muhammad Hasbi Tsaqif Alfarizqi', kelas: '2-B', asal: 'Surabaya' },
		{ nama: 'Akhmad Ashraf Mirdasy', kelas: '2-B', asal: 'Kab. Pasuruan' },
		{ nama: 'Muhammad Abdillah Nur Arifin', kelas: '2-D', asal: 'Sampang' },
		{ nama: 'Muhammad Ilzam Hidayat', kelas: '2-E', asal: 'Bangkalan' },
		{ nama: 'Muhammad Dzaki Al-Fatih Iskandar', kelas: '2-E', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Arkan Ataya Hidayat', kelas: '2-E', asal: 'Kab. Sidoarjo' },
		{ nama: 'Muhammad Elnino Hakim', kelas: '3-C', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Izdad Fadhailk', kelas: '3-D', asal: 'Bangkalan' },
		{ nama: 'Ahmad Hanif Zakhwan Zulfahmi', kelas: '3-E', asal: 'Surabaya' },
		{ nama: 'Toufiq Hidayah Syaifullah Ridwan', kelas: '3-E', asal: 'Bangkalan' },
		{ nama: 'Bintang Putra Mahardhika', kelas: '4-B', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Dzaky Setiawan', kelas: '4-D', asal: 'Surabaya' },
		{ nama: 'Muhammad Aksamala Cahyo', kelas: '4-D', asal: 'Gresik' },
		{ nama: 'Fathulloh', kelas: '4-E', asal: 'Sampang' },
		{ nama: 'Muhammad Akmal Aldiansah', kelas: '4-F', asal: 'Surabaya' },
		{ nama: 'Muhammad Aziz Nur Zidan', kelas: '4-F', asal: 'Madiun' },
		{ nama: 'Muhammad Daffa Alif Ramadhan', kelas: '5-B', asal: 'Gresik' },
		{ nama: 'Nafis Abyaz Muhamad Falih', kelas: '5-C', asal: 'Surabaya' },
		{ nama: 'Muhammad Fachrian Iswari', kelas: '5-D', asal: 'Gresik' },
		{ nama: 'Satriya Salman El Shohhy', kelas: '5-D', asal: 'Surabaya' },
		{ nama: 'Mohamad Baharudin Dzulkarnaen', kelas: '5-D', asal: 'Surabaya' },
		{ nama: 'Seno Tegar Raga Pangestu', kelas: '5-D', asal: 'Sidoarjo' },
		{ nama: 'Maulidan Al-fahrizi Ahmad', kelas: '5-E', asal: 'Gresik' },
		{ nama: "Muhammad Fa'ihlul Ihsan", kelas: '5-E', asal: 'Surabaya' },
		{ nama: 'Akbar Rayyan Danuardi', kelas: '5-E', asal: 'Sidoarjo' },
		{ nama: 'Bilal Ezar Zaidaan', kelas: '5-E', asal: 'Sidoarjo' },
		{ nama: 'Yusuf Faiq Qutby', kelas: '5-F', asal: 'Surabaya' },
		{ nama: 'Muhammad Anugrah Sakhii', kelas: '5-F', asal: 'Surabaya' },
		{ nama: 'Ahmad Rehan Sasongko', kelas: '5-G', asal: 'Sidoarjo' },
		{ nama: 'Muhammad Naufal Tsaqib Riduwan', kelas: '5-G', asal: 'Sidoarjo' },
		{ nama: 'Achmad Fachri Shihab', kelas: '5-G', asal: 'Surabaya' },
		{ nama: 'Muchamad Rino Ukasyah', kelas: '5-G', asal: 'Gresik' },
		{ nama: 'Moch. Alimul Hikam', kelas: '5-H', asal: 'Surabaya' },
		{ nama: 'Muhammad Faza Nur Fahmi', kelas: '5-H', asal: 'Pamekasan' },
		{ nama: "Ahmad Syifa'us Raihan", kelas: '5-H', asal: 'Surabaya' },
		{ nama: 'Muhammad Wildan Zulkarnain Zain', kelas: '5-H', asal: 'Gresik' },
		{ nama: 'Dimas Kefin Ramadhan', kelas: '5-H', asal: 'Bangkalan' },
		{ nama: 'Moch. Farhan Hidayat Ramadhan', kelas: '5-I', asal: 'Surabaya' },
		{ nama: 'Muhammad Arinal Haq', kelas: '5-I', asal: 'Gresik' },
		{ nama: 'Ahmad Aizaar Rayhan Maulana', kelas: '5-I', asal: 'Gresik' },
		{ nama: 'Muhammad Siroja Al Islami', kelas: '5-J', asal: 'Surabaya' },
		{ nama: 'Reyhan Ar Rizqi Fitrah', kelas: '5-K', asal: 'Gresik' },
		{ nama: 'Nabil Satria Pamungkas', kelas: '5-K', asal: 'Gresik' },
		{ nama: 'Dava Alfian Widiyanto', kelas: '5-K', asal: 'Surabaya' },
		{ nama: 'Muchamad Sulthan Fachri Ramadhan', kelas: '5-L', asal: 'Surabaya' },
		{ nama: 'Maulana Salaif El Hilmi', kelas: '5-L', asal: 'Gresik' },
		{ nama: 'Muchammad Fachrudin', kelas: '5-M', asal: 'Surabaya' },
		{ nama: 'Muammar Ahmad Nayaka', kelas: '5-M', asal: 'Sidoarjo' },
		{ nama: 'Damar Javara Ariyanto', kelas: '5-M', asal: 'Sampang' },
		{ nama: 'Abdullah Kenshah Noor Salahuddin', kelas: '5-M', asal: 'Gresik' },
		{ nama: 'Muhammad Naufal Utsman Ghani', kelas: '5-M', asal: 'Surabaya' },
		{ nama: 'Muh. Fadel Maulana Yusuf', kelas: '3-F', asal: 'Kalimantan Selatan' },
		{ nama: 'Muhammad Alif Nurulloh', kelas: '5-B', asal: 'Tangerang' }
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
			</div>
		</div>
	</div>
</main>
