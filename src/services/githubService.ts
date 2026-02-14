import type { DataGithub } from '@/types/types';

export const githubService = {
  async getProfile(username: string): Promise<DataGithub> {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (response.status === 404) throw new Error('GitHub user not found');
    if (!response.ok) throw new Error('Failed to fetch GitHub profile');

    return response.json();
  },
};
