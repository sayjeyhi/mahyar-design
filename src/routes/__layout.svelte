<script lang="ts" context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  })
</script>

<script lang="ts">
  import Header from "$components/Header.svelte"
  import Footer from "$components/Footer.svelte"
  import PageTransition from "$components/PageTransition.svelte"

  import "../app.css"

  export let key: string
</script>

<Header />

<main class="flex flex-1 flex-col p-8 w-full m-auto box-border mt-6 mb-20">
  <PageTransition refresh={key}>
    <slot />
  </PageTransition>
</main>

<Footer />
