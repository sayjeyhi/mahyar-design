<script lang="ts">
  import { onMount } from "svelte"
  import splitbee from "@splitbee/web"
  import { dev } from "$app/env"
  import Header from "$components/Header.svelte"
  import Footer from "$components/Footer.svelte"

  import "$styles/app.css"

  onMount(() => {
    if (!dev) {
      splitbee.init()
    }
  })
</script>

<Header />

<main class="flex flex-1 flex-col p-8 w-full m-auto box-border mt-6 mb-20 max-w-[900px]">
  <slot />
</main>

<Footer />
