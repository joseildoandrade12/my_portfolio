import { ref } from 'vue';
import { repositoryService } from '@/services/repositoryService';
import type { DataRepository } from '@/types/types';

export function useRepositoryService() {
  const repository = ref<DataRepository | null>(null);
  const error = ref<string | null>(null);
  const loading = ref(false);

  const fetchRepository = async (username: string, nameRepository: string) => {
    loading.value = true;
    error.value = null;

    try {
      repository.value = await repositoryService.getRepository(
        username,
        nameRepository
      );
    } catch (err) {
      repository.value = null;
      error.value =
        err instanceof Error
          ? err.message
          : 'Failed to fetch GitHub repository';
    } finally {
      loading.value = false;
    }
  };

  return {
    repository,
    errorRepository: error,
    loadingRepository: loading,
    fetchRepository,
  };
}
