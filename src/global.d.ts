/// <reference types="@sveltejs/kit" />

interface Locals {
  userid: string;
}

interface ImportMeta {
  env: {
    VITE_GITHUB_TOKEN: string;
  };
}
