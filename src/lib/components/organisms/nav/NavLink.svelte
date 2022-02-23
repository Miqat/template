<script lang="ts">
  export let link: string;
</script>

<a
  href={link}
  class="px-3 py-2 rounded-md transition-all duration-100 hover:bg-gray-100"
  ><slot /></a
>
