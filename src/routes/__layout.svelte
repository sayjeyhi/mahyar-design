<script lang="ts">
  import Header from "$components/Header.svelte"
  import Footer from "$components/Footer.svelte"

  import "$styles/app.css"
</script>

<Header />

<main class="flex flex-1 flex-col p-8 w-full m-auto box-border mt-6 mb-20 max-w-[900px]">
  <slot />
</main>

<Footer />
