<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const { data } = useAuth();
</script>

<template>
  <div>
    <h1>{{ data?.user.name }}</h1>
  </div>
</template>
