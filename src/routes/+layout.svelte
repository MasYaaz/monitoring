<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo.svg';
	import faviconDark from '$lib/assets/logo-dark.svg';
	import { isDark } from '$lib/store/darkMode';
	import { Moon, Sun } from 'lucide-svelte';

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

<button class="fixed top-3 left-4 hover:scale-105 dark:text-white" onclick={toggleDark}>
	{#if !dark}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>

{@render children?.()}
