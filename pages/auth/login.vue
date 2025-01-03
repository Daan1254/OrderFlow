<script setup lang="ts">
definePageMeta({ auth: false });

import { loginSchema, type LoginSchema } from "~/schema/loginSchema";
import { AutoForm } from "~/components/ui/auto-form";
import { Button } from "~/components/ui/button";
const { signIn } = useAuth();
const router = useRouter();

const handleSubmit = async (values: LoginSchema) => {
  console.log(values);
  const result = await signIn("credentials", {
    email: values.email,
    password: values.password,
  });
  console.log(result);

  // Redirect to home page on success
  router.push("/dashboard");
};
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
      <AutoForm @submit="handleSubmit" :schema="loginSchema">
        <Button variant="default" class="w-full mt-4" size="lg" type="submit">
          Login
        </Button>
      </AutoForm>
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
        Not a member?
        {{ " " }}
        <a href="#" class="text-primary font-semibold">Sign up</a>
      </p>
    </div>
  </div>
</template>
