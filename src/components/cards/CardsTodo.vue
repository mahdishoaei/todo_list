<template>
  <AppCard class="mt-4 ml-1 flex" width="90%" height="8dvh">
    <template #content>
      <div class="flex px-2 items-center">
        <span class="px-2">{{ data.id }}</span>
        <span class="px-2">{{ data.name }}</span>
        <span class="px-2">{{ data.description }}</span>
        <span class="px-2">{{ data.status }}</span>
        <span class="px-2">{{ data.date }}</span>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import AppCard from "@/components/app/card/AppCard.vue";

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>
