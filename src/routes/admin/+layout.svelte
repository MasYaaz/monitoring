<script lang="ts">
	import { UserRoundCog } from 'lucide-svelte';
</script>

<div class="flex w-full items-center justify-center px-5 py-6 lg:py-10 dark:text-white">
	<UserRoundCog class="h-20 w-20 lg:h-30 lg:w-30" />
	<div class="text-center font-heading text-2xl font-bold lg:text-4xl">
		<h1>Dashboard</h1>
		<h1>Admin</h1>
	</div>
</div>
<slot />
