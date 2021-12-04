<script context="module">
  import { browser, dev } from "$app/env"

  export const hydrate = dev
  export const router = browser
  export const prerender = true

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    // Use a `limit` querystring parameter to fetch a limited number of posts
    // e.g. fetch('posts.json?limit=5') for 5 most recent posts
    const posts = await fetch("/journal.json").then((res) => res.json())

    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  export let posts
</script>

<svelte:head>
  <title>Journal - loke.dev</title>
  <meta name="description" content="This is the short story of Loke" />
</svelte:head>

<div class="content">
  <h1 class="mb-6">Journal</h1>

  <ul>
    {#each posts as { slug, title, author, description, date }}
      <li>
        <a href={`/journal/${slug}`}>{title}</a>
      </li>
    {/each}
  </ul>
</div>
