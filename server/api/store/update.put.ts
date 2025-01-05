import prisma from "~/lib/prisma";
import { updateStoreSchema } from "~/schema/updateStoreSchema";

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

  return {
    ...body,
  };

  // const store = await prisma.store.findFirst({
  //   where: {
  //     userId: event.context.auth.user.id,
  //   },
  // });

  // if (!store) {
  //   const store = await prisma.store.create({
  //     data: {
  //       name: event.context.auth.user.name,
  //     },
  //   });
  // }
});
