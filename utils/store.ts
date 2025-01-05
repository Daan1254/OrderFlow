export const prohibitedSlugs = ["auth", "dashboard", "onboarding"];

export const generateSlug = (name: string) => {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  if (prohibitedSlugs.includes(slug)) {
    return slug + "-" + Math.floor(Math.random() * 1000);
  }
  return slug;
};
