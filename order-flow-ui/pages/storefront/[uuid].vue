<template>
  <template v-if="error">
    <div class="flex h-screen bg-background items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold text-destructive mb-4">Error</h1>
        <p class="text-gray-600">{{ error.message }}</p>
      </div>
    </div>
  </template>
  <div v-if="isLoading" class="flex h-screen bg-background">
    <div class="flex-1 flex flex-col">
      <div class="bg-white p-4 shadow-sm">
        <h1 class="text-2xl font-bold text-center text-destructive">Loading...</h1>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-destructive"></div>
      </div>
    </div>
  </div>
  <div v-if="!isLoading && !error" class="flex h-screen bg-background">
    <div class="flex-1 flex flex-col">
      <StorefrontHeader :storeName="data?.data.name ?? 'Unknown'" />

      <Categories :categories="categories" :selectedCategory="selectedCategory" />
      <ProductGrid :products="products" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Categories from '~/components/Storefront/Categories.vue'
import ProductGrid from '~/components/Storefront/ProductGrid.vue'
import { ref } from 'vue'
import { useStoreControllerGetStore } from "~/api/endpoints/store/store";
const { uuid } = useRoute().params
defineProps({
  uuid: String
})


export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Big Mac®",
    price: 5.95,
    image: "/images/categories/McChicken.png",
    category: "Burgers"
  },
  {
    id: 2,
    name: "McChicken®",
    price: 4.95,
    image: "/images/categories/McChicken.png",
    category: "Burgers"
  },
  {
    id: 3,
    name: "Franse Frietjes",
    price: 2.95,
    image: "/images/categories/McChicken.png",
    category: "Sides"
  },
  {
    id: 4,
    name: "Cola",
    price: 2.50,
    image: "/images/categories/McChicken.png",
    category: "Drinks"
  }
]

const categories = ["Burgers", "Sides", "Drinks"]
const selectedCategory = ref("Burgers")
const { data, isLoading, error } = useStoreControllerGetStore(uuid as string)

</script>
