<script context="module" lang="ts">
  export const hydrate = true
  export const router = true
  export const prerender = true
</script>

<svelte:head>
  <title>Contact - loke.dev</title>
  <meta name="description" content="Here you will find some featured projects of mine." />
</svelte:head>

<div>
  <h1 class="mb-6">Contact</h1>
  <div class="py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-xl mx-auto">
      <div class="text-center">
        <p class="mt-4 text-lg leading-6 text-white">
          Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
          Sapien tortor lacus arcu.
        </p>
      </div>
      <div class="mt-12">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <div class="sm:col-span-2">
            <label for="first-name" class="block text-sm font-medium text-gray-500">Name</label>
            <div class="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="py-3 px-4 text-black block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-gray-500">Email</label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="py-3 px-4 block text-black w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-500">Message</label>
            <div class="mt-1">
              <textarea
                id="message"
                name="message"
                rows="4"
                class="py-3 px-4 block text-black w-full shadow-sm focus:ring-primary focus:border-primary border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
