<template>
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '~/components/shared/button.vue'
import type { Product } from '~/pages/storefront/[uuid].vue';

const props = defineProps<{
    products: Product[]
}>()
</script>