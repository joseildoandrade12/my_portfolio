<script setup lang="ts">
  import type { PropsIcon } from '@/types/types';
  const props = defineProps<PropsIcon>();
</script>

<template>
  <svg
    :width="props.width || '24'"
    :height="props.height || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 4L17 6L11 12L17 18L15 20L7 12L15 4Z"
      :fill="props.fill" />
  </svg>
</template>

<style scoped lang="scss">
  .dark svg {
    fill: #63B3FF;
  }
  .light svg {
    fill: #3275b4;
  }
</style>
