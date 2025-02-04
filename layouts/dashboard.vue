<script setup>
definePageMeta({
  auth: true,
});
import {
  PackageIcon,
  StoreIcon,
  ShoppingCartIcon,
  HomeIcon,
  SettingsIcon,
} from "lucide-vue-next";

const router = useRouter();

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
    current: router.path === "/dashboard",
  },
  {
    name: "Store",
    href: "/dashboard/store",
    icon: StoreIcon,
    current: router.path === "/dashboard/store",
  },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: PackageIcon,
    current: router.path === "/dashboard/products",
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingCartIcon,
    current: router.path === "/dashboard/orders",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: SettingsIcon,
    current: router.path === "/dashboard/settings",
  },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

const { data } = useAuth();
</script>

<template>
  <div class="bg-gray-100 min-h-screen w-full">
    <div
      class="h-[99vh] w-screen flex bg-white flex-row gap-0 rounded-[100px] mx-auto"
    >
      <div
        class="flex flex-col gap-y-5 border-dashboardPrimary bg-dashboardPrimary rounded-l-[100px] px-6 border-r shadow-sm"
      >
        <div class="flex h-16 shrink-0 items-center">
          <h1 class="text-2xl font-bold">
            Order<span class="text-dashboardPrimary">Flow</span>
          </h1>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-50 text-dashboardPrimary'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-dashboardPrimary',
                      'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-dashboardPrimary'
                          : 'text-gray-400 group-hover:text-dashboardPrimary',
                        'size-6 shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                    <span
                      v-if="item.count"
                      class="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs/5 font-medium text-gray-600 ring-1 ring-inset ring-gray-200"
                      aria-hidden="true"
                      >{{ item.count }}</span
                    >
                  </a>
                </li>
              </ul>
            </li>
            <!-- <li>
            <div class="text-xs/6 font-semibold text-gray-400">Your teams</div>
            <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li v-for="team in teams" :key="team.name">
                <a
                  :href="team.href"
                  :class="[
                    team.current
                      ? 'bg-gray-50 text-dashboardPrimary'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-dashboardPrimary',
                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                  ]"
                >
                  <span
                    :class="[
                      team.current
                        ? 'border-dashboardPrimary text-dashboardPrimary'
                        : 'border-gray-200 text-gray-400 group-hover:border-dashboardPrimary group-hover:text-dashboardPrimary',
                      'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                    ]"
                    >{{ team.initial }}</span
                  >
                  <span class="truncate">{{ team.name }}</span>
                </a>
              </li>
            </ul>
          </li> -->
            <li class="-mx-6 mt-auto">
              <div
                class="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900"
              >
                <img
                  class="size-8 rounded-full bg-gray-50"
                  :src="data?.user.image"
                  alt=""
                />
                <span class="sr-only">Your profile</span>
                <span aria-hidden="true">{{ data?.user.name }}</span>
                <span
                  @click="router.push('/dashboard')"
                  class="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs/5 font-medium text-gray-600 ring-1 ring-inset ring-gray-200 hover:ring-dashboardPrimary hover:text-dashboardPrimary cursor-pointer transition-all duration-200"
                  >Switch Store</span
                >
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex grow flex-col gap-y-5 overflow-y-auto px-12 mt-14">
        <slot />
      </div>
    </div>
  </div>
</template>
