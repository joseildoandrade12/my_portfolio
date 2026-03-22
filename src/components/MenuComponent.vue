<script setup lang="ts">
  import { computed } from 'vue';
  import { useWindowSize } from '@/composables/useWindowSize';
  import { RouterLink } from 'vue-router';
  import ArrowIcon from './icons/ArrowIcon.vue';
  import ShareIcon from './icons/ShareIcon.vue';

  const { isLargeScreen } = useWindowSize();
  const toggleIcons = computed(() => !isLargeScreen.value);
</script>

<template>
  <ul :class="{ active: !toggleIcons }">
    <li>
      <RouterLink to="/">
        <p>Home</p>
        <ArrowIcon fill="#63B3FF" v-if="toggleIcons" />
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/projects">
        <p>Projetos</p>
        <ArrowIcon fill="#63B3FF" v-if="toggleIcons" />
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/about">
        <p>Sobre</p>
        <ArrowIcon fill="#63B3FF" v-if="toggleIcons" />
      </RouterLink>
    </li>
    <li>
      <a target="blank" href="https://github.com/joseildoandrade12">
        <p>GitHub</p>
        <ShareIcon fill="#63B3FF" v-if="toggleIcons" />
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  ul {
    background-color: $bg-principal;
    border-radius: 0.75rem;
    padding: 0.375rem;

    &.active {
      display: flex;
      background-color: transparent;
    }

    li {
      cursor: pointer;
      border-radius: 0.5rem;
      transition: all 300ms ease-in-out;

      a {
        display: flex;
        align-items: center;
        padding: 0.625rem;
        font-size: $font-base-sm;

        p {
          color: $color-description;
          font-weight: bold;
          margin-right: 1.125rem;
          width: 54px;
        }

        svg {
          width: 16px;
          height: 16px;
          transform: rotate(180deg);
        }
      }

      &:hover {
        background-color: $btn-secondary-hover;

        p {
          color: $primary-color;
        }
      }

      &:last-child {
        a svg {
          transform: rotate(0deg);
        }
      }
    }
  }

  @include media('desktop') {
    ul {
      gap: 8px;
      li > a {
        text-align: center;
        padding: 0.875rem;
        font-size: $font-base-lg;
        p {
          width: 80px;
          margin: 0;
          text-align: center;
        }
      }
    }
  }
</style>
