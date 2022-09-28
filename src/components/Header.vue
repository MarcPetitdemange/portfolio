<template>
  <header>
    <article>
      <RouterLink to="/home">Accueil</RouterLink>
    </article>
    <article>
      <n-dropdown
        trigger="click"
        :options="languages"
        :show-arrow="true"
        @select="(selectedLocale: any) => ($i18n.locale = selectedLocale)"
      >
        <n-button round type="info"
          ><em class="fas fa-language" /> &nbsp;
          {{ mapLanguages.get($i18n.locale) }}</n-button
        >
      </n-dropdown>

      <RouterLink to="/studies"
        ><em class="fas fa-person" /> A propos</RouterLink
      >
      <RouterLink to="/contact"
        ><em class="fas fa-graduation-cap" /> Formation</RouterLink
      >
      <RouterLink to="/experience"
        ><em class="fas fa-briefcase" /> Travaux</RouterLink
      >
      <RouterLink to="/contact"
        ><em class="fas fa-comment" /> Contact</RouterLink
      >
    </article>
  </header>
</template>

<script lang="ts">
export default {
  data: function () {
    let mapLanguages = new Map([
      ["fr", "Français"],
      ["en", "English"],
      ["de", "Deutsch"],
    ]);
    let tableauLocales: any = [];
    (this as any).$i18n.availableLocales.forEach((locale: any) => {
      tableauLocales.push({
        key: locale,
        label: mapLanguages.get(locale),
      });
    });

    return {
      languages: tableauLocales,
      mapLanguages: mapLanguages,
    };
  },
};
</script>

<style></style>
