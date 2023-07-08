<script>
  import { onMount } from "svelte";

  import HomePage from "./lib/home/HomePage.svelte";
  import ExperiencePage from "./lib/experience/ExperiencePage.svelte";
  import ProjectPage from "./lib/projects/ProjectPage.svelte";

  let currentPath = "";

  const navigateTo = (path) => {
    currentPath = path;
    window.history.pushState({}, "", path);
  };

  onMount(() => {
    window.addEventListener("popstate", () => {
      currentPath = window.location.pathname;
    });

    currentPath = window.location.pathname;
  });
</script>

<nav>
  <a href="/" on:click|preventDefault={() => navigateTo("/")}> Home </a>
  <a
    href="/experience"
    on:click|preventDefault={() => navigateTo("/experience")}
  >
    Experience
  </a>
  <a href="/project" on:click|preventDefault={() => navigateTo("/project")}>
    Project
  </a>
</nav>
{#if currentPath === "/"}
  <HomePage />
{:else if currentPath === "/experience"}
  <ExperiencePage />
{:else if currentPath === "/project"}
  <ProjectPage />
{:else}
  <p>404 - Page Not Found</p>
{/if}
