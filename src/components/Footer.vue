<template>
  <footer>
    <section>
      <article>
        <RouterLink to="/legals">Mentions légales</RouterLink>
        <RouterLink to="/data">Données</RouterLink>
      </article>
    </section>
    <div class="social">
      <a href=""><i class="fa-brands fa-snapchat fa-1x"></i></a>
      <a href=""><i class="fa-brands fa-instagram fa-1x"></i></a>
      <a href=""><i class="fa-brands fa-linkedin fa-1x"></i></a>
      <a href=""><i class="fa-brands fa-facebook fa-1x"></i></a>
      <a href=""><i class="fa-brands fa-discord fa-1x"></i></a>
      <a hre><i class="fa-brands fa-github fa-1x"></i></a>
    </div>
  </footer>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.social {
  * {
    margin: 0 0.5rem;
  }
}
</style>
