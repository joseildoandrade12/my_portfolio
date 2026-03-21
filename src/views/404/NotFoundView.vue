<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
    <h1>404</h1>
    <p>Ooops!...Página não encontrada.</p>
    <RouterLink to="/">
      <p>VOLTAR AO HOME</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 360px;
      color: $bg-principal;
      -webkit-text-stroke-width: 4px; /* Espessura da borda */
      -webkit-text-stroke-color: $primary-color;
      margin-bottom: 1.5rem;
    }

    & > p {
      color: $color-title;
      font-size: $font-base-2xl;
      margin-bottom: 2.5rem;
    }

    a {
      width: 250px;
      background-color: $background-elements;
      padding: 1.25rem;
      border-radius: 0.5rem;
      text-align: center;
      font-size: $font-base-xl;
      color: $bg-principal;
      transition: all 300ms;
    }

    a:hover {
      background: $primary-color;
    }
  }

  @include media('tablet') {
    .container {
      h1 {
        font-size: 240px;
      }
    }
  }
</style>
