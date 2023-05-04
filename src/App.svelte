<script>
  import Contact from "./lib/Contact.svelte";
  import Experience from "./lib/Experience.svelte";
    import Header from "./lib/Header.svelte";
  import Nav from "./lib/Nav.svelte";
  import Profile from "./lib/Profile.svelte";
</script>
<Header></Header>
<bar></bar>
<flex>
  <aside>
    <section>
      <h2 class="section-header">Info</h2>
      <p class="label"><i class='fas fa-house-user'></i> 24 Manor Road, Mebourne, Market Harbarough, LE16 8DU</p>
      <p class="label"><i class='fas fa-at'></i> drazengordon@gmail.com</p>
      <p class="label"><i class='fas fa-mobile'></i> +447758918596</p>
    </section>
    <section>
      <h2 class="section-header">Skills</h2>

    </section>
  </aside>
  <main>
    <section>
      <h2 class="section-header">Personal Profile</h2>
     
     </section>
   <section>
    <h2 class="section-header">Work Experience</h2>
   
   </section>
   <section>
    <h2 class="section-header">Education</h2>
   </section>
  </main>
</flex>


<style>
  aside {
    flex:1.5;
  }
  main {
    flex: 2;
  }
</style>
