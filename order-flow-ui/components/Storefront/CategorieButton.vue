<template>
    <Button
     class="flex flex-col items-center h-20 w-20"
     @click="onClick"
     :variant="currentCategory === category ? 'default' : 'outline'"
    >
        <img :src="image" :alt="category" class="w-8 h-8" />
        {{ category }}
    </Button>
</template>

<script setup lang="ts">
import Button from '../shared/button.vue'

const props = defineProps<{
    image: string
    category: string
    currentCategory: string
    onClick: () => void
}>()
</script>