<script lang="ts">
  import { onMount } from "svelte"
  import splitbee from "@splitbee/web"
  import { dev } from "$app/env"
  import Header from "$components/Header.svelte"
  import Footer from "$components/Footer.svelte"

  import "$styles/app.css"

  onMount(() => {
    if (!dev) {
      splitbee.init({
        scriptUrl: "/bee.js",
        apiUrl: "/_hive",
      })
    }
  })
</script>

<svelte:head>
  <meta name="og:title" content="Mahyar Mesbah [dot] Design" />
  <meta
    name="og:description"
    content="I'm Mahyar Mesbah, a passionate designer based in Tehran, Iran. Read more about me or what services I can help you with."
  />
</svelte:head>

<Header />

<main class="flex flex-1 flex-col p-8 w-full m-auto box-border mt-6 mb-20 max-w-[900px]">
  <slot />
</main>

<Footer />
