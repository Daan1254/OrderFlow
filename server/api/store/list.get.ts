import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const user = event.context.auth.user;

  const stores = await prisma.store.findMany({
    where: {
      userId: user.id,
    },
  });

  return stores;
});
