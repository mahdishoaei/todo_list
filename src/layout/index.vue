<template>
  <div class="main-layout bg-gray-300 w-full h-screen">
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
</script>
