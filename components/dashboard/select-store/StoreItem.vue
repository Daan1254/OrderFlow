<script setup lang="ts">
export type Store = { id: string; name: string; slug: string };

const props = defineProps<{
  store: Store;
}>();
</script>

<template>
  <div
    class="group cursor-pointer"
    @click="navigateTo(`/dashboard/${store.id}`)"
  >
    <div
      class="flex flex-col items-center space-y-3 transition-transform duration-200 group-hover:scale-105"
    >
      <div
        class="w-32 h-32 rounded-lg bg-white flex items-center justify-center shadow-lg group-hover:border-4 border-dashboardPrimary"
      >
        <span class="text-4xl font-bold text-dashboardPrimary">
          {{ store.name.charAt(0).toUpperCase()
          }}{{ store.name.charAt(1).toUpperCase() }}
        </span>
      </div>
      <span class="text-lg font-medium">{{ store.name }}</span>
    </div>
  </div>
</template>
