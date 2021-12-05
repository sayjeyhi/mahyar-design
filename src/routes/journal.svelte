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
  <h1 class="mb-6">Let's learn together!</h1>

  <ul>
    <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
      {#each posts as { slug, title, description, date }}
        <div>
          <a href={`/journal/posts/${slug}`} class="mt-2 block group">
            <p class="text-sm text-gray-500 mb-1">
              <time dateTime={date}>{new Date(date).toLocaleDateString("sv-SE")}</time>
            </p>
            <p class="text-xl font-semibold text-gray-100 group-hover:underline">{title}</p>
            <p class="mt-3 text-base text-gray-500">{description}</p>
            <p class="mt-3 group-hover:underline">Read full story</p>
          </a>
        </div>
      {/each}
    </div>
  </ul>
</div>
