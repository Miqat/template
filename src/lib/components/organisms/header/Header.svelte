<script lang="ts">
  import src from "./logo.svg";
  import { theme} from '../../../shared/stores';
  import { toggleTheme } from '../../../shared/theme';
  import { UiMoonSolid, UiSunOutline } from '../../atoms/icons';
  const navItems = [
    { id: 1, title: "Dashboard", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Settings", url: "/settings" },
  ];
  export let dark: any;
  const klass =
    'px-3 py-2 leading-5 font-medium \
    focus:outline-none focus:text-white focus:bg-primary-300 \
    text-neutral-800 hover:text-white hover:bg-primary-300 \
    dark:text-white dark:hover:bg-primary-700 dark:focus:bg-primary-700 \
    dark:bg-gray-700';
</script>

<nav
  class="z-index shadow h-16 overflow-y-visible relative text-gray-700 bg-white dark:text-white dark:bg-gray-700"
>
  <div class="hidden items-center justify-between h-full w-full md:flex">
    <div class="flex items-center h-full ml-6">
      <a class:active="{false}" href="/" class="h-8 w-8 mr-10">
        <img src="{src}" alt="Sveltekit Boilerplate" />
      </a>
      {#each navItems as item}
        <a href="{item.url}" class="{klass}">
          {item.title}
        </a>
      {/each}
      <div class="flex-0">
        <a
        href="/app/theme"
        class="block {klass}"
        aria-label="Toggle Light and Dark mode"
        on:click|preventDefault={() => {
          toggleTheme(theme, $theme);
        }}
      >
        <div class="hidden dark:block">
          <UiSunOutline />
        </div>
        <div class="dark:hidden">
          <UiMoonSolid />
        </div>
      </a>
      </div>
    </div>
  </div>
</nav>
