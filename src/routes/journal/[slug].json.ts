import { slugFromPath } from "$utils/journal"

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
  const modules: Record<string, () => any> = import.meta.glob(`./posts/*.{md,svx,svelte.md}`)

  let match: [string, () => { metadata: string }]

  for (const [path, resolver] of Object.entries(modules)) {
    if (slugFromPath(path) === params.slug) {
      match = [path, resolver]
      break
    }
  }

  if (!match) {
    return {
      status: 404,
    }
  }

  const post = await match[1]()

  return {
    body: post.metadata,
  }
}
