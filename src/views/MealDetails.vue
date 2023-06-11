<template>
  <div class="max-w-[800px] mx-auto">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMealThumb">
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 mb-5">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(value, name, index) in Object.entries(meal)" :key="index">
            <li v-if="value[0].includes('strIngredient') && value[1] != ''">{{ value[0].replace('strIngredient', '') }}. {{ value[1] }}</li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(value, name, index) in Object.entries(meal)" :key="index">
            <li v-if="value[0].includes('strMeasure')">{{ value[1] }}</li>
          </template>
        </ul>
      </div>
    </div>

    <div class="">
      <YouTubeButton :href="meal.strYoutube">Go to YouTube</YouTubeButton>
      <a 
        :href="meal.strSource" 
        target="_blank" 
        class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-500 hover:text-white hover:bg-indigo-500 transition-colors"
      >Go to source</a>
    </div>

    <div class="mt-4">
      {{ meal.strInstructions }}
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import axiosClient from '../axiosClient';
  import YouTubeButton from '../components/YouTubeButton.vue';

  const route = useRoute()
  const meal = ref({})
  const ingredients = ref([])

  onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
      .then(({data}) => {
        meal.value = data.meals[0] || {}
        if (meal.value) {
          ingredients.value = meal.value
        }
      })
  })
</script>