<template>
  <div class="flex flex-col">
    <div class="flex" v-for="(data, index) in todoList" :key="index">
      <CardsNumber :data="index+1"/>
      <CardsTodo :data="data" />
    </div>
  </div>
</template>

<script setup>
import CardsNumber from "@/components/cards/CardsNumber.vue";
import CardsTodo from "@/components/cards/CardsTodo.vue";
import { ref } from "vue";

const todoList = ref([
  { id: "0", name: "work", description: "verve", status: "done", date: "" },
  { id: "1", name: "home work", description: "ervreervv", status: "in progress", date: "2024" },
  { id: "2", name: "go to gym", description: "rererevervev", status: "not do", date: "2024" },
  { id: "3", name: "exercise", description: "ervre", status: "done", date: "2024" },
  { id: "4", name: "going to mall", description: "vrevrevev", status: "in progress", date: "2024" },
]);
</script>
