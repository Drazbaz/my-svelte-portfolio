<script>
    import BannerNav from "./BannerNav.svelte";
</script>

<div id="banner">
    <BannerNav />
</div>

<style>
    #banner {
        padding: 1rem;
        color: var(--color-1);
        display: flex;
        justify-content: space-between;
        position: static;
        border-bottom: 1px solid var(--color-4);
    }

    @media only screen and (max-width: 1000px) {
        #banner {
            display: block;
            position: sticky;
            top: 0;
            padding: 0;
            border: none;
            box-shadow: 0px 0px 6px var(--color-4);
        }
    }
</style>
