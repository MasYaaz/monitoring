import { supabase } from '$lib/connection/supabaseClient';
import { writable } from 'svelte/store';

export const kedatanganPondok = writable<any[]>([]);
export const belumDijemput = writable<any[]>([]);

export async function loadData() {
	const { data: pd } = await supabase.from('kedatangan_pondok').select('*').order('id');
	const { data: sb } = await supabase.from('belum_dijemput').select('*').order('id');

	if (pd) kedatanganPondok.set(pd);
	if (sb) belumDijemput.set(sb);
}

export function subscribeRealtime() {
	// Kedatangan Pondok
	supabase
		.channel('kedatangan_pondok_changes')
		.on(
			'postgres_changes',
			{ event: '*', schema: 'public', table: 'kedatangan_pondok' },
			async () => {
				await loadData(); // refresh data kalau ada perubahan
			}
		)
		.subscribe();

	// Belum Dijemput
	supabase
		.channel('belum_dijemput_changes')
		.on('postgres_changes', { event: '*', schema: 'public', table: 'belum_dijemput' }, async () => {
			await loadData();
		})
		.subscribe();
}

export async function deletePondok(id: number) {
	const { error } = await supabase.from('kedatangan_pondok').delete().eq('id', id);

	if (!error) {
		kedatanganPondok.update((list) => list.filter((item) => item.id !== id));
	} else {
		console.error(error);
	}
}

export async function deleteSantri(id: number) {
	const { error } = await supabase.from('belum_dijemput').delete().eq('id', id);

	if (!error) {
		belumDijemput.update((list) => list.filter((item) => item.id !== id));
	} else {
		console.error(error);
	}
}
