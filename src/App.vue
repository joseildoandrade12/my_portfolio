<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import HeaderComponent from './components/HeaderComponent.vue';
  import ProfileLayout from './components/ProfileLayout.vue';
  import { useThemePage } from './composables/useThemePage';

  const { toggleTheme } = useThemePage();
  const theme = localStorage.getItem('theme') as 'dark' | 'light' | 'system' | null;
  
  if (theme) {
    toggleTheme(theme);
  } else {
    toggleTheme('system');
  }
</script>

<template>
  <div class="container-image">
    <img src="../public/sl_031420_28950_10.jpg" alt="" />
  </div>
  <HeaderComponent class="menu" />
  <ProfileLayout />
  <main>
    <RouterView />
  </main>
  <footer>
    <div class="spacing"></div>
    <p>©Todos os direitos reservados</p>
  </footer>
</template>

<style scoped lang="scss">
  $color-line: $btn-regular;

  .container-image {
    width: 100%;
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
    margin-bottom: 24px;
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px;

    .spacing {
      width: 100%;
      border: 1px dashed $color-line;
      margin-bottom: 60px;
    }

    p {
      color: $color-description;
      margin-top: 0.75rem;
    }
  }
</style>
