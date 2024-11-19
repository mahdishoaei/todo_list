<template>
  <div class="navbar flex w-full justify-center h-14 bg-gray-400">
    <div
      class="flex h-14 w-20 justify-center"
      v-for="(item, index) in items"
      :key="index"
      @click="changeRoute(item.path)"
    >
      <span
        :class="{ 'active-route': item.path == route.path }"
        class="w-12 h-14 text-center pt-6 cursor-pointer hover:text-gray-200"
        >{{ item.title }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

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
