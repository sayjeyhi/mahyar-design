<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit"

  export const load: Load = async ({ fetch }) => {
    const res = await fetch("/projects.json")

    if (res.ok) {
      const projects = await res.json()

      return {
        props: { projects },
      }
    }

    const { message } = await res.json()

    return {
      error: new Error(message),
    }
  }
</script>

<script lang="ts">
  import { scale } from "svelte/transition"

  type Project = {
    id: string
    name: string
    description: string
  }

  export let projects: Project[]
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div>
  <h1 class="mb-6">Projects</h1>

  <div class="grid grid-cols-3 gap-4">
    {#each projects as project, index (project.id)}
      <div
        class="bg-background--faded p-6 rounded-lg border-primary border"
        transition:scale|local={{ start: 2, delay: index * 10 }}
      >
        <h3 class="font-bold text-2xl">{project.name}</h3>
        {#if project.description} <p>{project.description}</p>{/if}
      </div>
    {/each}
  </div>
</div>
