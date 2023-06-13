<script>
  import Me from "./assets/IMG-20180809-WA0012.jpg";
  import Banner from "./lib/Banner.svelte";
</script>

<Banner />
<div id="hero">
  <div id="hero-contents">
    <h1 id="hero-header">Hello there, <br /> I am Drazen</h1>
  </div>
  <img id="hero-image" src={Me} alt="Portrait" />
</div>
<div id="footer">
  <h1>Innovative . Passionate . Lalalalala . Blahblah blah</h1>
</div>

<style>
  #hero {
    padding: 2rem;
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

  #footer {
    border-top: 1px solid var(--color-4);
  }

  @media only screen and (max-width: 1000px) {
    #hero {
      display: block;
      padding: 0;
    }
  }
</style>
