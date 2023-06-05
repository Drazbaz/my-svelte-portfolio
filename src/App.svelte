<script>
  import BannerNav from "./lib/BannerNav.svelte";
  import Me from "./assets/IMG-20180809-WA0012.jpg";
</script>

<div id="banner">
  <BannerNav />
</div>
<div id="hero">
  <div id="hero-contents">
    <h1 id="hero-header">Hello there, <br /> I am Drazen</h1>
  </div>
  <img id="hero-image" src={Me} alt="Portrait" />
</div>
<main />

<style>
  #banner {
    padding: 1rem;
    color: var(--p-font-color);
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: static;
  }

  #hero {
    padding: 1rem;
    display: flex;
  }

  #hero-contents {
    flex: 1;
  }

  #hero-header {
    margin-top: 50%;
    font-size: 70px;
  }

  #hero-image {
    flex: 1;
    height: 50%;
    width: 50%;
    right: 0;
  }
</style>
