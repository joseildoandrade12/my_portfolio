import { ref } from 'vue';
import type { DataPost } from '@/types/types';
import posts from '@/data/posts.json';

export function useDataPost() {
  const dataPost = ref<DataPost[]>([]);

  posts.forEach((post) => {
    dataPost.value.push({
      id: post.id,
      title: post.title,
      body: post.body,
      date: post.date,
      category: post.category
    });
  });
  return { dataPost };
}
