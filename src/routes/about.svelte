<script context="module">
  import { dev } from "$app/env"

  export const hydrate = dev
  export const router = true
  export const prerender = true
</script>

<script>
  const yearsOfWork = new Date().getFullYear() - new Date("2018").getFullYear()
</script>

<svelte:head>
  <title>About - Mahyar Mesbah [dot] Design</title>
  <meta name="description" content="This is the short story of Mahyar Mesbah." />
</svelte:head>

<div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
    <div>
      <h2 class="text-base text-primary font-semibold tracking-wide uppercase">About</h2>
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
        Mahyar Mesbah
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
            <rect x={0} y={0} width={4} height={4} class="text-faded" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={404} height={384} fill="url(#square-pattern)" />
      </svg>
      <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
        <figure>
          <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
            <picture>
              <img
                class="rounded-lg shadow-lg bg-white object-contain object-center"
                src="/images/mahyar-mesbah.jpeg"
                alt="Mahyar Mesbah"
                width={370}
                height={370}
              />
            </picture>
          </div>
        </figure>
      </div>
    </div>
    <div class="mt-8 lg:mt-0">
      <div class="prose mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
        <strong>
          I've worked professionally with Figma for about {yearsOfWork} years now, across the
          Design UI/UX for multiple companies. I have worked with several projects for mobile/web
          but mostly for the web in different sectors, primarily e-commerce.
        </strong>
        <p>
          Some of my go-to instruments and tools for design: Figma, Adobe XD, Wireframe,
          Design system, UX-Design, UserFlow, ...
        </p>
        <p>
          The Web today is mind blowing and I can't wait to see what the future hold for it, that's
          why I want to be part of it, to make it the best it can be, even though it might be only a
          tiny piece of the whole puzzle 🚀.
        </p>
      </div>
    </div>
  </div>
</div>
