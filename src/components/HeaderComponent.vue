<script setup lang="ts">
  import { computed, ref, type Component, watchEffect } from 'vue';
  import { useWindowSize } from '@/composables/useWindowSize';
  import { RouterLink } from 'vue-router';
  import { useThemePage } from '@/composables/useThemePage';
  import HomeIcon from './icons/HomeIcon.vue';
  import MenuIcon from './icons/MenuIcon.vue';
  import Moon from './icons/MoonIcon.vue';
  import Sun from './icons/SunIcon.vue';
  import Contrast from './icons/ContrastIcon.vue';
  import MenuComponent from './MenuComponent.vue';

  interface ObjTheme {
    icon: Component;
    theme: 'dark' | 'light' | 'system';
  }

  const { isLargeScreen } = useWindowSize();
  const { toggleTheme, theme } = useThemePage();
  const count = ref(0);
  const activeMenu = ref(false);
  const toggleIconMenu = ref(true);

  const themes: ObjTheme[] = [
    { icon: Moon, theme: 'dark' },
    { icon: Sun, theme: 'light' },
    { icon: Contrast, theme: 'system' },
  ];

  function sumCount() {
    count.value = (count.value + 1) % themes.length;
    const themeObj = themes[count.value];
    if (!themeObj) return;
    toggleTheme(themeObj.theme);
  }

  for (let i = 0; i < themes.length; i++) {
    if (theme === themes[i]?.theme) {
      count.value = i;
    }
  }

  watchEffect(() => {
    activeMenu.value = isLargeScreen.value;
    toggleIconMenu.value = !isLargeScreen.value;
  });

  const sizeIcon = computed(() => (isLargeScreen.value ? '24px' : '20px'));
  const sizeHome = computed(() => (isLargeScreen.value ? '28px' : '24px'));
</script>

<template>
  <div class="container-header">
    <RouterLink to="/">
      <HomeIcon class="home-icon" fill="#63B3FF" :width="sizeHome" :height="sizeHome" />
      <h1>JoseildoDev</h1>
    </RouterLink>
    <MenuComponent class="itens-menu" v-show="activeMenu" />
    <nav>
      <button @click="sumCount">
        <component :is="themes[count]?.icon" :width="sizeIcon" :height="sizeIcon">
        </component>
      </button>
      <button v-if="toggleIconMenu" @click="activeMenu = !activeMenu">
        <MenuIcon width="20px" height="20px" />
      </button>
    </nav>
  </div>
</template>

<style scoped lang="scss">
  %standard-button-hover {
    cursor: pointer;
    padding: 0.625rem;
    border-radius: 0.5rem;
    &:hover {
      background-color: $btn-secondary-hover;
    }
  }

  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem 1.5rem;
    border-radius: 0 0 0.75rem 0.75rem;
    background-color: $bg-sections;

    a {
      display: flex;
      align-items: center;
      transition: all 300ms ease-in-out;
      @extend %standard-button-hover;

      h1 {
        color: $primary-color;
        padding-top: 4px;
        margin-left: 0.5rem;
        font-weight: bold;
        font-size: $font-base-sm;
      }
    }

    .itens-menu {
      animation: fadeIn 300ms ease-in-out;
      position: absolute;
      top: 80px;
      right: 24px;

      &.active {
        top: 0;
        position: relative;
      }
    }

    nav {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      button {
        background-color: transparent;
        border: none;
        transition: all 300ms ease-in-out;
        @extend %standard-button-hover;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @include media('desktop') {
    .container-header {
      a > h1 {
        padding-top: 2px;
        font-size: $font-base-lg;
        letter-spacing: 1.1px;
      }
    }
  }
</style>
