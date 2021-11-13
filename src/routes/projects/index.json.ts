import { variables } from "$src/variables"
import type { RequestHandler } from "@sveltejs/kit"

const fetchProjects = async () => {
  const url = "https://api.github.com/users/lokecarlsson/repos"

  const res = await fetch(url, {
    headers: {
      Authorization: `token ${variables.githubToken}`,
    },
  })

  return {
    status: res.status,
    body: await res.json(),
  }
}

export const get: RequestHandler<Locals> = async () => {
  const response = await fetchProjects()

  if (response.status === 400) {
    return { body: [] }
  }

  return response
}
