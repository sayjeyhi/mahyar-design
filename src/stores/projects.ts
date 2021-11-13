import { writable } from "svelte/store"
import { variables } from "$src/variables"

export const projects = writable([])

const fetchProjects = async () => {
  const url = "https://api.github.com/users/lokecarlsson/repos"
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${variables.githubToken}`,
    },
  })
  const data = await response.json()

  projects.set(data)
}

fetchProjects()
