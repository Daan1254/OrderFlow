import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import prisma from "~/lib/prisma";
import { LoginProvider } from "@prisma/client";

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return `${baseUrl}/dashboard`;
    },
    async signIn({ user, account }) {
      if (account?.provider === "github") {
        const count = await prisma.user.count({
          where: {
            id: user.id,
          },
        });
        if (count > 0 && user.email) {
          await prisma.user.create({
            data: {
              email: user.email,
              loginProvider: LoginProvider.GITHUB,
            },
          });
        }
      }
      return true;
    },
    jwt: async ({ token, user, account }) => {
      return token;
    },
  },
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});
