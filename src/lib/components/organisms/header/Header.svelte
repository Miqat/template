<script lang="ts">
  import src from './logo.svg'
  const navItems = [
    {id: 1, title: 'Dashboard', url: '/'},
    {id: 2, title: 'About', url: '/about'},
    {id: 3, title: 'Settings', url: '/settings'},
  ]
</script>

<nav <header class="z-index shadow h-16 overflow-y-visible relative text-gray-700 bg-white">
	<div class="hidden items-center justify-between h-full w-full md:flex">
		<div class="flex items-center h-full ml-6">
    <a class:active="{false}" href="/" class="h-8 w-8 mr-10">
      <img {src} alt="Sveltekit Boilerplate" />
    </a>
    {#each navItems as item}
      <a href={item.url} class="mr-8 text-gray-600">
        {item.title}
      </a>
    {/each}
  </div>
</nav>
