<template>
    <header>
        <article>
                <RouterLink to="/home">Accueil</RouterLink>
        </article>
         <article>
                <RouterLink to="/studies"><em class="fas fa-person" /> A propos</RouterLink>
                <RouterLink to="/contact"><em class="fas fa-graduation-cap" /> Formation</RouterLink>
                <RouterLink to="/experience"><em class="fas fa-briefcase" /> Travaux</RouterLink>
                <RouterLink to="/contact"><em class="fas fa-comment" /> Contact</RouterLink>
            </article>
    </header>
</template>

<script lang="ts">
export default {

}
</script>

<style>

.social * {
    margin: 0 0.5rem;
}
</style>