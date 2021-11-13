<script context="module" lang="ts">
  export const prerender = true
</script>

<script lang="ts">
  import Counter from "$components/Counter.svelte"
</script>

<svelte:head>
  <title>Loke.dev</title>
  <meta name="description" content="Loke.dev is the personal website for Loke Carlsson" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
  <h1 class="mb-12 text-6xl">Welcome</h1>

  <Counter />
</section>
