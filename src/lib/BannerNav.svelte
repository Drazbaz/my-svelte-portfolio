<script>
    import { Hamburger } from "svelte-hamburgers";
    import BannerNavLink from "./BannerNavLink.svelte";

    let labels = [
        { label: "Home", isActive: true },
        { label: "About", isActive: false },
        { label: "Projects", isActive: false },
        { label: "Blog", isActive: false },
    ];

    function handleNavClick(event) {
        const clickedLabel = event.detail.clickedLink;
        labels = labels.map((item) => {
            if (item.label === clickedLabel) {
                return { ...item, isActive: true };
            } else {
                return { ...item, isActive: false };
            }
        });
    }

    export let open = false;
</script>

<nav id="home-nav" class="banner-nav">
    <BannerNavLink
        route="/"
        label={labels[0].label}
        active={labels[0].isActive}
        on:message={handleNavClick}
    />
    <div id="hamburger-container">
        <Hamburger id="hamburger-menu" bind:open />
    </div>
</nav>

<nav id="main-nav" class="banner-nav" class:open>
    <BannerNavLink
        route="#about"
        label={labels[1].label}
        active={labels[1].isActive}
        on:message={handleNavClick}
    />
    <BannerNavLink
        route="#projects"
        label={labels[2].label}
        active={labels[2].isActive}
        on:message={handleNavClick}
    />
    <BannerNavLink
        route="#blog"
        label={labels[3].label}
        active={labels[3].isActive}
        on:message={handleNavClick}
    />
</nav>

<style>
    .banner-nav {
        padding: 1rem;
    }

    #hamburger-container {
        display: none;
    }

    @media only screen and (max-width: 1000px) {
        .banner-nav {
            padding: 0.5rem;
        }

        #home-nav {
            background: var(--color-1);
            justify-content: space-between;
            display: flex;
        }

        #hamburger-container {
            height: 33px;
            width: 33px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #main-nav {
            justify-content: space-evenly;
            display: none;
            background: var(--color-2);
        }

        .open {
            display: flex !important;
        }
    }
</style>
