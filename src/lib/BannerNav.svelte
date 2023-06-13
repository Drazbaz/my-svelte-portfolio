<script>
    import { onMount } from "svelte";
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

<nav class="banner-nav">
    <BannerNavLink
        route="/"
        label={labels[0].label}
        active={labels[0].isActive}
        on:message={handleNavClick}
    />
</nav>
<nav class="banner-nav">
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
</style>
