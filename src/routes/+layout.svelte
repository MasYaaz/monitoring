<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo.svg';
	import faviconDark from '$lib/assets/logo-dark.svg';
	import { isDark } from '$lib/store/darkMode';
	import { Moon, Sun, Undo2 } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	let dark = $derived($isDark);

	function toggleDark() {
		dark = !dark;
		isDark.set(dark);
	}

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} media="(prefers-color-scheme: light)" />
	<link rel="icon" href={faviconDark} media="(prefers-color-scheme: dark)" />
</svelte:head>

<button class="fixed top-3 right-4 hover:scale-105 dark:text-white" onclick={toggleDark}>
	{#if !dark}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>

{#if $page.url.pathname !== "/" && $page.url.pathname !== "/admin"}
<a
	href="/"
	class="fixed top-3 left-4 hover:scale-105 dark:text-white"
>
	<Undo2 />
</a>
{/if}

{#key $page.url.pathname}
	<div
		in:fade={{ duration: 300 }}
		class="w-full dark:bg-black"
	>
		{@render children()}
	</div>
{/key}
