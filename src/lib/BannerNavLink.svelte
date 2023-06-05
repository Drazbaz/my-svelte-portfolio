<script>
    import { createEventDispatcher } from "svelte";
    import sprite from "/HavelockSprite-01.svg";

    export let route = "#";
    export let label = "#";
    export let active = false;

    let visible = false;
    let hovered = false;
    $: {
        if (active) {
            hovered = false;
        }
        visible = active;
    }

    const dispatch = createEventDispatcher();
    function clickEvent() {
        dispatch("message", {
            clickedLink: label,
        });
    }

    function mouseEnterEvent() {
        if (!active) {
            hovered = true;
        }
    }
    function mouseLeaveEvent() {
        hovered = false;
    }
</script>

<div class="banner-nav-link">
    <a
        href={route}
        class:active
        class:hovered
        on:click={clickEvent}
        on:mouseenter={mouseEnterEvent}
        on:mouseleave={mouseLeaveEvent}>{label}</a
    >
    <img class="sprite" class:visible src={sprite} alt="havelock-gif" />
</div>

<style>
    .banner-nav-link {
        display: inline;
        padding: 1rem;
    }

    a {
        font-size: 22px;
        text-decoration: none;
        color: var(--p-font-color);
    }

    .active {
        color: #000000;
    }

    .hovered {
        color: var(--s-font-color);
    }

    .sprite {
        width: 32px;
        height: 32px;
        visibility: hidden;
        transform: translateY(7px);
    }
    .visible {
        visibility: visible;
    }
</style>
