<script>
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
</script>

<nav id="home-nav" class="banner-nav">
    <BannerNavLink
        route="/"
        label={labels[0].label}
        active={labels[0].isActive}
        on:message={handleNavClick}
    />
    <div id="burger-menu">
        <div id="bar-1" class="bar" />
        <div id="bar-2" class="bar" />
        <div id="bar-3" class="bar" />
    </div>
</nav>
<nav id="main-nav" class="banner-nav">
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
    #burger-menu {
        display: none;
    }
    @media only screen and (max-width: 1000px) {
        .banner-nav {
            padding: 0.5rem;
        }

        #burger-menu {
            display: block;
        }

        #burger-menu {
            width: 33px;
            height: 33px;
            display: list-item;
        }

        .bar {
            height: 3px;
            background: var(--color-4);
            margin: 2px;
        }

        #home-nav {
            background: var(--color-1);
            justify-content: space-between;
            display: flex;
        }
        #main-nav {
            justify-content: space-evenly;
            display: flex;
            background: var(--color-2);
        }
    }
</style>
