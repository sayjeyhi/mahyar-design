<script context="module">
  import { dev } from "$app/env"

  export const hydrate = dev
  export const router = true
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

<script lang="ts">
  import Patterns from "$components/Patterns.svelte"
  export let posts
</script>

<svelte:head>
  <title>Journal - Mahyar Mesbah [dot] Design</title>
  <meta name="description" content="Some of my written down thought, guides and blog posts" />
</svelte:head>

<Patterns variant="2" />

<div class="content">
  <h2 class="mb-6 mt-12 font-bold">Let's Take a look to sth real!</h2>
  It is not completed yet sorry :(

  <div>
    Take a look here plz:
    <a class="inline-flex items-center justify-center py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-primary"  href="https://drive.google.com/drive/folders/17sxUdBXxLegj1Dk3ilx6xfJf1VUnpWEc" target="_blank">
      https://drive.google.com/drive/folders/17sxUdBXxLegj1Dk3ilx6xfJf1VUnpWEc
    </a>

  </div>
<!--  <ul>-->
<!--    <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">-->
<!--      {#each posts as { slug, title, description, date }}-->
<!--        <div>-->
<!--          <a sveltekit:prefetch href={`/journal/posts/${slug}`} class="mt-2 block group">-->
<!--            <p class="text-sm text-gray-500 mb-1">-->
<!--              <time dateTime={date}>{new Date(date).toLocaleDateString("sv-SE")}</time>-->
<!--            </p>-->
<!--            <p class="text-xl font-semibold text-gray-100 group-hover:underline">{title}</p>-->
<!--            <p class="mt-3 text-base text-gray-500">{description}</p>-->
<!--            <p class="mt-3 group-hover:underline">Read full story</p>-->
<!--          </a>-->
<!--        </div>-->
<!--      {/each}-->
<!--    </div>-->
<!--  </ul>-->
</div>
