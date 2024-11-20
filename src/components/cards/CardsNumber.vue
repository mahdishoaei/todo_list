<template>
  <AppCard
    class="mt-4 ml-2 mr-1 flex justify-center items-center"
    width="28px"
    height="8dvh"
  >
    <template #content>
      <span class="text-center"> {{ data }}</span>
    </template>
  </AppCard>
</template>

<script setup>
import AppCard from "@/components/app/card/AppCard.vue";

const props = defineProps({
  data: {
    type: String,
    default: "",
  },
});
</script>
