<script lang="ts">
	import { Bus, Undo2 } from 'lucide-svelte';
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

<main class="w-screen px-5 md:px-8 lg:px-12 xl:px-24 dark:bg-black">
	<a href="/" class="fixed top-3 right-4 hover:scale-105 dark:text-white">
		<Undo2 />
	</a>
	<div class="flex min-h-screen w-full flex-col items-center py-10 lg:py-20">
		<div class="flex w-full flex-col items-center">
			<div class="mb-5 flex flex-col items-center">
				<Bus class="h-20 w-20 dark:text-white" />
				<h1 class="text-center font-heading text-2xl font-bold uppercase dark:text-white">
					Jadwal Kedatangan
				</h1>
			</div>
			<div class="flex flex-col gap-5 w-full">
				<div class="flex flex-col gap-2">
				<h3 class="text-center font-heading text-lg font-bold uppercase dark:text-white">
					Gontor Putra
				</h3>
				<table class="w-full overflow-hidden rounded-md text-left text-sm">
					<thead class="bg-green-300 font-heading text-xs font-normal text-black uppercase">
						<tr class="text-center">
							<th class="py-1">No.</th>
							<th class="py-1">Pondok</th>
							<th class="py-1">Jam<br />Keberangkatan</th>
							<th class="py-1">Jam<br />Kedatangan</th>
						</tr>
					</thead>
					<tbody class="bg-gray-100 font-heading text-xs">
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
				<div class="flex flex-col w-full gap-2">
					<h3 class="text-center font-heading text-lg font-bold uppercase dark:text-white">
						Gontor Putri
					</h3>
					<table class="w-full overflow-hidden rounded-md text-left text-sm">
						<thead class="bg-green-300 font-heading text-xs font-normal text-black uppercase">
							<tr class="text-center">
								<th class="py-1">No.</th>
								<th class="py-1">Pondok</th>
								<th class="py-1">Jam<br/>Keberangkatan</th>
								<th class="py-1">Jam<br/>Kedatangan</th>
							</tr>
						</thead>
						<tbody class="bg-gray-100 font-heading text-xs">
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
