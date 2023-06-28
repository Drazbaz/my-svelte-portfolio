import HomePage from "./lib/HomePage.svelte";
import ProjectsPage from "./lib/ProjectsPage.svelte";

export const routes = [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectsPage }
];