<script lang="ts">
	import { UserRoundCog } from 'lucide-svelte';
</script>

<main class="w-screen px-4 md:px-6 lg:px-12 xl:px-24">
	<div class="flex min-h-screen w-full flex-col items-center py-5">
		<div class="flex w-full items-center justify-center px-5 py-6 lg:py-10 dark:text-white">
			<UserRoundCog class="h-20 w-20 lg:h-30 lg:w-30" />
			<div class="text-center font-heading text-2xl font-bold lg:text-4xl">
				<h1>Dashboard</h1>
				<h1>Admin</h1>
			</div>
		</div>
		<slot />
	</div>
</main>
