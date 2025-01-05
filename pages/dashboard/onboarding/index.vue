<script setup lang="ts">
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  type CreateStoreSchema,
  createStoreSchema,
} from "~/schema/createStoreSchema";

definePageMeta({
  auth: true,
});

const form = ref<CreateStoreSchema>({
  name: "",
});
const error = ref<string | null>(null);
const router = useRouter();

const onSubmit = async (event: Event) => {
  event.preventDefault();
  console.log(form.value);

  const result = createStoreSchema.safeParse(form.value);
  if (!result.success) {
    error.value = result.error.flatten().fieldErrors.name?.[0] ?? null;
  }

  const postResult = await useFetch("/api/store/create", {
    method: "POST",
    body: form.value,
  });

  router.push("/dashboard");
};
</script>

<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-3xl mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Order<span class="text-dashboardPrimary">Flow</span>
        </h1>
        <p class="text-lg text-gray-600">
          Let's set up your store to start selling online
        </p>
      </div>

      <form
        class="bg-white shadow-lg rounded-lg p-8 border border-gray-200"
        @submit="onSubmit"
      >
        <p v-if="error" class="text-[#FF0000] font-bold text-xs">{{ error }}</p>
        <div>
          <label
            for="store-name"
            class="block text-sm font-medium text-gray-700"
            >Store Name</label
          >
          <Input
            v-model="form.name"
            id="store-name"
            placeholder="Enter your store name"
          />
        </div>

        <Button class="w-full mt-4" type="submit"> Create Store </Button>
      </form>
    </div>
  </div>
</template>
