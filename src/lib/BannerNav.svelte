<script>
    import { Hamburger } from "svelte-hamburgers";
    import BannerNavLink from "./BannerNavLink.svelte";

    let labels = [
        { label: "Home", isActive: true, isDisabled: false },
        { label: "About", isActive: false, isDisabled: true },
        { label: "Projects", isActive: false, isDisabled: false },
        { label: "Blog", isActive: false, isDisabled: true },
    ];

    export let open = false;

    function handleNavClick(event) {
        open = false;
        const clickedLabel = event.detail.clickedLink;
        labels = labels.map((item) => {
            if (item.label === clickedLabel) {
                return { ...item, isActive: true };
            } else {
                if (item.label == "Home") {
                    return { ...item, label: "Back To Home", isActive: false };
                } else {
                    return { ...item, isActive: false };
                }
            }
        });
    }
</script>

<nav id="home-nav" class="banner-nav">
    <BannerNavLink
        route="/"
        label={labels[0].label}
        active={labels[0].isActive}
        disable={labels[0].isDisabled}
        on:message={handleNavClick}
    />
    <div id="hamburger-container">
        <Hamburger id="hamburger-menu" bind:open --color="#232323" />
    </div>
</nav>

<nav id="main-nav" class="banner-nav" class:open>
    <BannerNavLink
        route="#about"
        label={labels[1].label}
        active={labels[1].isActive}
        disable={labels[1].isDisabled}
        on:message={handleNavClick}
    />
    <BannerNavLink
        route="#projects"
        label={labels[2].label}
        active={labels[2].isActive}
        disable={labels[2].isDisabled}
        on:message={handleNavClick}
    />
    <BannerNavLink
        route="#blog"
        label={labels[3].label}
        active={labels[3].isActive}
        disable={labels[3].isDisabled}
        on:message={handleNavClick}
    />
</nav>

<style>
    .banner-nav {
        padding: 1rem;
        display: flex;
    }

    #hamburger-container {
        display: none;
    }

    @media only screen and (max-width: 1000px) {
        .banner-nav {
            padding: 0.5rem;
        }

        #home-nav {
            background: var(--color-3);
            justify-content: space-between;
            display: flex;
        }

        #hamburger-container {
            height: 40px;
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #main-nav {
            display: none;
            padding-left: 2rem;
            padding-bottom: 2rem;
            transition: display 400ms ease-in-out;
        }

        @keyframes my-animation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        .open {
            animation: my-animation 400ms ease-in-out;
            display: block !important;
        }
    }
</style>
