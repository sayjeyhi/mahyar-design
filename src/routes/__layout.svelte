<script lang="ts">
  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";
  import "../app.css";
</script>

<Header />

<main class="flex flex-1 flex-col p-4 w-full max-w-5xl m-auto box-border mt-6 mb-20">
  <slot />
</main>

<Footer />
