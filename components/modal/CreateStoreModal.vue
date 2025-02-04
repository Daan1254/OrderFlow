<script setup>
import { DialogTitle } from "@headlessui/vue";
import { InformationCircleIcon } from "@heroicons/vue/24/outline";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { createStoreSchema } from "~/schema/createStoreSchema";
import { useToast } from "@/components/ui/toast/use-toast";
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  onClose: {
    type: Function,
    default: () => {},
  },
});

const toast = useToast();

const { handleSubmit, handleReset, values, errors, isSubmitting } = useForm({
  initialValues: {
    name: "",
    settings: {
      primaryColor: "#000000",
      secondaryColor: "#000000",
    },
  },
  validationSchema: toTypedSchema(createStoreSchema),
});

const onSubmit = handleSubmit(async (values) => {
  console.log(values);

  const { data, error } = await useFetch("/api/store/create", {
    method: "POST",
    body: JSON.stringify(values),
  });

  console.log(data, error);

  if (error.value) {
    console.log(error.value.statusMessage);
    toast.toast({
      variant: "destructive",
      title: "Error",
      description: error.value.statusMessage,
    });
    return;
  }

  toast.toast({
    title: "Success",
    description: `Store (${data.value.name}) created successfully`,
  });

  handleReset();
  props.onClose();
});
</script>

<template>
  <BaseModel
    v-model="props.isOpen"
    :isOpen="props.isOpen"
    @onClose="props.onClose"
    :canBeClosed="true"
  >
    <Loading :isLoading="isSubmitting" />
    <div class="sm:flex sm:items-start">
      <div
        class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10"
      >
        <InformationCircleIcon
          class="size-6 text-blue-600"
          aria-hidden="true"
        />
      </div>
      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <DialogTitle as="h3" class="text-base font-semibold text-gray-900"
          >Plan your store</DialogTitle
        >
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            Create a store to get started selling your products
          </p>
        </div>
      </div>
    </div>
    <form @submit="onSubmit" class="mt-8 sm:mt-4 sm:flex flex-col gap-y-4">
      <FormField v-slot="{ componentField }" name="name">
        <FormLabel> Store Name </FormLabel>
        <FormDescription>
          This is the name of your store that will be displayed to your
          customers
        </FormDescription>
        <FormControl>
          <Input v-bind="componentField" placeholder="eg: Bakker Bart" />
        </FormControl>
      </FormField>

      <FormField v-slot="{ componentField }" name="storeSettings.primaryColor">
        <FormLabel> Primary Color </FormLabel>
        <FormDescription>
          This is the primary color of your store that will be displayed to your
          customers
        </FormDescription>
        <FormControl>
          <Input
            class="w-full text-3xl"
            type="color"
            v-bind="componentField"
            placeholder="eg: #000000"
          />
        </FormControl>
      </FormField>

      <FormField
        v-slot="{ componentField }"
        name="storeSettings.secondaryColor"
      >
        <FormLabel> Secondary Color </FormLabel>
        <FormDescription>
          This is the secondary color of your store that will be displayed to
          your customers
        </FormDescription>
        <FormControl>
          <Input
            class="w-full text-3xl"
            type="color"
            v-bind="componentField"
            placeholder="eg: #000000"
          />
        </FormControl>
      </FormField>

      <FormField v-slot="{ componentField }" name="storeSettings.darkMode">
        <div class="flex items-center justify-between gap-x-2">
          <FormLabel> Darkmode </FormLabel>
          <FormControl>
            <Checkbox v-bind="componentField" />
          </FormControl>
        </div>
        <FormDescription>
          This will make the background of your store darker and the text colors
          of your store lighter
        </FormDescription>
      </FormField>

      <Button> Create Store </Button>
    </form>
  </BaseModel>
</template>
