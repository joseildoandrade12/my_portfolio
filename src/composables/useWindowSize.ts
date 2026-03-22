import { ref, onMounted, onUnmounted, computed } from 'vue';

export function useWindowSize() {
  const width = ref(window.innerWidth);

  const updateWidth = () => {
    width.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });

  // atalho para o breakpoint de 860px
  const isLargeScreen = computed(() => width.value >= 860);

  return { width, isLargeScreen };
}
