<template>
  <div
    :class="{ 'bg-gray-800': themeState == 'dark' }"
    class="main-layout bg-gray-300 w-full h-screen"
  >
    <div class="navbar">
      <Navigator />
    </div>
    <div class="router">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Navigator from "@/components/navigator/index.vue";
import { computed } from "vue";
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();
const themeState = computed(() => {
  return themeStore.theme;
});
</script>
