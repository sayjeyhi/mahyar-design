<script context="module">
  import { browser, dev } from "$app/env";

  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="content">
  <h1 class="mb-6">About me</h1>

  <p>
    <strong>
      As a frontend developer, I focus on solving problems. Putting an emphasis on loyalty and
      honesty with clients and fellow team members. Passionate about the JAMstack, I strive for
      intuitiveness in all the work that I do, doing everything that I can to make users'
      experiences smooth, easy, and comfortable.
    </strong>
  </p>

  <br />

  <p>
    I work with both React.js and Svelte regularly, and try to use these tools to the best of my
    ability in order to bring my clients' UI visions to life. My preferred CSS preprocesor is Sass,
    and my ability to style the pages and platforms that I develops is noteworthy, my technical
    skills complemented nicely by my fashionable eye. Considering at all times what will make
    interfaces attractive and what will make them efficient, I try to develop in a way that plays to
    users' expectations – while also surprising them pleasantly with unique and different ideas.
  </p>
</div>

<style>
  .content {
    width: 100%;
    max-width: var(--column-width);
    margin: var(--column-margin-top) auto 0 auto;
  }
</style>
