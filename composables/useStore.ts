export type Store = {
  id: string;
  name: string;
  slug: string;
  url: string;
  storeSettingsId: string;
  userId: string;
};

export const useStore = () => {
  const router = useRouter();
  const store = ref<Store | null>(null);

  const fetch = async () => {
    const { data } = await useFetch("/api/store/find", {
      params: {
        id: router.currentRoute.value.params.id,
      },
    });

    store.value = data.value;
  };

  return { store, fetch };
};
