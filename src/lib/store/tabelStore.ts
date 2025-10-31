import { supabase } from '$lib/connection/supabaseClient';
import { writable } from 'svelte/store';
import { pushNotification } from './notif';

export const kedatanganPondok = writable<any[]>([]);
export const belumDijemput = writable<any[]>([]);
export const loading = writable(false);

export async function loadKedatanganPondok() {
	loading.set(true);
	const { data: pd } = await supabase.from('kedatangan_pondok').select('*').order('id');

	if (pd) kedatanganPondok.set(pd);
	loading.set(false);
	return pd;
}

// Ambil data belum dijemput
export async function loadBelumDijemput() {
	loading.set(true);
	const { data: sb } = await supabase.from('belum_dijemput').select('*').order('id');

	if (sb) belumDijemput.set(sb);
	loading.set(false);
	return sb;
}

type KedatanganPondok = {
	pondok: string;
};

type Santri = {
	nama: string;
};

let channels: any[] = [];

export function subscribeRealtime() {
	unsubscribeRealtime();
	// Kedatangan Pondok
	const ch1 = supabase
		.channel('kedatangan_pondok_changes')
		.on(
			'postgres_changes',
			{ event: '*', schema: 'public', table: 'kedatangan_pondok' },
			async (payload) => {
				await loadKedatanganPondok(); // refresh data kalau ada perubahan
				const kedatangan = payload.new as KedatanganPondok;
				if (kedatangan?.pondok) {
					pushNotification(`Selamat Datang ${kedatangan.pondok}`);
				}
			}
		)
		.subscribe();

	// Belum Dijemput
	const ch2 = supabase
		.channel('belum_dijemput_changes')
		.on(
			'postgres_changes',
			{ event: '*', schema: 'public', table: 'belum_dijemput' },
			async (payload) => {
				await loadBelumDijemput();

				const santriB = payload.new as Santri;
				const santriD = payload.old as Santri;
				if (payload.eventType === 'INSERT') {
					pushNotification(`${santriB?.nama} Belum Di Jemput`);
				}
				if (payload.eventType === 'DELETE') {
					pushNotification(`${santriD?.nama} Sudah Di Jemput.`);
				}
			}
		)
		.subscribe();

	channels = [ch1, ch2];
}

export function unsubscribeRealtime() {
	for (const ch of channels) {
		supabase.removeChannel(ch);
	}
	channels = [];
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
