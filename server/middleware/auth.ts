import { H3Event } from "h3";
import { getServerSession } from "#auth";

export default defineEventHandler(async (event: H3Event) => {
  if (event.path.startsWith("/api/auth") || !event.path.startsWith("/api")) {
    return;
  }

  const session = await getServerSession(event);

  if (!session) {
    throw createError({
      statusMessage: "Unauthenticated",
      statusCode: 403,
    });
  }

  event.context.auth = {
    id: session.user.id,
  };
});
