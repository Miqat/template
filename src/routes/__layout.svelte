<script>
  import "../app.css";
  import Header from "$lib/components/organisms/header/Header.svelte";
  import "$lib/styles/app.scss";
</script>

<Header />

<main>
  <slot />
</main>

<style lang="scss">
</style>
