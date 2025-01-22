<script setup lang="ts">
definePageMeta({ auth: true });
const { data } = useAuth();

const { data: stores } = useFetch("/api/store/list");
const isModalOpen = ref(false);
</script>

<template>
  <CreateStoreModal
    :isOpen="isModalOpen"
    :onClose="() => (isModalOpen = false)"
  />
  <div class="bg-dashboardBackground min-h-screen w-full">
    <div class="flex flex-col justify-center items-center pt-14 px-4">
      <h1 class="text-3xl font-bold mb-2">
        Welcome back,
        <span class="text-dashboardPrimary">{{ data?.user.name }}</span>
      </h1>
      <h2 class="text-xl text-gray-600 mb-8">Who is managing today?</h2>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl"
      >
        <!-- Store Profile -->
        <StoreItem v-for="store in stores" :key="store.id" :store="store" />
        <!-- Add Store Button -->
        <div class="cursor-pointer" @click="isModalOpen = true">
          <div
            class="flex flex-col items-center space-y-3 transition-transform duration-200 hover:scale-105"
          >
            <div
              class="w-32 h-32 rounded-lg border-4 border-dashed border-gray-300 flex items-center justify-center hover:border-dashboardPrimary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <span class="text-lg font-medium text-gray-600">Add Store</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
