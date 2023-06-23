<script>
    import { createEventDispatcher } from "svelte";
    import sprite from "/HavelockSprite-01.svg";

    export let route = "#";
    export let label = "#";
    export let active = false;
    export let disable = false;

    let visible = false;
    let hovered = false;
    $: {
        if (active) {
            hovered = false;
        }
        visible = active;
    }

    const dispatch = createEventDispatcher();

    const BURGERMENUANIMATIONTIME = 200;

    function clickEvent(event) {
        dispatch("message", {
            clickedLink: label,
        });

        let isBurgerMenuVisible = document.querySelector(
            "button.hamburger.is-active"
        )
            ? true
            : false;
        if (isBurgerMenuVisible) {
            event.preventDefault();
            setTimeout(() => {
                window.location.href = event.target.href;
            }, BURGERMENUANIMATIONTIME);
        }
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
        class:disable
        class:hovered
        on:click={clickEvent}
        on:mouseenter={mouseEnterEvent}
        on:mouseleave={mouseLeaveEvent}
        >{label}
    </a>
    {#if disable == true}
        <span class="tooltip">Coming Soon.</span>
    {/if}
    <img class="sprite" class:visible src={sprite} alt="havelock-gif" />
    <br />
</div>

<style>
    .banner-nav-link {
        display: inline;
        padding: 1rem;
        margin-inline: 0.2rem;
    }

    a {
        font-size: 22px;
        text-decoration: none;
        color: var(--color-4);
    }

    .active {
        color: var(--color-4);
    }

    .disable {
        pointer-events: none;
        opacity: 0.5;
    }

    .hovered {
        color: var(--color-2);
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

    .tooltip {
        z-index: 1;
        position: absolute;
        visibility: hidden;
        display: none;

        border-radius: 5px;
        padding: 0.2rem;

        color: var(--color-3);
        background: var(--color-4);
    }

    .banner-nav-link:hover .tooltip {
        visibility: visible;
        display: inline;
    }

    @media only screen and (max-width: 1000px) {
        .banner-nav-link {
            padding: 0;
        }
    }
</style>
