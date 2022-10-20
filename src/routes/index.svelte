<script context="module" lang="ts">
  export const hydrate = true
  export const router = true
  export const prerender = true
</script>

<script lang="ts">
  import Hero from "$components/Hero.svelte"
</script>

<svelte:head>
  <title>Mahyar Mesbah [dot] Design</title>
  <meta
    name="description"
    content="I'm Mahyar Mesbah, a passionate designer based in Tehran, Iran. Read more about me or what services I can help you with."
  />
</svelte:head>

<section class="">
  <Hero />

  <div class="flex flex-col items-center text-center mt-20">
    <p>
      Contact me via <a href="mailto:mahyar.mesbah1994@gmail.com">Email</a> or find me on other medias:
      <a sveltekit:prefetch href="/journal">My Portfolio page</a>
      | <a href="https://www.linkedin.com/in/mahyar-mesbah-2ab6a6233/">Linkedin</a>
    </p>
  </div>
</section>
