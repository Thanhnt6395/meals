<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600">
    There are no meals.
  </div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";

const { meals } = defineProps({
  meals: Array,
  required: true,
})
</script>