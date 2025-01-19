import { createStoreSchema } from "~/schema/createStoreSchema";
import prisma from "~/lib/prisma";
import { randomUUID } from "crypto";
import { generateSlug } from "~/utils/store";
import { z } from "zod";

export type CreateStoreBody = z.infer<typeof createStoreSchema>;

export default defineEventHandler(async (event) => {
  const body = await readBody<CreateStoreBody>(event);

  const result = createStoreSchema.safeParse(body);
  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage:
        result.error.flatten().fieldErrors.name?.[0] ?? "Invalid request",
    });
  }

  const slug = generateSlug(result.data.name);

  const exists = await prisma.store.findFirst({
    where: {
      slug: slug,
    },
  });

  if (exists) {
    throw createError({
      statusCode: 400,
      statusMessage: "Store already exists",
    });
  }
  const uuid = randomUUID();

  return await prisma.store.create({
    data: {
      id: uuid,
      name: result.data.name,
      slug: slug,
      User: {
        connect: {
          id: event.context.auth.user.id,
        },
      },
      url: `${process.env.BASE_URL}/${slug}`,
      StoreSettings: {
        create: {
          settings: body.storeSettings,
          storeId: uuid,
        },
      },
    },
  });
});
