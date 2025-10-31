<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo.svg';
	import faviconDark from '$lib/assets/logo-dark.svg';
	import { isDark } from '$lib/store/darkMode';
	import { House, Moon, Sun, Undo2 } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import {
		loadBelumDijemput,
		loadKedatanganPondok,
		subscribeRealtime
	} from '$lib/store/tabelStore';
	import { notifications } from '$lib/store/notif';
	import { goto } from '$app/navigation';
	let audio: HTMLAudioElement;

	let dark = $derived($isDark);

	function toggleDark() {
		dark = !dark;
		isDark.set(dark);
	}

	let { children } = $props();

	onMount(() => {
		audio = new Audio('/notif.wav');
		loadBelumDijemput();
		loadKedatanganPondok();
		subscribeRealtime();
	});

	let lastPlayed = 0;

	$effect(() => {
		if ($notifications?.length) {
			const now = Date.now();

			// batasi agar tidak bunyi lagi dalam 1 detik terakhir
			if (now - lastPlayed > 1000) {
				audio.currentTime = 0;
				audio.play().catch(() => {});
				lastPlayed = now;
			}
		}
	});

	function goBack() {
		history.length > 1 ? history.back() : goto('/'); // fallback kalau gak ada history
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} media="(prefers-color-scheme: light)" />
	<link rel="icon" href={faviconDark} media="(prefers-color-scheme: dark)" />
</svelte:head>

<header>
	<button
		class="fixed top-3 right-4 hover:scale-105 hover:cursor-pointer dark:text-white"
		onclick={toggleDark}
	>
		{#if !dark}
			<Sun />
		{:else}
			<Moon />
		{/if}
	</button>
	{#if $page.url.pathname === '/admin'}
		<!-- tombol home -->
		<a
			aria-label="gohome"
			href="/"
			class="fixed top-3 left-4 hover:scale-105 hover:cursor-pointer dark:text-white"
		>
			<House />
		</a>
	{:else if $page.url.pathname !== '/'}
		<!-- tombol kembali -->
		<button
			aria-label="kembali"
			onclick={goBack}
			class="fixed top-3 left-4 hover:scale-105 hover:cursor-pointer dark:text-white"
		>
			<Undo2 />
		</button>
	{/if}
	<div class="fixed top-4 left-4 z-50 space-y-2">
		{#each $notifications as notif}
			<div
				transition:fade={{ duration: 300 }}
				class="animate-fade-in rounded-lg bg-blue-600 px-4 py-2 text-white shadow-lg"
			>
				{notif}
			</div>
		{/each}
	</div>
</header>

{#key $page.url.pathname}
	<main in:fade={{ duration: 300 }} class="w-full pb-6 lg:pb-0 dark:bg-black">
		<section class="flex w-full justify-center px-4 md:px-6 lg:px-12 xl:px-24">
			<div class="flex min-h-screen w-full max-w-xl flex-col items-center py-5">
				{@render children?.()}
			</div>
		</section>
	</main>
{/key}
