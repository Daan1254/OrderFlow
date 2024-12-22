<template>
    <div class="bg-white mt-4 p-4 flex h-max gap-6 overflow-x-auto">
        <CategorieButton
          v-for="category in categories"
          :key="category"
          :image="`/images/categories/McChicken.png`"
          :category="category"
          :currentCategory="selectedCategory"
          :onClick="() => selectedCategory = category"
        />
      </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import CategorieButton from './CategorieButton.vue'
const props = defineProps<{
    categories: string[]
    selectedCategory: string
}>()

const selectedCategory = ref<string>(props.selectedCategory)
</script>