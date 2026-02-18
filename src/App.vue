<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import HeaderComponent from './components/HeaderComponent.vue';
  import ProfileLayout from './components/ProfileLayout.vue';
</script>

<template>
  <div class="container-image"><img src="../public/sl_031420_28950_10.jpg" alt=""></div>
  <HeaderComponent class="menu"/>
  <main>
    <RouterView />
  </main>
  <ProfileLayout />
</template>

<style scoped lang="scss">
  .container-image {
    width: 100vw;
    height: 320px;
    z-index: -999;
    position: absolute;
    left: 0;
    top: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .menu {
    margin-bottom: 180px;
  }
  main {
    padding: 1.5rem;
    border-radius: 0.75rem;
    background-color: $bg-sections;
    margin-bottom: 24px;
  }
</style>
