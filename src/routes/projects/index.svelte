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
  <title>Projects - loke.dev</title>
  <meta name="description" content="Here you will find some featured projects of mine." />
</svelte:head>

<div>
  <h1 class="mb-6">Projects</h1>
  <h2 class="mb-6 text-center text-secondary"><strong>--- Work in progress! ---</strong></h2>

  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
