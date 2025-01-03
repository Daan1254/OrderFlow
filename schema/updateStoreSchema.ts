import { z } from "zod";

export const updateStoreSchema = z.object({
  name: z.string().min(1),
  // settings: z.object({
  //   logo: z.string().min(1),
  //   favicon: z.string().min(1),
  //   primaryColor: z.string().min(1),
  //   secondaryColor: z.string().min(1),
  // }),
});

export type UpdateStoreSchema = z.infer<typeof updateStoreSchema>;
