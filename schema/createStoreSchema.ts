import { z } from "zod";

export const createStoreSchema = z.object({
  name: z.string().min(3),
  storeSettings: z.object({
    primaryColor: z.string().min(3),
    secondaryColor: z.string().min(3),
    darkMode: z.boolean().default(false),
  }),
});

export type CreateStoreSchema = z.infer<typeof createStoreSchema>;
