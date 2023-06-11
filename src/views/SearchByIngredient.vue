<template>
  <Meals :meals="meals"></Meals>
</template>

<script setup>
import { computed, onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import store from "../store"
import Meals from "../components/Meals.vue"

const route = useRoute();
const meals = computed(() => store.state.searchByIngredients);

onMounted(() => {
  store.dispatch('searchByIngredients', route.params.ingredient)
})

</script>
