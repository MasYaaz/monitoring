import { writable } from "svelte/store";

export const notifications = writable<string[]>([]);

export function pushNotification(msg: string) {
  notifications.update((n) => [...n, msg]);
  // auto hilang setelah 5 detik
  setTimeout(() => {
    notifications.update((n) => n.slice(1));
  }, 3000);
}