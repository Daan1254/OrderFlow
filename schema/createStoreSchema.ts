import { z } from "zod";

export const createStoreSchema = z.object({
  name: z.string().min(3),
});

export type CreateStoreSchema = z.infer<typeof createStoreSchema>;
