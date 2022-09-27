<template>
  <footer>
    <section>
      <article>
        <RouterLink to="/legals">Mentions légales</RouterLink>
        <RouterLink to="/data">Données</RouterLink>
      </article>
    </section>
    <div class="social">
      <i class="fa-brands fa-snapchat fa-1x"></i>
      <i class="fa-brands fa-instagram fa-1x"></i>
      <i class="fa-brands fa-linkedin fa-1x"></i>
      <i class="fa-brands fa-facebook fa-1x"></i>
      <i class="fa-brands fa-discord fa-1x"></i>
      <i class="fa-brands fa-github fa-1x"></i>
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
