import { writable } from "svelte/store";

export const projects = writable([]);

const fetchProjects = async () => {
  const url = "https://api.github.com/users/lokecarlsson/repos";
  const response = await fetch(url, {
    headers: {
      Authorization: "token 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",
    },
  });
  const data = await response.json();

  projects.set(data);
};

fetchProjects();
