<script setup lang="ts">
  import { computed, onMounted } from 'vue';
  import { useDataPost } from '@/composables/useDataPost';
  import { useWindowSize } from '@/composables/useWindowSize';
  import type { DataPost } from '@/types/types';
  import { Marked } from 'marked';
  import { markedHighlight } from 'marked-highlight';
  import hljs from 'highlight.js';
  import 'highlight.js/styles/base16/framer.css';

  import CalendarIcon from '@/components/icons/CalendarIcon.vue';
  import HashtagIcon from '@/components/icons/HashtagIcon.vue';
  import ArrowIcon from '@/components/icons/ArrowIcon.vue';
  import router from '@/router';

  const marked = new Marked(
    markedHighlight({
      emptyLangClass: 'hljs',
      langPrefix: 'hljs language-',
      highlight(code, lang, info) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
    })
  );

  const { dataPost } = useDataPost();
  const { isLargeScreen } = useWindowSize();
  const props = defineProps(['id']);
  const nxPost = computed(() => !(props.id < dataPost.value.length));
  const pvPost = computed(() => !(props.id > 1));

  const contentPost = computed(() => {
    return dataPost.value[props.id - 1] as DataPost;
  });

  const html = computed(() => {
    return contentPost.value
      ? (marked.parse(contentPost.value.body) as string)
      : '';
  });

  const sizeIcon = computed(() => (isLargeScreen.value ? '20px' : '16px'));

  function nextPost() {
    if (props.id == dataPost.value.length) {
      return;
    }
    router.push(`/projects/post/${+props.id + 1}`);
  }

  function previousPost() {
    if (props.id == 1) {
      return;
    }
    router.push(`/projects/post/${+props.id - 1}`);
  }

  onMounted(() => {
    if (!dataPost.value[props.id - 1]) {
      router.push('/404');
    }
  });
</script>

<template>
  <div class="container-content" v-if="contentPost">
    <h1>{{ contentPost?.title }}</h1>
    <div class="container-tags">
      <div class="container-icons">
        <div class="icon calendar">
          <CalendarIcon :height="sizeIcon" :width="sizeIcon" />
        </div>
        <p>{{ contentPost?.date }}</p>
      </div>
      <div class="container-icons">
        <div class="icon calendar">
          <HashtagIcon :height="sizeIcon" :width="sizeIcon" />
        </div>
        <p>{{ contentPost?.category }}</p>
      </div>
    </div>
    <div class="spacing"></div>
    <div class="content" v-html="html"></div>
  </div>

  <div class="container-buttons-footer">
    <button class="previous" @click="previousPost" :disabled="pvPost">
      <ArrowIcon />
      Postagem anterior
    </button>

    <button class="next" @click="nextPost" :disabled="nxPost">
      Próxima postagem
      <ArrowIcon />
    </button>
  </div>
</template>

<style scoped lang="scss">
  $color-line: $btn-regular;
  $background-icon: $btn-regular;

  .container-content {
    @extend %standard-section;

    h1 {
      font-size: $font-base-3xl;
      font-weight: bold;
      margin-bottom: 1rem;

      &::before {
        content: '';
        display: inline-block;
        width: 4px;
        border-radius: 0.375rem;
        margin-right: 0.5rem;
        margin-left: -0.5rem;
        height: 24px;
        background-color: $primary-color;
      }
    }

    .container-tags {
      display: flex;
      margin-bottom: 1rem;

      & .container-icons {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-right: 1rem;

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

    .spacing {
      width: 100%;
      border: 1px dashed $color-line;
      margin-bottom: 24px;
    }
  }

  .container-buttons-footer {
    background-color: $bg-principal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;
    gap: 20px;

    button {
      display: flex;
      align-items: center;
      width: 100%;
      cursor: pointer;
      font-size: $font-base-lg;
      font-weight: bold;
      color: $color-description;
      background-color: $bg-sections;
      border: none;
      border-radius: 0.5rem;
      padding: 1.5rem;

      svg {
        margin: 0 1rem;
      }
      &:hover {
        background-color: $btn-secondary-hover;
      }
    }

    & button:last-child {
      justify-content: end;
      svg {
        transform: rotate(180deg);
      }
    }

    .previous {
      text-align: start;
    }

    .next {
      text-align: end;
    }
  }

  @include media('desktop') {
    .container-content {
      h1 {
        font-size: $font-base-4xl;
      }

      .container-tags > .container-icons {
        p {
          font-size: $font-base-size;
        }
        .icon {
          width: 32px;
          height: 32px;
        }
      }
    }
  }

  @include media('tablet') {
    .container-buttons-footer {
      display: block;
      button {
        margin-bottom: 16px;
      }
    }
  }
</style>
