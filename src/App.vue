<script setup lang="ts">
  import { NButton } from 'naive-ui'
  import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  <n-button type="primary">Envoyer</n-button>

  <RouterView />
</template>
