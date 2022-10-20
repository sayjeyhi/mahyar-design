<script context="module" lang="ts">
  export const hydrate = true
  export const router = true
  export const prerender = true
</script>

<script lang="ts">
  import Patterns from "$components/Patterns.svelte"
</script>

<svelte:head>
  <title>Contact - Mahyar Mesbah [dot] Design</title>
  <meta name="description" content="Want to get in touch, you will find the best way here." />
</svelte:head>

<Patterns />

<div>
  <h1 class="mb-6">Contact</h1>
  <p class="mt-14 text-lg leading-6 text-white">
    Send me a message if you have any questions or want to work together.
  </p>

    <div class="m-auto">
      By Email here:
      <span class="inline-flex items-center justify-center py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-primary">mahyar.mesbah1994@gmail.com</span>
      and Let's talk 😎.
    </div>
</div>
