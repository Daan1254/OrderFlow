import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const user = event.context.auth.user;

  const store = await prisma.store.count({
    where: {
      userId: user.id,
    },
  });

  return {
    hasStore: store > 0,
  };
});
