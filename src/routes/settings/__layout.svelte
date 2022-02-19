<script lang="ts">
  import Home from '$lib/components/pages/Home/Home.svelte';
  import Header from '$lib/components/molecules/SettingsHeader.svelte';
  import "$lib/styles/app.scss";
</script>

<div class="flex flex-col justify-center bg-gray-50 px-4 dark:bg-gray-900 sm:px-8">
	<Header />
  <Home />
</div>
<main class="flex flex-col justify-center bg-gray-50 px-4 dark:bg-gray-900 sm:px-8">
  <slot />
</main>

<style lang="scss" global>
  @import '../main.scss';
</style>

