<script setup lang="ts">
import { useForm } from "vee-validate";
import {
  type UpdateStoreSchema,
  updateStoreSchema,
} from "~/schema/updateStoreSchema";
import { Form, Field } from "vee-validate";
definePageMeta({
  layout: "dashboard",
});

const storeForm = ref<UpdateStoreSchema>({
  name: "",
});

const onSubmit = async () => {
  const result = updateStoreSchema.safeParse(storeForm.value);

  if (!result.success) {
    alert(JSON.stringify(result.error));
    return;
  }

  const { data, error } = await useFetch(
    "http://localhost:3000/api/store/update",
    {
      method: "POST",
      body: result.data,
    }
  );

  console.log(data, error);
};
</script>

<template>
  <form @submit="onSubmit" class="flex flex-col w-full px-4 py-2 rounded-lg">
    <div
      class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"
    >
      <div>
        <h2 class="text-base/7 font-semibold text-gray-900">
          General Settings
        </h2>
        <p class="mt-1 text-sm/6 text-gray-600">
          Here you can manage your store settings.
        </p>
      </div>

      <div
        class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2"
      >
        <div class="sm:col-span-4">
          <label for="name" class="block text-sm/6 font-medium text-gray-900"
            >Store Name</label
          >
          <div class="mt-2">
            <div
              class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
            >
              <div
                class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"
              >
                www.orderflow.daanverbeek.nl/
              </div>
              <input
                type="text"
                name="name"
                id="name"
                class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                placeholder="bakker-bart"
                v-model="storeForm.name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Button
      variant="default"
      class="w-full mt-4 bg-dashboardPrimary transition-colors hover:bg-dashboardPrimary/90"
      size="lg"
      type="submit"
    >
      Save
    </Button>
  </form>
</template>
