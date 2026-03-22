<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import PostItem from '@/components/PostItem.vue';
  import ArrowIcon from '@/components/icons/ArrowIcon.vue';

  import { useDataPost } from '@/composables/useDataPost';
  import type { DataPost } from '@/types/types';

  const { dataPost } = useDataPost();
  const arraySeparatingPosts = ref<DataPost[][]>([]);
  const countSectionPost = ref(0);

  function separatingArrays(arr: DataPost[]) {
    arraySeparatingPosts.value = [];

    for (let i = 0; i < arr.length; i += 3) {
      if (arr.slice(i, i + 3).length == 1) {
        arraySeparatingPosts.value.push(arr.slice(i - 2, i + 3));
        return;
      }
      if (arr.slice(i, i + 3).length == 2) {
        arraySeparatingPosts.value.push(arr.slice(i - 1, i + 3));
        return;
      }
      arraySeparatingPosts.value.push(arr.slice(i, i + 3));
    }
  }

  function subtractCountSectionPost() {
    if (countSectionPost.value <= 0) {
      return;
    }
    countSectionPost.value--;
  }

  function sumCountSectionPost() {
    if (countSectionPost.value + 1 == arraySeparatingPosts.value.length) {
      return;
    }
    countSectionPost.value++;
  }

  onMounted(() => {
    separatingArrays(dataPost.value.reverse());
  });
</script>

<template>
  <div class="container-home">
    <PostItem
      v-for="post in arraySeparatingPosts[countSectionPost]"
      :key="post.id"
      class="post-item"
      :post="post" />
  </div>
  <div class="container-navegation">
    <button @click="subtractCountSectionPost">
      <ArrowIcon fill="#090e13" />
    </button>
    <p>{{ countSectionPost + 1 }}</p>
    <button @click="sumCountSectionPost">
      <ArrowIcon fill="#090e13" />
    </button>
  </div>
</template>

<style scoped lang="scss">
  $color-line: $btn-regular;
  .container-home {
    min-height: 490px;
    @extend %standard-section;

    .post-item {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px dashed $color-line;
      cursor: pointer;
    }
  }
  .container-navegation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 20px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 0.375rem;
      background-color: $bg-sections;
      cursor: pointer;
      transition: 200ms ease-in-out;

      &:hover {
        background-color: $primary-color;
      }
    }

    p {
      color: $bg-sections;
      font-weight: bold;
      width: 50px;
      height: 50px;
      background-color: $primary-color;
      border-radius: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:last-child {
      button:last-child {
        transform: rotate(180deg);
      }
    }
  }

  @include media('desktop') {
    .container-home {
      padding: 28px;
    }
  }
</style>
