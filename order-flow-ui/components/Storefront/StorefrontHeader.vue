<template>
    <div class="bg-white p-4 shadow-sm">
        <h1 class="text-2xl font-bold text-center text-destructive">{{ props.storeName }}</h1>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    storeName: string
}>()
</script>