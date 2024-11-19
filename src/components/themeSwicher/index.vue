<template>
  <div @click="changeTheme" class="container mx-4 cursor-pointer">
    <div v-if="themeState == 'light'" class="light-state"></div>
    <div v-else class="dark-state"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { usethemeStore } from "@/stores/theme";

const themeStore = usethemeStore();
const themeState = computed(() => {
  return themeStore.theme;
});

const changeTheme = () => {
  themeStore.changeThemeStatus();
};
</script>

<style scoped>
.container {
  width: 30px;
  height: 15px;
}
.light-state {
  background-color: black;
  width: 30px;
  height: 15px;
  border-radius: 3px;
}
.dark-state {
  background-color: rgb(255, 255, 255);
  width: 30px;
  height: 15px;
  border-radius: 3px;
}
</style>
