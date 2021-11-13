<script lang="ts">
  import { scale } from "svelte/transition"
  import { projects } from "$stores/projects"
</script>

<svelte:head>
  <title>Projects - loke.dev</title>
  <meta name="description" content="Here you will find some featured projects of mine." />
</svelte:head>

<div>
  <h1 class="mb-6">Projects</h1>
  <h2 class="mb-6 text-center text-secondary"><strong>--- Work in progress! ---</strong></h2>

  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each $projects as project, index (project.id)}
      <div
        class="bg-background--faded p-6 gap-4 rounded-lg border-primary border flex flex-col items-baseline"
        transition:scale|local={{ start: 2, delay: index * 10 }}
      >
        <a href={project.html_url}>
          <h3 class="font-bold text-lg inline">{project.name}</h3>
        </a>
        {#if project.description}
          <p>
            {project.description
              // Filter out emojis
              .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "")
              // Filter out broken emojis
              .replace(/\:.+\:/g, "")}
          </p>{/if}
      </div>
    {/each}
  </div>
</div>
