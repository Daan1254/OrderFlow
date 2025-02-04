import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const params = getQuery(event);

  if (!params.id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing store id",
    });
  }

  const store = await prisma.store.findFirst({
    where: {
      id: params.id as string,
      userId: event.context.user.id,
    },
  });
  return store;
});
