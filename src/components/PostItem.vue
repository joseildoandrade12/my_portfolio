<script setup lang="ts">
  import { computed } from 'vue';
  import { RouterLink } from 'vue-router';
  import type { DataPost } from '@/types/types';
  import { useWindowSize } from '@/composables/useWindowSize';
  import ArrowIcon from './icons/ArrowIcon.vue';
  import CalendarIcon from './icons/CalendarIcon.vue';
  import BookIcon from './icons/BookIcon.vue';
  const props = defineProps<{ post: DataPost }>();

  const { isLargeScreen } = useWindowSize();
  const sizeIcon = computed(() => (isLargeScreen.value ? '20px' : '16px'));
</script>

<template>
  <div class="container-post" :id="`${props.post.id}`">
    <RouterLink :to="`/projects/post/${props.post.id}`">
      <h1>
        {{ props.post.title }}
        <ArrowIcon fill="#63B3FF" width="32px" height="32px" />
      </h1>
      <div class="informations-post">
        <div class="date">
          <div class="icon date">
            <CalendarIcon :width="sizeIcon" :height="sizeIcon" />
          </div>
          {{ props.post.date }}
        </div>
        <div class="category">
          <div class="icon category">
            <BookIcon :width="sizeIcon" :height="sizeIcon" />
          </div>
          {{ props.post.category }}
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus rem
        vitae aut eum eligendi debitis nostrum qui.
      </p>
      <div class="informations-reading">
        <div class="words">156 words</div>
        |
        <div class="time-reading">1 minute</div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
  $background-icon: $btn-regular;
  $color-line: $btn-regular;

  .container-post {
    &:hover {
      h1 {
        color: $primary-color;
      }
    }

    h1 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: $color-title;
      font-size: $font-base-3xl;
      font-weight: bold;
      margin-bottom: 1rem;
      transition: all 200ms ease-in-out;

      svg {
        transform: rotate(180deg);
      }
    }

    .informations-post {
      font-size: $font-base-sm;
      color: $color-tags;
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;

      & > div {
        text-align: center;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        & .icon {
          width: 24px;
          height: 24px;
          background-color: $background-icon;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    p {
      color: $color-description;
      margin-bottom: 1rem;
    }

    .informations-reading {
      font-size: $font-base-sm;
      color: $color-tags;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  @include media('desktop') {
    .container-post {
      .informations-post {
        font-size: $font-base-size;
        div > .icon {
          width: 32px;
          height: 32px;
        }
      }

      p {
        font-size: $font-base-lg;
      }

      .informations-reading {
        font-size: $font-base-size;
      }
    }
  }
</style>
