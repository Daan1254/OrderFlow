<template>
  <div class="flex h-screen bg-background">
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <div class="bg-white p-4 shadow-sm">
        <h1 class="text-2xl font-bold text-center text-destructive">Bestel hier uw maaltijd</h1>
      </div>

      <!-- Categories -->
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

      <!-- Products Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 overflow-y-auto">
        <Card 
          v-for="product in products" 
          :key="product.id"
          class="hover:shadow-lg transition-shadow bg-white"
        >
          <CardContent class="p-4 flex flex-col items-center">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-32 h-32 object-cover rounded-md"
            />
            <h3 class="font-semibold mt-2 text-destructive">{{ product.name }}</h3>
            <p class="text-secondary font-bold">€{{ product.price.toFixed(2) }}</p>
            <Button 
              class="mt-2 w-full"
              size="default"
            >
              Toevoegen
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import Button from '~/components/shared/button.vue'
import CategorieButton from '~/components/Storefront/CategorieButton.vue'

import { ref } from 'vue'

interface Product {
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
</script>
