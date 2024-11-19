<template>
  <div
    :class="{ 'bg-gray-900': themeState == 'dark' }"
    class="navbar flex w-full justify-center h-14 bg-gray-400"
  >
    <div class="left-section w-1/3"></div>
    <div
      class="flex h-14 w-1/3 justify-center"
      v-for="(item, index) in items"
      :key="index"
      @click="changeRoute(item.path)"
    >
      <div
        :class="{
          'active-route': item.path == route.path,
          'text-gray-100': themeState == 'dark',
        }"
        class="w-12 h-14 text-center pt-6 cursor-pointer hover:text-gray-300"
      >
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="flex w-1/3 justify-end mt-5">
      <ThemeSwicher />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import ThemeSwicher from "@/components/themeSwicher";
import { usethemeStore } from "@/stores/theme";

const themeStore = usethemeStore();
const themeState = computed(() => {
  return themeStore.theme;
});

const router = useRouter();
const route = useRoute();
const items = ref([
  { id: "0", title: "Home", path: "/" },
  { id: "1", title: "Create", path: "/create" },
  { id: "2", title: "List", path: "/list" },
]);

const changeRoute = (path) => {
  router.push(path);
};
</script>

<style scoped>
.active-route {
  border-bottom: 2px solid rgb(0, 26, 255);
}
</style>
