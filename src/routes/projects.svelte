<script lang="ts">
  import { scale } from "svelte/transition";
  import { projects } from "$stores/projects";

  console.log($projects);
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div>
  <h1 class="mb-6">Projects</h1>

  <div class="grid grid-cols-3 gap-4">
    {#each $projects as project, index (project.id)}
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
