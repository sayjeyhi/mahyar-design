<script lang="ts">
  import { page } from "$app/stores"
</script>

<header class="bg-background--faded p-4 flex justify-center">
  <nav class="flex justify-center">
    <ul class="relative p-0 m-0 flex justify-center items-center bg-contain h-12 list-none">
      <li class:active={$page.path === "/"}><a sveltekit:prefetch href="/">Home</a></li>
      <li class:active={$page.path === "/about"}><a sveltekit:prefetch href="/about">About</a></li>
      <li class:active={$page.path === "/projects"}>
        <a sveltekit:prefetch href="/projects">Projects</a>
      </li>
      <li class:active={$page.path === "/journal"}>
        <a sveltekit:prefetch href="/journal">Journal</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: 0;
    left: calc(50% - 8px);
    border: 8px solid transparent;
    @apply border-b-primary;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: #fff;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    @apply text-primary;
  }
</style>
