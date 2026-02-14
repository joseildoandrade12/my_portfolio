<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import ArrowIcon from './icons/ArrowIcon.vue';
  import ShareIcon from './icons/ShareIcon.vue';
</script>

<template>
  <ul >
    <li>
      <RouterLink to="/">
        <p>Home</p>
        <ArrowIcon fill="#63B3FF" />
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/projects">
        <p>Projetos</p>
        <ArrowIcon fill="#63B3FF" />
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/about">
        <p>Sobre</p>
        <ArrowIcon fill="#63B3FF" />
      </RouterLink>
    </li>
    <li>
      <a target="blank" href="">
        <p>GitHub</p>
        <ShareIcon fill="#63B3FF" />
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
        font-size: 0.875rem;

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
</style>
