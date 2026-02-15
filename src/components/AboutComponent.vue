<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useGithubProfile } from '@/composables/useGithubProfile';
  import { useRepositoryService } from '@/composables/useRepositoryService';

  const { profile, errorProfile, loadingProfile, fetchProfile } =
    useGithubProfile();

  const { repository, errorRepository, loadingRepository, fetchRepository } =
    useRepositoryService();

  onMounted(() => {
    fetchRepository('joseildoandrade12', 'my_portfolio');
    fetchProfile('joseildoandrade12');
  });
</script>

<template>
  <div class="container-sobre">
    <h1>Sobre</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui libero cum
      dolorem voluptatibus? Provident eveniet molestias, saepe culpa illo
      laborum fugiat recusandae maxime at assumenda iusto. Tempore itaque
      dolores autem?
    </p>
    <a :href="repository?.html_url" target="_blank">
      <div class="loading" v-if="loadingProfile || loadingRepository"></div>
      <div
        class="card-informations-github"
        v-if="!loadingProfile && !loadingRepository">
        <div class="header-card">
          <div class="picture-profile">
            <img :src="profile?.avatar_url" alt="Profile Picture" />
          </div>
          <p class="name-profile">{{ profile?.login }}</p>
          <p>/ {{ repository?.name }}</p>
        </div>
        <p>{{ repository?.description }}</p>
        <div class="footer-card">
          <div class="stars">{{ repository?.stargazers_count }}</div>
          <div class="forks">{{ repository?.forks_count }}</div>
          <div class="license">{{ repository?.license }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss">
  $background-hover-card: $background-elements;
  $color-p-hover: $background-elements;

  .container-sobre {
    h1 {
      color: $color-title;
      font: $font-base-3xl;
      font-weight: bold;
      margin-bottom: 2rem;
    }

    & > p {
      color: $color-description;
      margin-bottom: 1.5rem;
      text-align: justify;
    }

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

    .card-informations-github {
      background-color: $bg-principal;
      padding: 1.25rem;
      border-radius: 0.75rem;
      transition: 200ms ease-in-out;

      &:hover {
        background-color: $btn-regular-hover;

        .header-card > p {
          color: $color-p-hover;
        }
      }

      .header-card {
        .name-profile {
          color: $color-description;
          font-weight: normal;
        }
        p {
          color: $color-title;
          font-weight: bold;
        }

        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.75rem;

        .picture-profile {
          width: 24px;
          height: 24px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }

      & > p {
        font-size: $font-base-sm;
        color: $color-description;
        margin-bottom: 0.75rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .footer-card {
        color: $color-description;
        display: flex;
        gap: 1rem;
      }
    }
  }
</style>
