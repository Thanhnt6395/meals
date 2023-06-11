<template>
  <div class="bg-white shadow rounded-xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
    <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
      <img 
        :src="meal.strMealThumb" 
        alt="strMeal" 
        class="rounded-t-xl h-48 w-full object-cover"
      >
    </router-link>
    <div class="p-3">
      <h3 class="font-semibold">{{ meal.strMeal }}</h3>
      <p class="mb-4 line-clamp-3">
        {{ truncateWords(meal.strInstructions, 24) }}
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
      </div>
    </div>      
  </div>
</template>

<script setup>
import YouTubeButton from '../components/YouTubeButton.vue';
import { truncateWords } from '../filters'

const { meal } = defineProps({
  meal: Object,
  required: true,
})

</script>