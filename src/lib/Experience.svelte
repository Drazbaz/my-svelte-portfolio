<script>
    import { onMount } from "svelte";
    import data from "../data/experience.json";

    let jobs = [];
    onMount(async () => {
        jobs = data;
    });
</script>

<section id="experience">
    <h2 id="experience-header">Experience</h2>
    <ul id="experience-list">
        {#each jobs as job}
            <li id="experience-item">
                <h3>{job.title}, {job.company}, {job.city}</h3>
                <h4>{job.dateFrom} - {job.dateTo}</h4>
                {#each job.responsibilities as respsonsibility}
                    <p>{respsonsibility}</p>
                {/each}
            </li>
        {/each}
    </ul>
</section>

<style>
    #experience-list {
        list-style: none;
    }

    #experience-item {
        padding: 0.5rem;
    }
</style>
