<script>
  export let content;
</script>

<div class="title">{content}</div>

<style lang="scss">
  @import '../../../styles/abstracts/_functions.scss';

  .title {
    font-size: font-size(title);
    font-weight: 100;
    text-transform: uppercase;
    color: color(red-100);
  }
</style>
