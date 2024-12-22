<template>
  <div class="flex">
    <!-- Sidebar with light blue theme -->
    <aside class="w-64 fixed h-full bg-sky-300 shadow-lg border-r ">
      <nav class="p-4 space-y-2">
        <a 
          v-for="(item, index) in menuItems" 
          :key="index"
          href="#" 
          class="block px-4 py-3 rounded-lg text-sky-100 hover:text-white hover:bg-sky-800 transition-all duration-200 ease-in-out"
        >
          {{ item }}
        </a>
      </nav>
    </aside>
  </div>
</template>

<script setup>
const menuItems = [
  'Categories',
  'Featured',
  'New Arrivals',
  'Sale'
];
</script>