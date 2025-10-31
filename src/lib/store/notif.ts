import { writable } from "svelte/store";

export const notifications = writable<string[]>([]);

export function pushNotification(msg: string) {
  let shouldDiscard = false;

  notifications.update((n) => {
    // kalau sudah ada notifikasi aktif, tandai supaya pesan baru diabaikan
    if (n.length > 0) shouldDiscard = true;
    return [...n, msg];
  });

  if (shouldDiscard) {
    // langsung hilangkan pesan baru (tidak tunggu 3 detik)
    setTimeout(() => {
      notifications.update((n) => n.slice(1));
    }, 200);
  } else {
    // kalau tidak ada notifikasi lain, tampilkan selama 3 detik
    setTimeout(() => {
      notifications.update((n) => n.slice(1));
    }, 3000);
  }
}