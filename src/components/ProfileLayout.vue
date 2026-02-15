<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useGithubProfile } from '@/composables/useGithubProfile';
  import InstagramIcon from './icons/InstagramIcon.vue';
  import EmailIcon from './icons/EmailIcon.vue';
  import LinkedinIcon from './icons/LinkedinIcon.vue';
  import GithubIcon from './icons/GithubIcon.vue';

  const { profile, errorProfile, loadingProfile, fetchProfile } =
    useGithubProfile();

  onMounted(() => {
    fetchProfile('joseildoandrade12');
  });
</script>
<template>
  <div class="loading" v-if="loadingProfile"></div>
  <div class="container-profile" v-if="!loadingProfile">
    <div class="image-profile">
      <img :src="profile?.avatar_url" alt="image profile" />
    </div>
    <h2>Joseildo Andrade</h2>
    <div class="spacing"></div>
    <p>
      {{ profile?.bio }}
    </p>
    <div class="container-icons-profile">
      <a href="https://www.instagram.com/juniorandrade12_/" target="_blank"
        ><InstagramIcon width="28" height="28" :fill="'#ffffffe6'"
      /></a>
      <a href="mailto:joseildoandrade1405@gmail.com" target="_blank"
        ><EmailIcon width="28" height="28" :fill="'#ffffffe6'"
      /></a>
      <a href="https://www.linkedin.com/in/joseildo-andrade/" target="_blank"
        ><LinkedinIcon width="28" height="28" :fill="'#ffffffe6'"
      /></a>
      <a :href="profile?.html_url" target="_blank"
        ><GithubIcon width="28" height="28" :fill="'#ffffffe6'"
      /></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
  $background-icons: $btn-regular;
  $background-icons-hover: $btn-regular-hover;

  .loading {
    margin: auto;
    width: 25px;
    height: 25px;
    border: 5px solid $primary-color;
    border-top: 5px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .container-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    background-color: $bg-sections;
    border-radius: 0.75rem;

    .image-profile {
      width: 160px;
      height: 160px;
      border-radius: 0.75rem;
      overflow: hidden;
      margin-bottom: 0.75rem;
      box-shadow: 4px 4px 5px rgb(0, 0, 0, 0.1);
      img {
        width: 100%;
        height: 100%;
      }
    }

    h2 {
      color: $color-title;
      font-size: $font-base-size;
      margin-bottom: 0.75rem;
    }

    .spacing {
      width: 16px;
      height: 4px;
      background-color: $primary-color;
      border-radius: 6px;
      margin-bottom: 0.375rem;
    }

    p {
      color: $color-description;
      font-size: $font-base-sm;
      text-align: center;
      margin-bottom: 0.75rem;
    }

    .container-icons-profile {
      display: flex;
      gap: 1rem;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background-color: $background-icons;
        border-radius: 0.375rem;
        transition: 200ms ease-in-out;

        &:hover {
          background-color: $background-icons-hover;
        }
      }
    }
  }
</style>
