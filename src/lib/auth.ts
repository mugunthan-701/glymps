import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import prisma from "../../prisma/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GoogleProvider, GithubProvider],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          email: user.email,
          name: user.name,
          picture: user.image,
          sub: user.id,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          email: token.email,
          id: token.sub,
          image: token.picture,
          name: token.name,
        },
      };
    },
    async signIn({ user }) {
      const userIsVaid = await prisma.user.findFirst({
        where: {
          email: user.email as string,
        },
      });
      if (!userIsVaid) {
        const create = await prisma.user.create({
          data: {
            email: user.email as string,
            image: user.image as string,
            name: user.name as string,
          },
        });
        if (create) {
          return true;
        }
      }
      return true;
    },
  },
});
