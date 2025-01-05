import prisma from "~/lib/prisma";
import { updateStoreSchema } from "~/schema/updateStoreSchema";
import { randomUUID } from "crypto";

export default defineEventHandler(async (event) => {
  // check if store exists
  const body = await readBody(event);

  const result = updateStoreSchema.safeParse(body);

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid request body",
    });
  }

  const store = await prisma.store.findFirst({
    where: {
      id: event.context.auth.user.id,
    },
  });

  if (!store) {
    const uuid = randomUUID();
    const store = await prisma.store.create({
      data: {
        id: uuid,
        name: result.data.name,
        slug: generateSlug(result.data.name),
        User: {
          connect: {
            id: event.context.auth.user.id,
          },
        },
        url: "test",
        StoreSettings: {
          create: {
            settings: {},
            storeId: uuid,
          },
        },
      },
    });

    return {
      ...store,
    };
  }

  const updatedStore = await prisma.store.update({
    where: {
      id: store.id,
    },
    data: {
      name: result.data.name,
      slug: generateSlug(result.data.name),
    },
  });

  return {
    ...updatedStore,
  };
});

const generateSlug = (name: string) => {
  return name.toLowerCase().replace(/ /g, "-");
};
