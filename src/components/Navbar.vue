<template>
  <header class="bg-white shadow h-[46px]">
    <nav class="flex justify-between items-center px-5 h-full">
      <router-link 
        :to="{name: 'home'}" 
        class="inline-flex items-center h-full"
      >Home</router-link>
      <div class="sm:static sm:flex sm:justify-end absolute bg-white left-0 top-[46px] w-full px-5 sm:h-full h-fit">
        <div class="sm:flex sm:flex-row flex-col hidden nav-bars gap-3 mb-3 sm:mb-0">
          <router-link 
            :to="{name: 'byName'}" 
            class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors focus:bg-purple-100"
            @click="onToggle" 
          >Search Meals</router-link>
          <router-link 
            :to="{name: 'byLetter'}" 
            class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors"
            @click="onToggle" 
          >Meals By Letter</router-link>
          <router-link 
            :to="{name: 'ingredients'}" 
            class="px-2 h-full hover:bg-purple-100 inline-flex items-center transition-colors"
            @click="onToggle" 
          >Meals By Ingredients</router-link>
        </div>
      </div>
      
      <button class="inline-flex items-center sm:hidden p-5" @click="onToggle">
        <font-awesome-icon icon="fa-solid fa-bars" class="mx-2 text-xl" v-if="!clickToggle"/>
        <font-awesome-icon icon="fa-solid fa-xmark" class="mx-2 text-xl" v-else />
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";


const clickToggle = ref(false)

function onToggle() {
  clickToggle.value = !clickToggle.value ? true : false
  document.querySelector('.nav-bars').classList.toggle('hidden')
  document.querySelector('.nav-bars').classList.toggle('flex')
}

</script>