import type { DataRepository } from "@/types/types";

export const repositoryService = {
  async getRepository(username: string, nameRepository: string): Promise<DataRepository> {
    const response = await fetch(`https://api.github.com/repos/${username}/${nameRepository}`);

    if(response.status === 404) throw new Error('GitHub repository not found');
    if (!response.ok) throw new Error('Failed to fetch GitHub repository');

    return response.json();
  }
}