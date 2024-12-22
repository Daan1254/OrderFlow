<template>
  <div class="min-h-screen bg-sky-50">
    <!-- Header -->
    <header class="w-full bg-sky-200 shadow-lg h-52 fixed top-0 z-10 relative">
      <div class="w-full h-52 relative overflow-hidden">
        <div class="absolute inset-0 bg-sky-500 bg-opacity-60 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-sky-50">Welcome to Our Restaurant</h1>
        </div>
      </div>
    </header>
    <Sidebar />
    <main class="flex-1 ml-64 p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Storefront/sidebar.vue';
</script>
