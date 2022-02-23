<script lang="ts">
  let isBurgerOpen: boolean = false;
</script>

<nav class="flex flex-row justify-between px-8 py-6 sticky top-0 bg-white">
  <slot name="logo" />

  <div
    class="burger group sm:hidden flex flex-col justify-evenly z-50"
    on:click={() => (isBurgerOpen = !isBurgerOpen)}
  >
    <span
      id="s1"
      class={"bg-black w-8 h-0.5 rounded-xl translate " +
        (isBurgerOpen ? "translate-y-[0.54rem] rotate-45" : "")}>&nbsp;</span
    >
    <span
      id="s2"
      class={"bg-black w-8 h-0.5 rounded-xl " +
        (isBurgerOpen ? "scale-50 opacity-0" : "")}>&nbsp;</span
    >
    <span
      id="s3"
      class={"bg-black w-8 h-0.5 rounded-xl translate " +
        (isBurgerOpen ? "-translate-y-[0.54rem] -rotate-45" : "")}>&nbsp;</span
    >
  </div>
  <div
    class={"links flex sm:flex-row sm:w-auto sm:h-auto sm:static sm:top-auto sm:left-auto sm:p-0 w-full h-screen absolute flex-col top-20 left-0 p-5 transition-all duration-200 " +
      (isBurgerOpen
        ? "visible bg-white ease-in-out translate-y-0 opacity-100"
        : "sm:visible invisible sm:opacity-100 opacity-0 sm:translate-y-0 -translate-y-4")}
  >
    <slot />
  </div>
</nav>

<style lang="postcss">
  /* .links a {
    @apply px-3 py-2 rounded-md transition-all duration-100;
  }

  .links a:hover {
    @apply bg-gray-100;
  }

  .dropdown a:hover {
    @apply bg-gray-200;
  } */

  span {
    @apply transition-all duration-100 ease-in-out;
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
  }
</style>
