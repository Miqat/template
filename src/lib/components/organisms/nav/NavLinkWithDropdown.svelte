<script lang="ts">
  export let name: string;
</script>

<span
  class="group relative px-3 py-2 rounded-md transition-all duration-100 cursor-pointer hover:bg-gray-100"
  >{name}
  <div
    id="dropdown"
    class="dropdown flex flex-col invisible max-h-0 group-hover:max-h-40 group-hover:visible transition-all duration-200 ease-in-out sm:max-h-max sm:group-hover:max-h-max sm:invisible sm:opacity-0 sm:absolute sm:float-left sm:w-max sm:z-10 sm:shadow-xl sm:bg-white sm:flex-col sm:rounded-md sm:left-0 sm:p-3 sm:my-1.5 sm:transform sm:translate-y-2 sm:group-hover:visible sm:group-hover:opacity-100 sm:group-hover:translate-y-0"
  >
    <slot />
  </div>
</span>
