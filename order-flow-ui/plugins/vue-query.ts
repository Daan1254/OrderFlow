import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
    axios.defaults.baseURL = 'http://localhost:3000'
    const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
        refetchOnWindowFocus: false,
      },
    },
  })

  nuxtApp.vueApp.use(VueQueryPlugin, {
    queryClient,
  })
})