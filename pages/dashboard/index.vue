<script setup lang="ts">
definePageMeta({ auth: true });
const { data } = useAuth();
</script>

<template>
  <div class="bg-dashboardBackground h-screen w-full">
    <div class="flex flex-col justify-center items-center mt-14">
      <h1 class="text-2xl font-bold">
        Welcome back,
        <span class="text-dashboardPrimary"> {{ data?.user.name }}</span>
      </h1>
      <h2 class="text-xl font-bold">Please select a store to manage</h2>

      <div class="flex flex-row justify-center items-center mt-8">
        <div class="flex flex-col items-center">
          <div
            class="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md"
          >
            <span class="text-2xl font-bold text-dashboardPrimary">A</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
