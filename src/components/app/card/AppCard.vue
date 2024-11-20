<template>
  <div
    :style="{
      width: `${width}`,
      height: `${height}`,
    }"
    class="bg-gray-100 rounded-lg"
    :class="{ 'bg-gray-600': themeState == 'dark' }"
  >
    <slot name="content"></slot>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/stores/theme/index.js";
import { computed } from "vue";

const themeStore = useThemeStore();
const themeState = computed(() => {
  return themeStore.theme;
});

const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "",
  },
});
</script>
