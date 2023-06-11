<template>
  <div class="flex gap-2 justify-center">
    <router-link 
      v-for="letter of letters" 
      :key="letter" 
      :to="{name: 'byLetter', params: {letter}}"
      class=""
    >{{ letter }}</router-link>
  </div>

  <Meals :meals="meals"></Meals>
</template>

<script setup>
import { computed, onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import store from "../store"
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFJHIKOMNPQRST".split("");
const meals = computed(() => store.state.searchByLetter);

watch(route, () => {
  store.dispatch('searchByLetter', route.params.letter)
})

onMounted(() => {
  store.dispatch('searchByLetter', route.params.letter)
})

</script>
