<template>
  <div class="p-8 flex justify-center">
		<input 
      type="text" 
      v-model="keyword" 
      class="rounded border-2 border-gray-200 w-1/2" 
      placeholder="Search for Meals" 
      @change="searchMeals"
    >
	</div>

  <Meals :meals="meals"></Meals>
</template>

<script setup>
  import { computed } from '@vue/reactivity';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import store from '../store';
  import Meals from "../components/Meals.vue";

  const keyword = ref('');
  const meals = computed(() => store.state.searchedMeals);
  const route = useRoute()

  function searchMeals() {
    if (keyword.value) {
      store.dispatch('searchMeals', keyword.value)
    } else {
      store.commit('setSearchedMeals', [])
    }
  }

  onMounted(() => {
    keyword.value = route.params.name

    if (keyword.value) {
      searchMeals()
    }
  })
</script>
