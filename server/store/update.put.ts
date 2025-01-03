export default defineEventHandler(async (event) => {
  console.log(event.context.auth);
  return {
    auth: event.context.auth,
  };
});
