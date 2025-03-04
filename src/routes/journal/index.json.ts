import { slugFromPath } from "$utils/journal"

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ url }) {
  const modules: Record<string, () => any> = import.meta.glob("./posts/*.{md,svx,svelte.md}")

  const postPromises = []
  const limit = Number(url.searchParams.get("limit") ?? Infinity)

  if (Number.isNaN(limit)) {
    return {
      status: 400,
    }
  }

  for (const [path, resolver] of Object.entries(modules)) {
    const slug = slugFromPath(path)
    const promise = resolver().then((post) => ({
      slug,
      ...post.metadata,
    }))

    postPromises.push(promise)
  }

  const posts = await Promise.all(postPromises)
  const publishedPosts = posts.filter((post) => post.published).slice(0, limit)

  publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

  return {
    body: publishedPosts.slice(0, limit),
  }
}
