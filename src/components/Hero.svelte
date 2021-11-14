<script lang="ts">
  import { onMount } from "svelte"
  import { gsap } from "gsap"

  onMount(() => {
    gsap.to("#hero-title", { duration: 30, repeat: -1, backgroundPosition: "0 150" })
  })
</script>

<div class="wrapper">
  <h1 id="hero-title" class="my-[10vh] text-center font-bold text-8xl">
    Creativity, playfulness and practicality.
  </h1>
</div>

<style>
  #hero-title {
    background-image: url("/images/abstract.png");
    -webkit-text-fill-color: transparent;
    background-attachment: fixed;
    background-size: contain;
    background-clip: text;
    -webkit-background-clip: text;
  }
</style>
