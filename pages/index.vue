<script setup lang="ts">
definePageMeta({ auth: false });
</script>

<template>
  <div
    class="flex h-screen flex-1 flex-col justify-center w-screen text-3xl font-bold text-center"
  >
    <h1>OrderFlow</h1>
    <h2 class="text-sm">
      <a href="/auth/login" class="text-primary">Sign in</a> to your account
    </h2>
  </div>
</template>
