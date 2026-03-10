<script setup lang="ts">
  import type { PropsIcon } from '@/types/types';
  const props = defineProps<PropsIcon>();
</script>

<template>
  <svg
    :width="props.width || 24"
    :height="props.height || 24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 8C7.65685 8 9 6.65685 9 5C9 3.34315 7.65685 2 6 2C4.34315 2 3 3.34315 3 5C3 6.65685 4.34315 8 6 8Z"
      :stroke="props.fill"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
      :stroke="props.fill"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z"
      :stroke="props.fill"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M6 8V9C6 9.79565 6.31607 10.5587 6.87868 11.1213C7.44129 11.6839 8.20435 12 9 12H15C15.7956 12 16.5587 11.6839 17.1213 11.1213C17.6839 10.5587 18 9.79565 18 9V8M12 12V16"
      :stroke="props.fill"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>

<style scoped lang="scss">
  .dark svg {
    fill: #ffffffb3;
  }
  .light svg {
    fill: #181e24;
  }
</style>
