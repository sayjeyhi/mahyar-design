<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Counter from "$components/Counter.svelte";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
  <h1 class="mb-12 text-6xl">Welcome</h1>

  <Counter />
</section>
