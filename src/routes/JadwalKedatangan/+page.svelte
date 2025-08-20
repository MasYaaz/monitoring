<script lang="ts">
	import { Bus } from 'lucide-svelte';
	type Jadwal = {
		nama: string;
		keberangkatan: string;
		kedatangan: string;
	};

	let jadwalKampusPutra: Jadwal[] = [
		{ nama: 'Gontor 1', keberangkatan: '02.00 WIB', kedatangan: '06.00 WIB' },
		{ nama: 'Gontor 3', keberangkatan: '02.00 WIB', kedatangan: '05.00 WIB' },
		{ nama: 'Gontor 4', keberangkatan: '00.00 WIB', kedatangan: '09.00 WIB' },
		{ nama: 'Gontor 5', keberangkatan: '01.00 WIB', kedatangan: '06.30 WIB' },
		{ nama: 'Gontor 6', keberangkatan: 'Opsional', kedatangan: 'Opsional' }
	];

	let jadwalKampusPutri: Jadwal[] = [
		{ nama: 'Gontor Putri 1', keberangkatan: '23.00 WIB', kedatangan: '03.00 WIB' },
		{ nama: 'Gontor Putri 3', keberangkatan: '02.00 WIB', kedatangan: '04.30 WIB' },
		{ nama: 'Gontor Putri 4', keberangkatan: '01.00 WIB', kedatangan: '04.00 WIB' }
	];
</script>

<main class="flex w-screen items-center px-5 md:px-8 lg:px-12 xl:px-24 dark:bg-black">
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
							Gontor Putra
						</h3>
						<h4 class="text-center font-heading text-xs lg:-mt-1 lg:text-base dark:text-white">
							Jum’at, 29 Agustus 2025
						</h4>
					</div>
					<table class="w-full overflow-hidden rounded-md text-left text-sm">
						<thead
							class="bg-green-300 font-heading text-xs font-normal text-black uppercase lg:text-base"
						>
							<tr class="text-center">
								<th class="py-1">No.</th>
								<th class="py-1">Pondok</th>
								<th class="py-1">Jam<br />Keberangkatan</th>
								<th class="py-1">Jam<br />Kedatangan</th>
							</tr>
						</thead>
						<tbody class="bg-gray-100 font-heading text-xs lg:text-base">
							{#each jadwalKampusPutra as jadwal, i}
								<tr class="text-center">
									<td class="px-2 py-2">{i + 1}.</td>
									<td class="px-2 py-2">{jadwal.nama}</td>
									<td class="px-1 py-2">{jadwal.keberangkatan}</td>
									<td class="px-1 py-2">{jadwal.kedatangan}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<div class="flex flex-col gap-2">
					<div>
						<h3 class="text-center font-heading text-lg font-bold lg:text-xl dark:text-white">
							Gontor Putri
						</h3>
						<h4 class="text-center font-heading text-xs lg:-mt-1 lg:text-base dark:text-white">
							Kamis, 28 Agustus 2025
						</h4>
					</div>
					<table class="w-full overflow-hidden rounded-md text-left text-sm">
						<thead
							class="bg-green-300 font-heading text-xs font-normal text-black uppercase lg:text-base"
						>
							<tr class="text-center">
								<th class="py-1">No.</th>
								<th class="py-1">Pondok</th>
								<th class="py-1">Jam<br />Keberangkatan</th>
								<th class="py-1">Jam<br />Kedatangan</th>
							</tr>
						</thead>
						<tbody class="bg-gray-100 font-heading text-xs lg:text-base">
							{#each jadwalKampusPutri as jadwal, i}
								<tr class="text-center">
									<td class="px-2 py-2">{i + 1}.</td>
									<td class="px-2 py-2">{jadwal.nama}</td>
									<td class="px-1 py-2">{jadwal.keberangkatan}</td>
									<td class="px-1 py-2">{jadwal.kedatangan}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</main>
