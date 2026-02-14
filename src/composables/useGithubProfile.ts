import { ref } from 'vue';
import { githubService } from '@/services/githubService';
import type { DataGithub } from '@/types/types';

export function useGithubProfile() {
  const profile = ref<DataGithub | null>(null);
  const error = ref<string | null>(null);
  const loading = ref(false);

  const fetchProfile = async (username: string) => {
    loading.value = true;
    error.value = null;

    try {
      profile.value = await githubService.getProfile(username);
    } catch (err) {
      profile.value = null;
      error.value =
        err instanceof Error ? err.message : 'Failed to fetch GitHub profile';
    } finally {
      loading.value = false;
    }
  };

  return {
    profile,
    errorProfile: error,
    loadingProfile: loading,
    fetchProfile,
  };
}
