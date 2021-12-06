<script context="module">
  import { browser, dev } from "$app/env"

  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<svelte:head>
  <title>About - loke.dev</title>
  <meta name="description" content="This is the short story of Loke" />
</svelte:head>

<div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
    <div>
      <h2 class="text-base text-primary font-semibold tracking-wide uppercase">About</h2>
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
        Loke Carlsson
      </h3>
    </div>
  </div>
  <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
    <div class="relative lg:row-start-1 lg:col-start-2">
      <svg
        class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
        width={404}
        height={384}
        fill="none"
        viewBox="0 0 404 384"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="square-pattern"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} class="text-gray-800" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={404} height={384} fill="url(#square-pattern)" />
      </svg>
      <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
        <figure>
          <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
            <img
              class="rounded-lg shadow-lg bg-white object-contain object-center"
              src="/images/loke.png"
              alt="Loke"
              width={460}
              height={460}
            />
          </div>
        </figure>
      </div>
    </div>
    <div class="mt-8 lg:mt-0">
      <div class="prose mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
        <strong>
          As a frontend developer, I focus on solving problems. Putting an emphasis on loyalty and
          honesty with clients and fellow team members. Passionate about the JAMstack, I strive for
          intuitiveness in all the work that I do, doing everything that I can to make users'
          experiences smooth, easy, and also fun.
        </strong>
        <p>
          I work with both React.js and Svelte regularly, and try to use these tools to the best of
          my ability in order to bring my clients' UI visions to life. My ability to style the pages
          and platforms that I develops is noteworthy, my technical skills complemented nicely by my
          fashionable eye. Considering at all times what will make interfaces attractive and what
          will make them efficient, I try to develop in a way that plays to users' expectations –
          while also surprising them pleasantly with unique and different ideas.
        </p>
      </div>
    </div>
  </div>
</div>
