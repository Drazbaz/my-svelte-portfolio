<script>
    import { onMount } from "svelte";
    import data from "../data/profile.json";

    let comments = [];
    onMount(async () => {
        comments = data;
    });
</script>

<section id="profile">
    <h2 id="profile-header">Profile</h2>
    {#each comments as comment}
        <p class="profile-comment">{comment.comment}</p>
    {/each}
</section>

<style>
    #profile-header {
        padding-block: 1rem;
    }
</style>
