<script setup lang="ts">
definePageMeta({ auth: false });
import { Button } from "~/components/ui/button";
const { signIn } = useAuth();
</script>

<template>
  <div class="flex h-screen flex-1 flex-col justify-center">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h3 class="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        OrderFlow
      </h3>
      <h2
        class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Button
        @click="signIn('github')"
        variant="default"
        class="w-full mt-4"
        size="lg"
        type="submit"
      >
        Login with Github
      </Button>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Github account is required to access this app.
      </p>
    </div>
  </div>
</template>
