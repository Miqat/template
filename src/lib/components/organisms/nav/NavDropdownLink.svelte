<script lang="ts">
  export let link: string;
</script>

<a
  href={link}
  class="px-3 py-2 rounded-md transition-all duration-100 opacity-0 hover:bg-gray-200 sm:hover:bg-gray-100 group-hover:opacity-100"
  ><slot /></a
>
