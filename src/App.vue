<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import HeaderComponent from './components/HeaderComponent.vue';
  import ProfileLayout from './components/ProfileLayout.vue';
</script>

<template>
  <HeaderComponent />
  <main>
    <RouterView />
  </main>
  <ProfileLayout />
</template>

<style scoped lang="scss">
  main {
    padding: 1.5rem;
    border-radius: 0.75rem;
    background-color: $bg-sections;
  }
</style>
