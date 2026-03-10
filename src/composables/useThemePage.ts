import { ref } from 'vue';
const themePage = ref('');

export function useThemePage() {
  const htmlElement = document.documentElement;

  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  function toggleTheme(newTheme: 'dark' | 'light' | 'system') {
    themePage.value = newTheme;
    localStorage.setItem('theme', newTheme);

    const targetTheme = newTheme === 'system' ? getSystemTheme() : newTheme;
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(targetTheme);
  }

  return { toggleTheme, theme: themePage.value };
}
