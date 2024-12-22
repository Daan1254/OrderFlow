<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      <!-- Show loading state or data -->
      <template v-if="isLoading">Loading...</template>
      <template v-else-if="error">Error: {{ error.message }}</template>
      <template v-else>{{ data?.data }}</template>
    </h1>
  </div>
</template>

<script setup>
import { useAppControllerGetHello } from '~/api/endpoints/app/app';

const { data, isLoading, error } = useAppControllerGetHello();
</script>
